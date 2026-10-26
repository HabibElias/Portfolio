import About from "../components/About";
import Contact from "../components/Contact";
import Experiences from "../components/Experiences";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import TechStacks from "../components/TechStacks";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Selected case studies */}
      <Projects />

      {/* Tech Stack Section */}
      <TechStacks />

      {/* Experience Section */}
      <Experiences />

      {/* Contact Section */}
      <Contact />
    </>
  );
}
