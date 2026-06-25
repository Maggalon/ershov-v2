import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Станислав Ершов — Режиссер монтажа & VFX-художник | Портфолио",
  description: "Портфолио Станислава Ершова: профессиональный монтаж видео, визуальные эффекты (VFX), цветокоррекция и саунд-дизайн для кино, клипов и рекламы на заказ.",
  keywords: [
    "режиссер монтажа",
    "VFX-художник",
    "видеомонтаж на заказ",
    "цветокоррекция видео",
    "саунд-дизайн",
    "композитинг",
    "монтаж клипов",
    "монтаж рекламы",
    "Станислав Ершов",
    "видеомонтажер"
  ],
  openGraph: {
    title: "Станислав Ершов — Режиссер монтажа & VFX-художник",
    description: "Профессиональный монтаж видео, визуальные эффекты (VFX), цветокоррекция и саунд-дизайн для кино, клипов и рекламы.",
    url: "https://ershov-v2.vercel.app", // Fallback URL or domain
    siteName: "Портфолио Станислава Ершова",
    images: [
      {
        url: "/editor_portrait.jpg",
        width: 800,
        height: 1000,
        alt: "Станислав Ершов — Режиссер монтажа & VFX",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Станислав Ершов — Режиссер монтажа & VFX-художник",
    description: "Профессиональный монтаж видео, визуальные эффекты (VFX), цветокоррекция и саунд-дизайн.",
    images: ["/editor_portrait.jpg"],
  },
};

export default function RootLayout({
  children,
  }: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Станислав Ершов",
    "jobTitle": "Режиссер монтажа, VFX-художник",
    "url": "https://ershov-v2.vercel.app",
    "sameAs": [
      "https://t.me/kosmostas_err",
      "https://t.me/kosmostas_portfolio1"
    ],
    "description": "Портфолио Станислава Ершова: профессиональный монтаж видео, визуальные эффекты (VFX), цветокоррекция и саунд-дизайн для кино, клипов и рекламы."
  };

  return (
    <html
      lang="ru"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#050508] text-[#f4f4f6] font-sans selection:bg-rose-500/30 selection:text-rose-200">
        {children}
      </body>
    </html>
  );
}
