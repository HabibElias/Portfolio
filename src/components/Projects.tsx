import { ExternalLink, Github } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
type Project = {
  title: string;
  description: string;
  tech: string[];
  image: string;
  github: string;
  live: string | null;
};

const projects: Project[] = [
  {
    title: "Aastu Choir Gc Gallery",
    description: "A gallery for GC members of the AASTU Choir – 2025",
    tech: ["React.js","TypeScript", "Firebase", "Tailwind", "ShadCn"],
    image: "https://firebasestorage.googleapis.com/v0/b/baseleal-9fb49.appspot.com/o/profile%2Faastu_choir.png?alt=media&token=2e1b01fd-6fc5-436b-8c44-31fbe0734465",
    github: "https://github.com/HabibElias/Aastu-Choir-Gc-Gallery",
    live: "https://aastugc2025.vercel.app/",
  },
  {
    title: "Baseleal",
    description: "Its a lyrics application for Baseleal choir gospel songs. ",
    tech: ["Flutter","Dart", "Firebase"],
    image: "https://firebasestorage.googleapis.com/v0/b/baseleal-9fb49.appspot.com/o/profile%2Fbaseleal.png?alt=media&token=bf8d2932-6604-4abd-b431-71ddbb69461b",
    github: "https://github.com/HabibElias/Baseleal",
    live: null,
  },
  {
    title: "Expense Tracker",
    description: "A simple Expense Tracker",
    tech: ["React.js","TypeScript", "Firebase"],
    image: "https://firebasestorage.googleapis.com/v0/b/baseleal-9fb49.appspot.com/o/profile%2Fexpense.png?alt=media&token=2056fa26-097a-4a95-9879-cca475120d62",
    github: "https://github.com/HabibElias/ExpenseTracker",
    live: "https://expense-lac-psi.vercel.app/",
  },
  {
    title: "FixList",
    description:
      "FixList is an application designed to help developers log and manage errors within their projects. It provides a streamlined way to track issues, categorize them, and ensure they are resolved efficiently.",
    tech: ["React.js","TypeScript", "Redux"],
    image: "https://firebasestorage.googleapis.com/v0/b/baseleal-9fb49.appspot.com/o/profile%2Ffixlist.png?alt=media&token=1926d661-d895-4a2d-b485-82dda8c45d73",
    github: "https://github.com/HabibElias/FixList",
    live: "https://fixlist.vercel.app/",
  },
  {
    title: "Game Hub",
    description: "A platform for in-depth game reviews and discussions.",
    tech: ["React.js","TypeScript", "Axios", "Tanstack Query", "Chakra Ui"],
    image: "https://firebasestorage.googleapis.com/v0/b/baseleal-9fb49.appspot.com/o/profile%2Fgame-hub.png?alt=media&token=89545d1a-bc6b-4dd0-ba8e-7b822f27bd8a",
    github: "https://github.com/HabibElias/game-hub",
    live: "https://game-hub-ten-umber.vercel.app",
  },
  {
    title: "GDG",
    description:
      "A repo of my time at Google Developers Group at Addis Ababa and Science Technology University.",
    tech: ["React.js"],
    image: "https://firebasestorage.googleapis.com/v0/b/baseleal-9fb49.appspot.com/o/profile%2Fgdg.jpg?alt=media&token=1c7c833d-3599-4de8-975a-9b2a34c867ae",
    github: "https://github.com/HabibElias/GDG",
    live: null,
  },
  {
    title: "Quote Generator",
    description: "A web application built with React.js that fetches and displays random inspirational quotes. Users can generate new quotes with a button click and easily copy or share their favorite quotes.",
    tech: ["TypeScript", "React.js", "Axios"],
    image: "https://firebasestorage.googleapis.com/v0/b/baseleal-9fb49.appspot.com/o/profile%2Fquote-gen.png?alt=media&token=f974e83d-88c9-4e02-9941-35826757238f",
    github: "https://github.com/HabibElias/quote-generator",
    live: "https://quote-generator-phi-neon.vercel.app",
  },
  {
    title: "Sharon",
    description: "A web application for a church that supports children, helping manage sponsorships, donations, and child profiles.",
    tech: ["React.js", "TypeScript", "Firebase", "Tailwind"],
    image: "https://firebasestorage.googleapis.com/v0/b/baseleal-9fb49.appspot.com/o/profile%2Fsharon.png?alt=media&token=f27690a8-11eb-415f-9617-bb3bea883629",
    github: "https://github.com/HabibElias/sharon",
    live: null,
  },
  {
    title: "Student Internship Portal",
    description:
      "The Job and Students Matching Portal is a web application designed to bridge the gap between employers seeking talent and students searching for job opportunities. and also my first full stack web application with pure php backend.",
    tech: ["Typescript", "React.js", "PHP", "Axios", "Tailwind", "ShadCn"],
    image: "https://firebasestorage.googleapis.com/v0/b/baseleal-9fb49.appspot.com/o/profile%2Fsjp.png?alt=media&token=f13144f0-2113-4e48-8e8f-d5f02dd5cc64",
    github: "https://github.com/HabibElias/Student-Internship-Portal",
    live: null,
  },
  {
    title: "TodoPHP",
    description: "A react todo application with a php backend. I used this project to get familiar with php and some backend concepts.",
    tech: ["Typescript", "React.js", "PHP", "Axios"],
    image: "https://firebasestorage.googleapis.com/v0/b/baseleal-9fb49.appspot.com/o/profile%2Ftodo-php.png?alt=media&token=e78e0a00-e028-440e-b0e6-3d217f1a595a",
    github: "https://github.com/HabibElias/TodoPHP",
    live: null,
  },
  {
    title: "Rebel Rover",
    description: "A travel website that helps users discover destinations, plan trips, and share travel experiences.",
    tech: ["React.js", "TypeScript", "Tailwind", "Firebase"],
    image: "https://firebasestorage.googleapis.com/v0/b/baseleal-9fb49.appspot.com/o/profile%2Frebel-rover.png?alt=media&token=65bdcf1f-75e2-4d74-85af-c9883003a704",
    github: "https://github.com/Gdg-Capstone-Team-8/Rebel_Rover_Travel_Website",
    live: "https://rebel-rover-a727b.web.app/",
  },
];

const Projects = () => {



  return (
    <section
      id="projects"
      className="container mx-auto py-32 flex flex-col items-center justify-center"
    >
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-3xl font-bold text-center mb-12 break-words">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center w-full">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-shadow border-amber-200 bg-amber-50/30 hover:bg-amber-50/50 dark:border-neutral-800 dark:bg-neutral-900/40 w-full break-words"
            >
              <div className="aspect-video -mt-6 max-h-[200px] bg-muted">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {project.title}
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1 w-full break-words">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12 w-full">
          <Button
            variant="outline"
            size="lg"
            className="gap-2 border-amber-600 text-amber-700 hover:bg-amber-100"
            asChild
          >
            <a
              href="https://github.com/HabibElias"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-4 h-4" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
