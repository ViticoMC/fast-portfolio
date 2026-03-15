import type { Project } from "@/types/projects";

export const data: Project[] = [
  // {
  //   id: "1",
  //   title: "Sitio Web PCTVC",
  //   description:
  //     "Desarrollo de un sitio web institucional para el Parque Científico Tecnológico de Villa Clara, construido con Next.js, React y Tailwind CSS. La plataforma ofrece una interfaz moderna, rápida y responsive, enfocada en presentar información y proyectos de innovación de forma clara y accesible.",
  //   image: "/projects/main-pctvc.png",
  //   tags: ["NEXTJS", "REACT", "TAILWIND"],
  //   demoUrl: "https://www.pctvc.cu/",
  //   repositoryStatus: "public",
  //   codeUrl: "https://github.com/ViticoMC/pctvc",
  // },
  // {
  //   id: "2",
  //   title: "BlueMoon Studio",
  //   description:
  //     "Sitio web moderno para BlueMoon Studio, un estudio de perforaciones corporales. Desarrollado con React, Next.js y Tailwind CSS, presenta un diseño visual atractivo y una experiencia interactiva que destaca servicios, galería y estilo del estudio.",
  //   image: "/projects/main-bluemoon.png",
  //   tags: ["NEXTJS", "REACT", "TAILWIND"],
  //   demoUrl: "https://blue-moon-snowy.vercel.app/",
  //   repositoryStatus: "public",
  //   codeUrl: "https://github.com/ViticoMC/blue-moon",
  // },
  // {
  //   id: "3",
  //   title: "Directorio de Empresas",
  //   description:
  //     "Plataforma web para la gestión y consulta de empresas en la provincia de Santa Clara. Construida con Next.js y React para una interfaz rápida y moderna, junto con un backend en Django que garantiza una gestión segura, escalable y eficiente de los datos.",
  //   image: "/projects/main-directorio.png",
  //   tags: ["DJANGO", "NEXTJS", "REACT"],
  //   demoUrl: "https://directorio-omega.vercel.app/",
  //   repositoryStatus: "private",
  // },
  {
    id: 1,
    title: "Laboratorio de DB",
    description:
      "Aplicación de escritorio diseñada para apoyar el estudio de bases de datos. Permite ejecutar algoritmos, crear relaciones y experimentar con conceptos fundamentales de modelado y normalización, todo en una herramienta portable desarrollada con Tauri y Vite.",
    image: "/projects/laboratorio.png",
    tags: ["TAURI", "VITE"],
    demoUrl: "https://drive.google.com/file/d/133kNMVZdZBsYkoxxKIO9Otd9_v9oRKGn/view?usp=sharing",
    repositoryStatus: "public",
    codeUrl: "https://github.com/ViticoMC/laboratorio-db",
  },
  {
    id: 2,
    title: "Menu online",
    description:
      "Desarrollo de un menú digital interactivo para restaurantes con sistema de filtrado por categorías para facilitar la navegación de los usuarios.Incluye un panel de administración que permite gestionar platos, categorías e imágenes del menú de forma dinámica.",
    image: "/projects/menu-online.png",
    tags: ["NEXTJS", "PRISMA", "REACTJS"],
    demoUrl: "https://tu-menu-online.vercel.app/",
    repositoryStatus: "public",
    codeUrl: "https://github.com/ViticoMC/restaurant-plantilla",
  },
  {
    id: "3",
    title: "Come Come ",
    description:
      "Desarrollo de un juego 2D en el navegador donde el jugador controla un cuadrado que se mueve en cuatro direcciones, recolecta objetos para aumentar la puntuación y enfrenta niveles con obstáculos progresivos.",
    image: "/projects/cuadradito.png",
    tags: ["VITE", "REACTJS"],
    demoUrl: "https://cuadradito.vercel.app/",
    repositoryStatus: "public",
    codeUrl: "https://github.com/ViticoMC/cuadradito",
  },
];
