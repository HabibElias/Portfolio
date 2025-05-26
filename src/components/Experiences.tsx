import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Calendar } from "lucide-react";

const experiences = [
  {
    title: "Student",
    company: "ALX",
    period: "4 months",
    description:
      "Completed the ALX Professional Foundation program, focusing on essential professional and technical skills. Currently studying backend development as part of the ALX curriculum.",
  },
  {
    title: "Learning React.js",
    company: "Google Developers Group & Mentors",
    period: "2025",
    description:
      "Learned React.js through Google Developers Group sessions and guidance from experienced mentors. Built practical projects to strengthen understanding of component-based architecture and modern frontend development.",
  },
  {
    title: "Software Engineering",
    company: "Addis Ababa Science and Technology University",
    period: "2022 - Present",
    description:
      "Pursuing Bachelor's degree in Software Engineering. Relevant coursework includes Data Structures, Algorithms, Database Systems, and System Design.",
  },
];

const Experiences = () => {
  return (
    <section
      id="experience"
      className="container mx-auto py-16 bg-amber-100/50 dark:bg-neutral-900/60 flex flex-col items-center justify-center"
    >
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-3xl font-bold text-center mb-12 break-words">
          Experience
        </h2>
        <div className="space-y-8 w-full">
          {experiences.map((job, index) => (
            <Card
              className="border-neutral-200 bg-neutral-50/70 dark:border-amber-700/30 dark:bg-neutral-900/70 w-full break-words"
              key={index}
            >
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{job.title}</CardTitle>
                    <CardDescription className="  ">
                      {job.company}
                    </CardDescription>
                  </div>
                  <Badge
                    variant="outline"
                    className="gap-1 border-amber-400 text-amber-700 dark:border-amber-600 dark:text-amber-300 bg-transparent"
                  >
                    <Calendar className="w-3 h-3" />
                    {job.period}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{job.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
