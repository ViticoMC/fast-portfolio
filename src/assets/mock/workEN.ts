import type { WorkExperience } from "@/types";

export const WORK_EXPERIENCES_EN: WorkExperience[] = [
  {
    id: 1,
    company: "Freelance Web Development",
    role: "FullStack Developer",
    startDate: "Jun 2025",
    endDate: "Jul 2025",
    location: "Remote, Cuba",
    workMode: "solo",
    summary:
      "Creation of a website for a corporate body piercing studio, with dynamic service management, gallery and product store, using Next.js, React, TypeScript, Supabase and Cloudinary.",
    responsibilities: [
      "Designed and developed a modern and responsive interface, optimized for mobile devices.",
      "Implementation of dynamic sections for services, image gallery and product store, integrating Supabase as a database and Cloudinary for image storage.",
      "Creation of a secure admin system that allows the client to manage services, products and images without technical knowledge.",
      "Delivered a complete product from UI/UX design to deployment on Vercel, ensuring functionality and scalability.",
    ],
    achievements: [
      "Improved the client's online presence with a modern and functional website, increasing reach and making business management easier.",
      "Achieved improved user experience by implementing an intuitive and responsive interface.",
    ],
    technologies: [
      { name: "react", title: "React" },
      { name: "typescript", title: "TypeScript" },
      { name: "nextjs2", title: "Next.js" },
      { name: "tailwindcss", title: "Tailwind CSS" },
      { name: "supabase", title: "Supabase" },
      { name: "cloudinary", title: "Cloudinary" },
    ],
    demoUrl: "https://tu-menu-online.vercel.app/",
    workImages: [
      "/works/blue-moon1.webp",
      "/works/blue-moon2.webp",
      "/works/blue-moon3.webp",
      "/works/blue-moon4.webp",
    ],
  },
  {
    id: 2,
    company: "PCTVC",
    role: "FullStack Developer",
    startDate: "December 2025",
    endDate: "February 2026",
    location: "Remote, Cuba",
    workMode: "solo",
    summary:
      "Development of a website for the Scientific and Technological Park of Villa Clara, with institutional information, news, events and contact, using Next.js, React, TypeScript and Tailwind CSS.",
    responsibilities: [
      "Analyzed and structured the institutional website requirements, defining information architecture and key functionalities (news, events and contact).",
      "Developed modern and reusable interfaces using Next.js, React, TypeScript and Tailwind CSS, ensuring visual consistency and code scalability.",
      "Managed dynamic content integration and optimized site performance through best rendering and resource loading practices.",
      "Prepared the project for deployment, ensuring proper environment configuration and technical documentation for future maintenance.",
    ],
    achievements: [
      "Built a complete institutional website, improving the digital presence and communication of the Scientific and Technological Park.",
      "Optimized loading times and overall site performance through efficient use of Next.js and frontend best practices.",
      "Delivered a complete and functional product on schedule, demonstrating project management expertise and fullstack development skills.",
      "Achieved site indexing in search engines, improving the park's online visibility and facilitating access to relevant information for visitors and interested parties.",
    ],
    technologies: [
      { name: "react", title: "React" },
      { name: "nextjs2", title: "Next.js" },
      { name: "typescript", title: "TypeScript" },
      { name: "tailwindcss", title: "Tailwind CSS" },
    ],
    demoUrl: "https://www.pctvc.cu/",

    workImages: [
      "/works/pctvc-1.webp",
      "/works/pctvc-2.webp",
      "/works/pctvc-3.webp",
      "/works/pctvc-4.webp",
    ],
  },
  {
    id: 3,
    company: "PCTVC",
    role: "Frontend Developer",
    startDate: "May 2025",
    endDate: "Present",
    location: "Hybrid, Santa Clara",
    workMode: "team",
    summary:
      "Led the frontend development of a business directory for the Santa Clara province, focused on centralizing and facilitating access to business information on a single digital platform. Designed and structured a modern, scalable interface oriented towards user experience using Next.js, React, TypeScript and Tailwind CSS.",

    responsibilities: [
      "Define frontend architecture and development standards to ensure consistency, scalability and project maintainability.",
      "Coordinate and distributed tasks within the frontend team, aligning deliverables with system functional objectives.",
      "Develop reusable components and key system views, optimizing code structure and development efficiency.",
      "Oversee proper implementation of responsive design and user experience across different devices.",
      "Participate in technical reviews, decision making and critical problem solving during development.",
    ],

    achievements: [
      "Consolidated a modular and reusable code base that accelerated the development of new features.",
      "Improved visual coherence and user experience through standardization of components and layouts.",
      "Optimized frontend work organization, reducing rework and improving delivery times.",
      "Achieved a solid and scalable implementation that allows future directory expansions without compromising performance.",
    ],
    technologies: [
      { name: "react", title: "React" },
      { name: "nextjs2", title: "Next.js" },
      { name: "typescript", title: "TypeScript" },
      { name: "tailwindcss", title: "Tailwind CSS" },
    ],
    workImages: [
      "/works/directorio-1.webp",
      "/works/directorio-2.webp",
      "/works/directorio-3.webp",
    ],
  },
];
