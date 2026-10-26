const timeline = [
  {
    year: "2026",
    items: [
      {
        title: "Full Stack Developer",
        place: "ArkHive Software Solutions",
        period: "2026 — Present",
        description:
          "Developing web products and backend services with Next.js and Go, with a focus on practical AI integrations.",
        active: true,
      },
    ],
  },
  {
    year: "2025",
    items: [
      {
        title: "Full Stack Developer Intern",
        place: "ArkHive Software Solutions",
        period: "September — December 2025",
        description:
          "Contributed to an in-house Driving School Management System using Next.js and Go (Fiber), covering student and instructor management, scheduling, attendance, licensing workflows, role-based access, and final examinations.",
        active: false,
      },
    ],
  },
];

const education = [
  {
    title: "BSc in Software Engineering",
    place: "Addis Ababa Science and Technology University",
    description:
      "Coursework includes Data Structures and Algorithms, Internet Programming, System Design, Computer Networking, and Database Systems.",
  },
  {
    title: "Professional Foundations",
    place: "ALX · Online",
    description:
      "Training in communication, teamwork, problem-solving, and workplace ethics.",
  },
  {
    title: "Frontend Development · React.js Track",
    place: "Google Developers Group",
    description:
      "Hands-on React projects and collaborative learning, culminating in a hackathon to build real-world solutions under time constraints.",
  },
];

const Experiences = () => {
  return (
    <section id="experience" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6 md:px-8 max-w-4xl">
        <h2 className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-12">
          Professional Experience
        </h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[7px] md:left-[9px] top-2 bottom-2 w-px bg-border" />

          <div className="space-y-12">
            {timeline.map((group) => (
              <div key={group.year}>
                {/* Year marker */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-foreground border-4 border-background z-10 shrink-0" />
                  <span className="text-xl font-semibold tracking-tight">
                    {group.year}
                  </span>
                </div>

                {/* Items within this year */}
                <div className="space-y-6 ml-2 md:ml-2.5">
                  {group.items.map((item, j) => (
                    <div
                      key={j}
                      className="relative pl-8 group"
                    >
                      {/* Dot */}
                      <div
                        className={`absolute left-0 top-1.5 w-2.5 h-2.5 md:w-3 md:h-3 rounded-full border-2 z-10 ${
                          item.active
                            ? "bg-foreground border-foreground"
                            : "bg-background border-muted-foreground/40"
                        }`}
                      />

                      <div className="space-y-1">
                        <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-3">
                          <h3 className="font-medium text-sm">{item.title}</h3>
                          {item.active && (
                            <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full w-fit">
                              Current
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {item.place}
                          <span className="mx-2 text-border">·</span>
                          {item.period}
                        </p>
                        <p className="text-sm text-muted-foreground/70 leading-relaxed pt-0.5">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-8">
            Education & Training
          </h2>
          <div className="space-y-8">
            {education.map((item) => (
              <div key={item.title} className="border-l border-border pl-6 space-y-2">
                <h3 className="text-sm font-medium">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.place}</p>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
