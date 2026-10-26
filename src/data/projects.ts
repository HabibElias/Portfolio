export type Project = {
  slug: string;
  number: string;
  title: string;
  category: string;
  summary: string;
  role: string;
  context: string;
  platform: string;
  tech: string[];
  href: string;
  linkLabel: string;
  banner: "driving" | "graduation" | "baseleal";
  challenge: string;
  approach: string;
  capabilities: { title: string; description: string }[];
  delivery: string;
};

export const projects: Project[] = [
  {
    slug: "driving-school-management",
    number: "01",
    title: "Driving School Management System",
    category: "Business software",
    summary:
      "Bringing student administration, instructor coordination, and licensing workflows into one driving school platform.",
    role: "Full Stack Developer Intern · Contributor",
    context: "ArkHive Software Solutions · Sep–Dec 2025",
    platform: "Web application",
    tech: ["Next.js", "Go", "Fiber"],
    href: "https://dms.arkhivetech.io/",
    linkLabel: "Visit platform",
    banner: "driving",
    challenge:
      "Driving school operations span student records, instructor availability, lesson schedules, attendance, licensing, and examinations. The project’s goal was to bring these connected responsibilities into an in-house management platform.",
    approach:
      "During my internship at ArkHive, I contributed across the Next.js frontend and Go backend built with Fiber. My work was part of the team’s broader effort to digitize core school operations and support role-based access to different workflows.",
    capabilities: [
      { title: "People & coordination", description: "Student management and instructor coordination within the same operational platform." },
      { title: "Scheduling & attendance", description: "Lesson scheduling and attendance tracking to support day-to-day school administration." },
      { title: "Licensing & examinations", description: "Workflows for licensing and final examination management, with role-based access control." },
    ],
    delivery:
      "A contribution to an in-house business application covering the driving school’s core administrative workflows. This project represents team-based full-stack development during my ArkHive internship.",
  },
  {
    slug: "graduation-book",
    number: "02",
    title: "Graduation Book — AASTU ECSF",
    category: "Community platform",
    summary:
      "A digital graduation book celebrating students’ journeys, achievements, and personal reflections at AASTU Christian Fellowship.",
    role: "Developer",
    context: "AASTU Christian Fellowship",
    platform: "Web application",
    tech: ["Next.js", "Supabase"],
    href: "https://digital-grad-book-2025.vercel.app/",
    linkLabel: "Explore graduation book",
    banner: "graduation",
    challenge:
      "A graduation book needs to honor each student while making a whole graduating class easy to explore. The brief was to create an organized, accessible digital space for students’ journeys, achievements, and personal reflections.",
    approach:
      "I built the platform with Next.js and Supabase, focusing the experience on the graduating students and their stories. The presentation brings individual reflections together in a shared graduation book for the fellowship.",
    capabilities: [
      { title: "Graduate stories", description: "A space to highlight each student’s journey and achievements." },
      { title: "Personal reflections", description: "Graduating students’ own reflections presented as part of their shared celebration." },
      { title: "Digital access", description: "A web-based graduation book that the fellowship can explore online." },
    ],
    delivery:
      "A published digital graduation book for the AASTU Christian Fellowship, bringing graduate stories and personal reflections together in one accessible destination.",
  },
  {
    slug: "baseleal",
    number: "03",
    title: "Baseleal",
    category: "Mobile application",
    summary:
      "A cross-platform home for choir lyrics, photos, and videos, with offline access for use beyond a reliable internet connection.",
    role: "Developer · Interface design",
    context: "Baseleal gospel choir",
    platform: "Cross-platform mobile app",
    tech: ["Flutter", "Dart", "Firebase"],
    href: "https://github.com/HabibElias/Baseleal",
    linkLabel: "View source on GitHub",
    banner: "baseleal",
    challenge:
      "Choir members and listeners need a simple way to find song lyrics and revisit the choir’s media. The experience also needs to remain useful without an internet connection, rather than relying entirely on online access.",
    approach:
      "I built Baseleal with Flutter, Dart, and Firebase and designed a clear interface around home, lyrics, gallery, and about screens. Offline access and customizable settings support a more flexible experience for members and listeners.",
    capabilities: [
      { title: "Lyrics library", description: "Access to the choir’s mezmure lyrics through dedicated lyrics screens." },
      { title: "Photo & video gallery", description: "A gallery that brings the choir’s visual media into the same app as its songs." },
      { title: "Offline & personal", description: "Offline access to lyrics and media, alongside customizable app settings." },
    ],
    delivery:
      "A cross-platform choir application combining lyrics, media, settings, and offline access. The interface prioritizes straightforward navigation between the app’s main sections.",
  },
];

export const additionalProjects = [
  {
    title: "Anno Macchiato Management System",
    category: "Coffee house operations",
    description: "Order and withdrawal handling for a coffee house’s day-to-day operations.",
    tech: ["Vue.js", "Nuxt.js", "Drizzle"],
    href: "https://github.com/HabibElias/amcoffee-ms",
  },
  {
    title: "Beria Book & Customer Management",
    category: "Records & inventory",
    description: "Book withdrawals, member records, and inventory tracking in a church management application.",
    tech: ["React", "Laravel", "PHP"],
    href: "https://github.com/HabibElias/Beria-cms",
  },
];
