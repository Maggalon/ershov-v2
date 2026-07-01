import CustomCursor from "@/components/CustomCursor";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Showreel from "@/components/Showreel";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      {/* Custom premium interactive cursor */}
      <CustomCursor />

      {/* Floating navigation header */}
      <Header />

      {/* Main layout contents */}
      <main className="flex-1 w-full bg-[#050508]">
        {/* Hero Section */}
        <Hero />

        {/* Showreel Player Section */}
        {/* <Showreel /> */}

        {/* Selected Projects Bento Grid */}
        <Projects />

        {/* Post Production Services */}
        <Services />

        {/* Biography & Portrait Section */}
        <About />

        {/* Contact Form & Footer links */}
        <Contact />
      </main>
    </>
  );
}
