import { Mail, Github } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="container mx-auto py-24 md:py-32 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center text-center space-y-8 w-full break-words">
        <div className="relative">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/baseleal-9fb49.appspot.com/o/profile%2Fphoto.jpg?alt=media&token=004b8e4d-dcb9-4192-8104-9d983df5810f"
            alt="Profile"
            className="w-56 h-80 object-cover rounded-2xl border-4 border-amber-200 shadow-xl"
          />
          <div className="absolute -bottom-2 -right-2 bg-amber-600 w-8 h-8 rounded-full border-4 border-amber-200"></div>
        </div>
        <div className="space-y-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Habib Elias
          </h1>
          <p className="text-xl md:text-2xl mx-auto text-muted-foreground max-w-2xl">
            Frontend Developer & Software Engineering
          </p>
          <p className="text-lg/6 text-muted-foreground/65 max-w-3xl">
            Software Engineering and frontend developer focused on
            building fast, modern web apps. Always learning and exploring new
            technologies.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 justify-center w-full">
          <Button
            asChild
            size="lg"
            className="gap-2 bg-amber-700 hover:bg-amber-800 text-amber-50"
          >
            <a href="mailto:habibelias234@gmail.com">
              <Mail className="w-4 h-4" />
              Get In Touch
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="gap-2 border-amber-600 text-amber-700 hover:bg-amber-100"
          >
            <a
              href="https://github.com/HabibElias"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-4 h-4" />
              View GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
