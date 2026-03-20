import type { WorkExperience } from "@/types";

export const WORK_EXPERIENCES_ES: WorkExperience[] = [
  {
    id: 1,
    company: "Freelance Desarrollo Web",
    role: "FullStack Developer",
    startDate: "Jun 2025",
    endDate: "Jul 2025",
    location: "Remoto, Cuba",
    workMode: "solo",
    summary:
      "Creación de un sitio web para un estudio de perforaciones corporales, con gestión dinámica de servicios, galería y tienda de productos, usando Next.js, React, TypeScript, Supabase y Cloudinary.",
    responsibilities: [
      "Diseño y desarrollo de  una interfaz moderna y responsiva , optimizada para dispositivos móvile.",
      "Implementacion de  secciones dinámicas para servicios, galería de imágenes y tienda de productos, integrando Supabase como base de datos y Cloudinary para almacenamiento de imágenes.",
      "Creacion de  un sistema de administración seguro que permite al cliente gestionar servicios, productos e imágenes sin necesidad de conocimientos técnicos.",
      "Entregar un producto completo desde diseño UI/UX hasta despliegue en Vercel, asegurando su funcionalidad y escalabilidad",
    ],
    achievements: [
      "Mejoré la presencia online del cliente con un sitio web moderno y funcional, aumentando su alcance y facilitando la gestión de su negocio.",
      "Logré mejorar la experiencia del usuario al implementar una interfaz intuitiva y responsive.",
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
    startDate: "Diciembre 2025",
    endDate: "Febrero 2026",
    location: "Remoto, Cuba",
    workMode: "solo",
    summary:
      "Desarrollo de un sitio web para el Parque Científico y Tecnológico de Villa Clara, con información institucional, noticias, eventos y contacto, utilizando Next.js, React, TypeScript y Tailwind CSS.",
    responsibilities: [
      "Analicé y estructuré los requerimientos del sitio institucional, definiendo la arquitectura de información y las funcionalidades clave (noticias, eventos y contacto).",
      "Desarrollé interfaces modernas y reutilizables utilizando Next.js, React, TypeScript y Tailwind CSS, asegurando consistencia visual y escalabilidad del código.",
      "Gestioné la integración de contenido dinámico y optimicé el rendimiento del sitio mediante buenas prácticas de renderizado y carga de recursos.",
      "Preparé el proyecto para despliegue, asegurando una configuración adecuada del entorno y documentación técnica para mantenimiento futuro.",
    ],
    achievements: [
      "Construí un sitio web institucional completo, mejorando la presencia digital y la comunicación del Parque Científico y Tecnológico.",
      "Optimicé tiempos de carga y rendimiento general del sitio mediante el uso eficiente de Next.js y buenas prácticas frontend.",
      "Entregué un producto completo y funcional en un plazo ajustado, demostrando habilidades de gestión de proyectos y desarrollo fullstack.",
      "Se logró indexar el sitio en motores de búsqueda, mejorando la visibilidad online del parque y facilitando el acceso a información relevante para visitantes e interesados.",
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
    startDate: "Mayo 2025",
    endDate: "Actualidad",
    location: "Hibrido, Santa Clara",
    workMode: "team",
    summary:
      "Lideré el desarrollo del frontend de un directorio de actores económicos para la provincia de Santa Clara, enfocado en centralizar y facilitar el acceso a la información empresarial en una única plataforma digital. Diseñé y estructuré una interfaz moderna, escalable y orientada a la experiencia de usuario utilizando Next.js, React, TypeScript y Tailwind CSS.",

    responsibilities: [
      "Definir la arquitectura del frontend y los estándares de desarrollo para asegurar consistencia, escalabilidad y mantenibilidad del proyecto.",
      "Coordinar y distribuí tareas dentro del equipo frontend, alineando entregables con los objetivos funcionales del sistema.",
      "Desarrollar componentes reutilizables y vistas clave del sistema, optimizando la estructura del código y la eficiencia del desarrollo.",
      "Supervisar la correcta implementación del diseño responsive y la experiencia de usuario en distintos dispositivos.",
      "Participar en revisiones técnicas, toma de decisiones y resolución de problemas críticos durante el desarrollo.",
    ],

    achievements: [
      "Consolidé una base de código modular y reutilizable que aceleró el desarrollo de nuevas funcionalidades.",
      "Mejoré la coherencia visual y la experiencia de usuario mediante la estandarización de componentes y layouts.",
      "Optimicé la organización del trabajo frontend, reduciendo retrabajos y mejorando los tiempos de entrega.",
      "Logré una implementación sólida y escalable que permite futuras ampliaciones del directorio sin comprometer el rendimiento.",
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
