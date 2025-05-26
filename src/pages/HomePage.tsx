import About from "../components/About";
import Contact from "../components/Contact";
import Experiences from "../components/Experiences";
import Hero from "../components/Hero";
import Projects from "../components/Projects";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Experience Section */}
      <Experiences />

      {/* Projects Section */}
      <Projects />

      {/* Contact Section */}
      <Contact />
    </>
  );
}
