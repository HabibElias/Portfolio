export type ProjectScreenshot = {
  kind?: "board";
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

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
  banner: "driving" | "graduation" | "baseleal" | "berea";
  featured?: boolean;
  downloads?: { href: string; label: string }[];
  note?: string;
  contributionLabel?: string;
  screenshots?: ProjectScreenshot[];
  challenge: string;
  approach: string;
  capabilities: { title: string; description: string }[];
  delivery: string;
};

export const projects: Project[] = [
  {
    slug: "berea",
    number: "01",
    title: "Berea Community Library",
    category: "Library platform",
    summary:
      "A community library connecting open book discovery, member borrowing, and the administrative work that keeps the collection moving.",
    role: "Full-stack development",
    context: "Berea community library",
    platform: "Responsive web application",
    tech: ["React", "TypeScript", "Laravel", "Turso"],
    href: "https://beriabooks.vercel.app",
    linkLabel: "Explore the library",
    banner: "berea",
    featured: true,
    contributionLabel: "Implementation",
    downloads: [
      { href: "/downloads/Berea-Case-Study.pdf", label: "Download case-study PDF" },
      { href: "/downloads/Berea-Portfolio-Pack.zip", label: "Download full pack · 7.4 MB" },
    ],
    note: "All member records shown are fictional. The presentation uses captures of the working application with an isolated API and database; no production member records were used or modified.",
    screenshots: [
      {
        kind: "board",
        src: "/images/projects/berea/01-cover.png",
        alt: "Berea community library presentation showing the public book catalogue on desktop and member loans on mobile",
        caption: "A full-stack library experience: public discovery, member borrowing, and library administration.",
        width: 3200,
        height: 2000,
      },
      {
        kind: "board",
        src: "/images/projects/berea/02-reader-journey.png",
        alt: "Reader journey from discovering books and creating an account to requesting a loan and following its status",
        caption: "The reader journey — browse freely, join the library, request a book, and follow loans and decisions in one place.",
        width: 3200,
        height: 2000,
      },
      {
        kind: "board",
        src: "/images/projects/berea/03-library-administration.png",
        alt: "Berea administration screens showing library management, a loan request queue, and approval workflow",
        caption: "Library administration — review requests, approve checkouts with due dates, and record returns to make copies available again.",
        width: 3200,
        height: 2000,
      },
      {
        kind: "board",
        src: "/images/projects/berea/04-brand-and-themes.png",
        alt: "Berea brand treatment and responsive catalogue screens in light and dark themes",
        caption: "Brand and themes — the supplied Berea identity carried across desktop, mobile, light, and dark interfaces.",
        width: 3200,
        height: 2000,
      },
    ],
    challenge:
      "The existing library interface centered on managing books and members. Visitors also needed a way to explore the collection, while readers needed accounts and a clear way to ask for a loan. Administrators still needed control over availability, approvals, checkouts, and returns.",
    approach:
      "The React and TypeScript frontend connects public browsing, member accounts, and a protected admin workspace to a Laravel API backed by Turso. Search, categories, availability, and book details stay open to visitors. Registration and sign-in preserve the book a reader wanted to borrow, while backend authorization and availability rules support the same permissions shown in the interface.",
    capabilities: [
      { title: "Discover before signing in", description: "An open catalogue with search, category and availability filters, and book details lets visitors find a book before creating an account." },
      { title: "Borrow with a clear next step", description: "Members can request or cancel a loan, then follow decisions, active loans, and due dates in their own account. A pending request does not reserve a copy." },
      { title: "Connect requests to circulation", description: "Administrators review requests in a dedicated queue. Approval creates the checkout and due date; a recorded return restores availability." },
      { title: "Carry the identity across devices", description: "Responsive screens and light and dark themes apply the supplied Berea brand to public, member, and admin interfaces." },
    ],
    delivery:
      "A connected library application with a public catalogue, member registration and sign-in, loan requests and cancellation, personal loan history, and role-based administration for reviews, checkouts, and returns. The frontend is hosted on Vercel, with a separate Laravel API on Render connected to Turso.",
  },
  {
    slug: "driving-school-management",
    number: "02",
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
    featured: true,
    screenshots: [
      {
        src: "/images/projects/driving-school-home.png",
        alt: "ArkHive driving school platform landing page with an operations dashboard preview",
        caption: "The driving school platform’s landing page and dashboard preview.",
        width: 2545,
        height: 1362,
      },
    ],
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
    number: "03",
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
    screenshots: [
      {
        src: "/images/projects/graduation-book-home.png",
        alt: "AASTU ECSF Class of 2025 graduation book landing page with A Legacy of Faith heading",
        caption: "The Class of 2025 graduation book’s welcome page.",
        width: 2555,
        height: 1302,
      },
      {
        src: "/images/projects/graduation-book-students.png",
        alt: "Graduation book student directory showing graduate portraits, fields of study, and personal reflections",
        caption: "Inside the book: graduate portraits, fields of study, and personal reflections, with search and field filters.",
        width: 2557,
        height: 1300,
      },
    ],
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
    number: "04",
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
];
