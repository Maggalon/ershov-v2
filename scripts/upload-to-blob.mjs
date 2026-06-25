import fs from 'fs';
import path from 'path';
import { put } from '@vercel/blob';

// 1. Simple .env.local parser to load BLOB_READ_WRITE_TOKEN
function loadEnv() {
  try {
    const envPath = path.join(process.cwd(), '.env.local');
    if (fs.existsSync(envPath)) {
      const envContent = fs.readFileSync(envPath, 'utf-8');
      envContent.split('\n').forEach(line => {
        const match = line.match(/^\s*([^#=]+)\s*=\s*(.*)$/);
        if (match) {
          const key = match[1].trim();
          let val = match[2].trim();
          if (val.startsWith('"') && val.endsWith('"')) val = val.slice(1, -1);
          if (val.startsWith("'") && val.endsWith("'")) val = val.slice(1, -1);
          process.env[key] = val;
        }
      });
      console.log('Loaded .env.local variables.');
    }
  } catch (e) {
    console.error("Error loading .env.local:", e.message);
  }
}

loadEnv();

const token = process.env.BLOB_READ_WRITE_TOKEN;
if (!token) {
  console.error('\n\x1b[31mError: BLOB_READ_WRITE_TOKEN not found in environment or .env.local\x1b[0m');
  console.log('\nPlease do the following:');
  console.log('1. Go to your Vercel Dashboard -> Storage -> Blob store.');
  console.log('2. Copy your "Read/Write Token" (starts with "prj_").');
  console.log('3. Create a file named ".env.local" in the project root if it doesn\'t exist.');
  console.log('4. Add the token to it:');
  console.log('   BLOB_READ_WRITE_TOKEN=your_token_here');
  console.log('\nOnce done, re-run this script!');
  process.exit(1);
}

const VIDEOS_DIR = path.join(process.cwd(), 'public', 'videos');
const CACHE_FILE = path.join(process.cwd(), 'scripts', 'uploaded-blobs.json');
const COMPONENTS_DIR = path.join(process.cwd(), 'src', 'components');

// Ensure scripts directory exists
if (!fs.existsSync(path.dirname(CACHE_FILE))) {
  fs.mkdirSync(path.dirname(CACHE_FILE), { recursive: true });
}

// Load cache
let cache = {};
if (fs.existsSync(CACHE_FILE)) {
  try {
    cache = JSON.parse(fs.readFileSync(CACHE_FILE, 'utf-8'));
  } catch (e) {
    console.error("Failed to parse cache file:", e.message);
  }
}

// Recursive file scanner
function getFiles(dir, files = []) {
  if (!fs.existsSync(dir)) return files;
  const fileList = fs.readdirSync(dir);
  for (const file of fileList) {
    const name = path.join(dir, file);
    if (fs.statSync(name).isDirectory()) {
      getFiles(name, files);
    } else if (file.endsWith('.mp4')) {
      files.push(name);
    }
  }
  return files;
}

async function run() {
  const videoFiles = getFiles(VIDEOS_DIR);
  console.log(`Found ${videoFiles.length} video files to process.`);

  const mappings = { ...cache };
  let uploadedCount = 0;

  for (const filePath of videoFiles) {
    // Generate the path relative to /public, e.g. "/videos/horizontal/horizontal_1.mp4"
    const relativePath = '/' + path.relative(path.join(process.cwd(), 'public'), filePath).replace(/\\/g, '/');

    if (mappings[relativePath]) {
      console.log(`[CACHED] ${relativePath} -> ${mappings[relativePath]}`);
      continue;
    }

    console.log(`[UPLOADING] ${relativePath} (${(fs.statSync(filePath).size / (1024 * 1024)).toFixed(2)} MB)...`);
    try {
      const fileBuffer = fs.readFileSync(filePath);
      const blobName = relativePath.substring(1); 
      const blob = await put(blobName, fileBuffer, {
        access: 'public',
        token: token,
      });

      mappings[relativePath] = blob.url;
      uploadedCount++;
      console.log(`[SUCCESS] Uploaded ${relativePath} to ${blob.url}`);

      // Save cache immediately
      fs.writeFileSync(CACHE_FILE, JSON.stringify(mappings, null, 2));
    } catch (error) {
      console.error(`[ERROR] Failed to upload ${relativePath}:`, error.message);
    }
  }

  console.log(`\nUpload complete. ${uploadedCount} new files uploaded.`);

  // Now perform replacement in source files
  console.log('\nScanning components for local video references to replace...');
  const filesToScan = [
    path.join(COMPONENTS_DIR, 'Projects.tsx'),
    path.join(COMPONENTS_DIR, 'Showreel.tsx')
  ];

  let replacedTotal = 0;

  for (const file of filesToScan) {
    if (!fs.existsSync(file)) continue;
    let content = fs.readFileSync(file, 'utf-8');
    let fileModified = false;

    for (const [localPath, blobUrl] of Object.entries(mappings)) {
      // Find all exact occurrences of the local path in quotes (e.g. "/videos/horizontal/horizontal_1.mp4")
      // and replace them with the blobUrl
      const quoteTypes = ['"', "'", '`'];
      for (const q of quoteTypes) {
        const target = q + localPath + q;
        const replacement = q + blobUrl + q;
        if (content.includes(target)) {
          content = content.replaceAll(target, replacement);
          fileModified = true;
          replacedTotal++;
          console.log(`[REPLACED] in ${path.basename(file)}: ${target} -> ${replacement}`);
        }
      }
    }

    if (fileModified) {
      fs.writeFileSync(file, content, 'utf-8');
      console.log(`[SAVED] Updated ${path.basename(file)}`);
    }
  }

  console.log(`\nReplacement complete. Total references updated: ${replacedTotal}`);
  console.log('\nOnce deployed to Vercel, the website will stream videos directly from Vercel Blob CDN!');
}

run().catch(err => {
  console.error("Critical error in upload script:", err);
});
