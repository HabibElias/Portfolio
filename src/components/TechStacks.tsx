const stacks = [
  {
    title: "Frontend",
    items: [
      "React.js",
      "Vue.js",
      "Next.js",
      "Nuxt.js",
      "HTML",
      "CSS",
      "UI Components",
      "TypeScript",
    ],
  },
  {
    title: "Backend",
    items: [
      "Laravel (PHP)",
      "Supabase",
      "Firebase",
      "Nuxt.js APIs (Drizzle)",
      "Node.js",
      "Golang",
    ],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MongoDB", "MySQL"],
  },
  {
    title: "Version Control",
    items: ["Git", "GitHub"],
  },
];

const TechStacks = () => {
  return (
    <section id="tech" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6 md:px-8 max-w-4xl">
        <div className="flex items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-sm font-medium tracking-widest uppercase text-muted-foreground">
              Tech Stack
            </h2>
            <p className="text-2xl md:text-3xl font-semibold tracking-tight mt-3">
              The tools I ship with
            </p>
          </div>
          <p className="text-sm text-muted-foreground max-w-xs">
            Organized by focus area, so you can browse projects by the stack
            behind them.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {stacks.map((stack) => (
            <div
              key={stack.title}
              className="rounded-2xl border border-border/50 bg-background/70 p-6"
            >
              <h3 className="text-sm font-medium tracking-widest uppercase text-muted-foreground">
                {stack.title}
              </h3>
              <div className="flex flex-wrap gap-2 mt-4">
                {stack.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 text-xs rounded-full border border-border text-muted-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStacks;
