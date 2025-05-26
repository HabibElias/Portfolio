import { MapPin } from "lucide-react";
import { Badge } from "./ui/badge";

const About = () => {
  return (
    <section
      id="about"
      className="container mx-auto py-32 flex flex-col items-center justify-center"
    >
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-3xl font-bold text-center mb-12 break-words">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center justify-center w-full break-words">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground">
              I'm a passionate frontend developer with a keen eye for design and
              user experience. I specialize in creating responsive, interactive
              web applications and love turning complex problems into intuitive,
              beautiful solutions.
            </p>
            <p className="text-lg text-muted-foreground">
              Outside of coding, I enjoy listening to music and playing the
              keyboard. These hobbies help me relax and inspire creativity in my
              work.
            </p>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>Addis Ababa</span>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4 break-words">
                Skills & Technologies
              </h3>
              <div className="flex flex-wrap gap-2 w-full break-words">
                {[
                  "JavaScript",
                  "React",
                  "HTML/CSS",
                  "Git",
                  "Java",
                  "PHP",
                  "MongoDB",
                  "MySQL",
                  "C++",
                  "Dart",
                  "Android Development",
                  "Flutter",
                ].map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-amber-200 text-amber-800 hover:bg-amber-300"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
