import { Github, ArrowDown, Download } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-[92vh] flex flex-col items-center justify-center px-6">
      <div className="flex flex-col items-center text-center space-y-8 max-w-2xl">
        <div className="relative w-64 h-80 md:w-72 md:h-96 overflow-hidden rounded-2xl">
          <img
            src="/profile.jpg"
            alt="Habib Elias"
            className="w-full h-full object-cover object-top grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        </div>

        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Habib Elias
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed max-w-lg mx-auto">
            Full Stack Developer building web products and backend services with
            Next.js, Go, and practical AI integrations.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <Button asChild size="lg" className="rounded-full px-6">
            <a href="#projects">
              <ArrowDown className="w-4 h-4 mr-2" />
              Explore My Work
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-full px-6"
          >
            <a
              href="https://github.com/HabibElias"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-full px-6"
          >
            <a
              href="/Habib_Elias_Cv.pdf"
              download="Habib_Elias_Cv.pdf"
            >
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </a>
          </Button>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-10 text-muted-foreground/40 hover:text-muted-foreground transition-colors animate-bounce"
      >
        <ArrowDown className="w-5 h-5" />
      </a>
    </section>
  );
};

export default Hero;
