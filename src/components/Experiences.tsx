const timeline = [
  {
    year: "2026",
    items: [
      {
        title: "Full-Stack Developer Intern",
        place: "ArkHive",
        period: "Jan 2026 — Present",
        description:
          "Building and shipping product features across frontend and backend using Next.js and Golang, with AI integrations as a core part of the workflow.",
        active: true,
      },
    ],
  },
  {
    year: "2025",
    items: [
      {
        title: "Intern Developer",
        place: "Sabih Software Solutions",
        period: "Summer 2025",
        description:
          "Worked on a full-stack project over the summer, contributing to frontend and backend systems before moving on.",
        active: false,
      },
      {
        title: "ALX Professional Foundations",
        place: "ALX",
        period: "2nd Semester 2025",
        description:
          "Completed the ALX Professional Foundation program alongside GDG, building professional and backend development fundamentals.",
        active: false,
      },
      {
        title: "React.js — Google Developers Group",
        place: "GDG On Campus · AASTU",
        period: "1st & 2nd Semester 2025",
        description:
          "Learned React.js through hands-on GDG sessions and mentorship. Built practical projects throughout the year.",
        active: false,
      },
    ],
  },
  {
    year: "2022",
    items: [
      {
        title: "Software Engineering",
        place: "Addis Ababa Science and Technology University",
        period: "2022 — Present",
        description:
          "Pursuing a Bachelor's degree in Software Engineering. All of the above happened while studying here — and it's been a fun ride.",
        active: false,
      },
    ],
  },
];

const Experiences = () => {
  return (
    <section id="experience" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6 md:px-8 max-w-4xl">
        <h2 className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-12">
          Experience
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
      </div>
    </section>
  );
};

export default Experiences;
