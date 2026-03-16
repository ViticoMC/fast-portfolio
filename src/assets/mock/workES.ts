import type { WorkExperience } from "@/types";

export const WORK_EXPERIENCES_ES: WorkExperience[] = [
  {
    id: 1,
    company: "Nova Studio Digital",
    role: "Frontend Developer",
    startDate: "Ene 2024",
    endDate: "Actualidad",
    location: "Remoto, Colombia",
    workMode: "team",
    summary:
      "Participacion en el desarrollo de productos web para clientes del sector servicios, mejorando interfaces existentes y construyendo nuevas experiencias enfocadas en conversion y rendimiento.",
    responsibilities: [
      "Desarrollar interfaces reutilizables en React y TypeScript para modulos comerciales y dashboards internos.",
      "Coordinar implementaciones con diseno y backend para aterrizar flujos funcionales sin perder consistencia visual.",
      "Optimizar tiempos de carga, estados de formularios y componentes criticos para mejorar la experiencia del usuario.",
    ],
    achievements: [
      "Reduje el tiempo de carga inicial de una landing principal mediante division de componentes y mejora de assets.",
      "Estructure una pequena libreria de componentes compartidos para acelerar nuevas entregas del equipo.",
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
    endDate: "Dic 2023",
    location: "Remoto, LATAM",
    workMode: "solo",
    summary:
      "Desarrollo de soluciones a medida para pequenos negocios y proyectos independientes, desde sitios de presentacion hasta paneles administrativos ligeros.",
    responsibilities: [
      "Levantar requerimientos con clientes y traducirlos a entregables tecnicos realistas.",
      "Construir interfaces completas, configurar despliegues y documentar handoff para futuras iteraciones.",
      "Implementar mejoras SEO, accesibilidad base y adaptacion responsive para desktop y mobile.",
    ],
    achievements: [
      "Entregue multiples sitios con tiempos cortos de implementacion manteniendo una base de codigo mantenible.",
      "Defini procesos de trabajo mas claros con clientes para reducir retrabajo y cambios tardios.",
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
    startDate: "Ago 2022",
    endDate: "Abr 2023",
    location: "Hibrido, Santa Marta",
    workMode: "hybrid",
    summary:
      "Apoyo en la construccion y mantenimiento de interfaces para proyectos institucionales, trabajando junto a perfiles de desarrollo, diseno y contenido.",
    responsibilities: [
      "Maquetar vistas y componentes basados en disenos aprobados por el equipo.",
      "Corregir bugs de interfaz reportados en QA y ajustar comportamiento responsive.",
      "Participar en revisiones tecnicas para descomponer tareas y estimar entregas cortas.",
    ],
    achievements: [
      "Mejore la consistencia visual entre modulos reutilizando patrones de layout y componentes base.",
      "Aporte en la migracion parcial de vistas estaticas a componentes reutilizables.",
    ],
    technologies: [
      { name: "react", title: "React" },
      { name: "vitejs", title: "Vite" },
      { name: "tailwindcss", title: "Tailwind CSS" },
    ],
  },
];