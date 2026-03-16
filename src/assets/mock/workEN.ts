import type { WorkExperience } from "@/types";

export const WORK_EXPERIENCES_EN: WorkExperience[] = [
  {
    id: 1,
    company: "Nova Studio Digital",
    role: "Frontend Developer",
    startDate: "Jan 2024",
    endDate: "Present",
    location: "Remote, Colombia",
    workMode: "team",
    summary:
      "Contributed to client-facing web products in the service sector, improving existing interfaces and building new user experiences focused on conversion and performance.",
    responsibilities: [
      "Built reusable interfaces in React and TypeScript for commercial modules and internal dashboards.",
      "Coordinated implementations with design and backend to deliver polished flows with visual consistency.",
      "Optimized loading times, form states, and critical UI components to improve user experience.",
    ],
    achievements: [
      "Reduced initial loading time on a key landing page by splitting components and optimizing assets.",
      "Structured a small shared component library to speed up new deliveries across the team.",
    ],
    technologies: [
      { name: "react", title: "React" },
      { name: "typescript", title: "TypeScript" },
      { name: "nextjs2", title: "Next.js" },
      { name: "tailwindcss", title: "Tailwind CSS" },
    ],
  },
  {
    id: 2,
    company: "Freelance Product Lab",
    role: "Frontend Engineer",
    startDate: "May 2023",
    endDate: "Dec 2023",
    location: "Remote, LATAM",
    workMode: "solo",
    summary:
      "Built custom solutions for small businesses and independent projects, from presentation websites to lightweight admin panels.",
    responsibilities: [
      "Gathered client requirements and translated them into realistic technical deliverables.",
      "Built complete interfaces, configured deployments, and documented handoff for future iterations.",
      "Implemented SEO improvements, baseline accessibility, and responsive behavior for desktop and mobile.",
    ],
    achievements: [
      "Delivered multiple sites on short timelines while keeping the codebase maintainable.",
      "Defined clearer collaboration processes with clients to reduce rework and late-stage changes.",
    ],
    technologies: [
      { name: "react", title: "React" },
      { name: "vitejs", title: "Vite" },
      { name: "typescript", title: "TypeScript" },
      { name: "astro", title: "Astro" },
    ],
  },
  {
    id: 3,
    company: "Pixel Forge Team",
    role: "Junior Frontend Developer",
    startDate: "Aug 2022",
    endDate: "Apr 2023",
    location: "Hybrid, Santa Marta",
    workMode: "hybrid",
    summary:
      "Supported the delivery and maintenance of interfaces for institutional projects, collaborating with development, design, and content roles.",
    responsibilities: [
      "Implemented views and components based on designs approved by the team.",
      "Fixed UI bugs reported in QA and refined responsive behavior.",
      "Participated in technical reviews to break down work and estimate short delivery cycles.",
    ],
    achievements: [
      "Improved visual consistency across modules by reusing layout patterns and base components.",
      "Contributed to the partial migration from static pages to reusable component-based views.",
    ],
    technologies: [
      { name: "react", title: "React" },
      { name: "vitejs", title: "Vite" },
      { name: "tailwindcss", title: "Tailwind CSS" },
    ],
  },
];