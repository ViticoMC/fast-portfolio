import type { Project } from "@/types";

export const PROJECTSES: Project[] = [
  {
    id: 1,
    title: "Laboratorio de DB",

    description:
      "Aplicación de escritorio diseñada para facilitar el aprendizaje práctico del modelado y la normalización de bases de datos mediante la ejecución interactiva de algoritmos.",

    longDescription:
      "Aplicación de escritorio orientada al estudio interactivo de bases de datos. Permite a los estudiantes experimentar con conceptos fundamentales como dependencias funcionales, diseño de esquemas relacionales y procesos de normalización. La herramienta ofrece una interfaz intuitiva donde los usuarios pueden crear estructuras de datos, ejecutar algoritmos de análisis y visualizar los resultados paso a paso. Fue desarrollada con tecnologías web modernas integradas en un entorno nativo utilizando Tauri.Desarrollo de una aplicación de escritorio orientada al apoyo del estudio de bases de datos, diseñada para facilitar la comprensión práctica de conceptos fundamentales del modelado y la organización de la información. La herramienta permite a los usuarios experimentar de forma interactiva con distintos elementos teóricos, ejecutando algoritmos y construyendo estructuras de datos relacionadas con el diseño de esquemas relacionales.La aplicación ofrece funcionalidades para crear y visualizar relaciones entre entidades, analizar dependencias y explorar principios de normalización, permitiendo comprender cómo se estructuran correctamente las bases de datos y cómo se optimiza la organización de los datos para evitar redundancias y anomalías.El proyecto fue desarrollado utilizando Tauri y Vite, lo que permitió construir una aplicación de escritorio ligera, eficiente y multiplataforma, combinando tecnologías web modernas con un entorno nativo. Gracias a esta arquitectura, la aplicación puede ejecutarse como una herramienta portable sin necesidad de instalaciones complejas, manteniendo un consumo reducido de recursos.Además, el desarrollo incluyó el diseño de una interfaz clara e intuitiva que facilita la interacción con los distintos módulos de aprendizaje, permitiendo a los usuarios ejecutar algoritmos, visualizar resultados y experimentar con diferentes configuraciones de esquemas de bases de datos en tiempo real.Este proyecto demuestra habilidades en desarrollo de aplicaciones de escritorio modernas utilizando tecnologías web, diseño de herramientas educativas interactivas y aplicación práctica de conceptos avanzados de modelado de bases de datos y normalización",

    image: "/projects/laboratorio.webp",

    screenshots: [
      "/projects/laboratorio/1.webp",
      "/projects/laboratorio/2.webp",
      "/projects/laboratorio/3.webp",
    ],

    technologies: [
      { name: "vitejs", title: "Vite" },
      { name: "tauri", title: "Tauri" },
      { name: "react", title: "React" },
      { name: "tailwindcss", title: "Tailwind CSS" },
    ],

    problem:
      "Los estudiantes suelen tener dificultades para comprender procesos de normalización y modelado de datos únicamente mediante teoría o ejercicios estáticos.",

    architecture: [
      "Frontend construido con React y Vite para una interfaz dinámica y modular",
      "Integración con Tauri para generar una aplicación de escritorio ligera",
      "Persistencia local de datos para guardar ejercicios del usuario",
      "Separación entre lógica de algoritmos y componentes visuales",
    ],

    features: [
      "Creación y visualización de esquemas relacionales",
      "Ejecución de algoritmos de normalización",
      "Base de datos local para cada usuario",
      "Aplicación portable para Windows",
      "Interfaz diseñada para aprendizaje interactivo",
    ],

    technicalHighlights: [
      "Implementación de algoritmos de normalización desde cero",
      "Gestión de estructuras relacionales dentro del estado de la aplicación",
      "Arquitectura modular separando lógica de algoritmos y UI",
    ],

    challenges: [
      "Representar visualmente dependencias funcionales entre atributos",
      "Implementar algoritmos que expliquen cada paso del proceso de normalización",
    ],

    learnings: [
      "Diseño de herramientas educativas interactivas",
      "Integración de tecnologías web en aplicaciones de escritorio",
      "Modelado de algoritmos complejos dentro de interfaces gráficas",
    ],

    futureImprovements: [
      "Exportar esquemas generados a SQL",
      "Agregar más algoritmos de optimización de bases de datos",
      "Soporte para colaboración entre estudiantes",
    ],

    demoUrl: "https://drive.google.com/file/d/133kNMVZdZBsYkoxxKIO9Otd9_v9oRKGn/view?usp=sharing",

    codeUrl: "https://github.com/ViticoMC/laboratorio-db",

    status: "public",
  },

  {
    id: 2,
    title: "Menu Online",

    description:
      "Sistema de menú digital interactivo para restaurantes con filtrado por categorías y panel de administración para gestionar platos e imágenes.",

    longDescription:
      "Desarrollo de un sistema de menú digital interactivo para restaurantes, diseñado para mejorar la experiencia del cliente mediante una interfaz moderna, intuitiva y optimizada para dispositivos móviles. La aplicación permite a los usuarios explorar el menú del restaurante de forma rápida y organizada mediante un sistema de filtrado por categorías, facilitando la navegación entre diferentes tipos de platos como entradas, platos principales, bebidas o postres. El sistema incluye una visualización clara de cada producto, mostrando información relevante como nombre del plato, descripción, precio e imágenes, lo que permite a los clientes tomar decisiones de forma más informada y atractiva visualmente.Adicionalmente, la plataforma cuenta con un panel de administración destinado al personal del restaurante, desde el cual es posible gestionar de manera dinámica todo el contenido del menú. Este panel permite crear, editar y eliminar platos, administrar categorías, actualizar precios y subir imágenes de los productos, sin necesidad de modificar directamente el código de la aplicación.La solución está pensada para facilitar la actualización constante del menú, mejorar la organización de los productos y ofrecer una experiencia digital más eficiente tanto para los clientes como para los administradores del sistema.",

    image: "/projects/menu-online.webp",

    screenshots: ["/projects/menu/1.webp", "/projects/menu/2.webp", "/projects/menu/3.webp"],

    technologies: [
      { name: "react", title: "React" },
      { name: "typescript", title: "TypeScript" },
      { name: "nextjs2", title: "Next.js" },
      { name: "prisma", title: "Prisma" },
    ],

    problem:
      "Muchos restaurantes gestionan sus menús de forma manual o estática, lo que dificulta su actualización y organización.",

    architecture: [
      "Frontend desarrollado con React y Next.js",
      "Backend integrado mediante API Routes",
      "Persistencia de datos utilizando Prisma como ORM",
      "Separación entre panel administrativo y vista pública del menú",
    ],

    features: [
      "Filtrado de platos por categorías",
      "Panel de administración para gestionar productos",
      "Subida y visualización de imágenes",
      "Actualización dinámica del menú",
      "Interfaz optimizada para dispositivos móviles",
    ],

    technicalHighlights: [
      "Sistema dinámico de gestión de contenido",
      "Renderizado optimizado con Next.js",
      "Uso de TypeScript para mejorar la mantenibilidad del código",
    ],

    challenges: [
      "Diseñar una interfaz clara para visualizar muchos platos",
      "Permitir actualizaciones dinámicas sin afectar la experiencia del cliente",
    ],

    learnings: [
      "Diseño de paneles administrativos",
      "Gestión de datos con ORM",
      "Construcción de aplicaciones full-stack con Next.js",
    ],

    futureImprovements: [
      "Integrar sistema de pedidos online",
      "Añadir soporte para múltiples idiomas",
      "Sistema de autenticación para varios administradores",
    ],

    demoUrl: "https://tu-menu-online.vercel.app/",

    codeUrl: "https://github.com/ViticoMC/restaurant-plantilla",

    status: "public",
  },

  {
    id: 3,
    title: "COME COME",

    description:
      "Videojuego 2D desarrollado para navegador donde el jugador controla un cuadrado que recolecta objetos y evita obstáculos.",

    longDescription:
      "Diseño y desarrollo de un videojuego 2D ejecutado directamente en el navegador, en el que el jugador controla un personaje representado por un cuadrado con movimiento en cuatro direcciones dentro de un entorno dinámico. El objetivo del juego consiste en recolectar objetos distribuidos en el escenario para incrementar la puntuación mientras se evitan obstáculos que aumentan progresivamente en dificultad a medida que avanzan los niveles.El proyecto fue desarrollado utilizando JavaScript y React sobre Vite, implementando desde cero la lógica fundamental del juego sin el uso de motores de videojuegos externos. Esto incluye sistemas de detección de colisiones, control de movimiento, generación y gestión de obstáculos, sistema de puntuación y progresión por niveles.Adicionalmente, se integraron efectos de sonido y música ambiental para mejorar la experiencia del usuario, así como una interfaz con menú de inicio y reinicio de partida, permitiendo al jugador volver a comenzar fácilmente tras finalizar o perder una sesión de juego.El desarrollo de este proyecto implicó la implementación de estructuras de estado eficientes para la gestión de entidades del juego, optimización del renderizado en tiempo real dentro del navegador y diseño de una experiencia interactiva fluida, demostrando habilidades en lógica de programación, manejo del estado en aplicaciones React y desarrollo de interfaces interactivas orientadas al usuario.",

    image: "/projects/cuadradito.webp",

    screenshots: ["/projects/cuadradito/1.webp", "/projects/cuadradito/2.webp"],

    technologies: [
      { name: "vitejs", title: "Vite" },
      { name: "react", title: "React" },
    ],

    problem:
      "Explorar cómo desarrollar la lógica básica de un videojuego sin utilizar motores especializados.",

    architecture: [
      "Renderizado del juego dentro de una aplicación React",
      "Gestión del estado del juego mediante hooks",
      "Sistema de actualización continua del estado para simular animación",
    ],

    features: [
      "Movimiento en cuatro direcciones controlado por el usuario",
      "Sistema de puntuación basado en recolección de objetos",
      "Obstáculos con dificultad progresiva",
      "Música de fondo y efectos de sonido",
      "Menú de reinicio del juego",
    ],

    technicalHighlights: [
      "Implementación de detección de colisiones desde cero",
      "Sistema de generación dinámica de obstáculos",
      "Gestión de animación y actualización del estado en tiempo real",
    ],

    challenges: [
      "Implementar un sistema eficiente de colisiones",
      "Mantener un renderizado fluido dentro del navegador",
    ],

    learnings: [
      "Lógica de desarrollo de videojuegos",
      "Gestión de animaciones en aplicaciones web",
      "Optimización del renderizado en tiempo real",
    ],

    futureImprovements: [
      "Agregar nuevos niveles",
      "Sistema de puntuaciones altas",
      "Mejoras visuales y nuevos tipos de obstáculos",
    ],

    demoUrl: "https://cuadradito.vercel.app/",

    codeUrl: "https://github.com/ViticoMC/cuadradito",

    status: "public",
  },

  {
    id: 4,
    title: "Ecosistemas Costeros",

    description:
      "Sitio web desarrollado para divulgar actividades de conservación de ecosistemas costeros realizadas por un grupo universitario.",

    longDescription:
      "Sitio web informativo para la divulgación de actividades de conservación de ecosistemas costeros . Diseño y desarrollo de un sitio web orientado a la divulgación y promoción de iniciativas de protección de ecosistemas costeros, realizado en colaboración con un grupo de trabajo de la universidad. La plataforma tiene como objetivo visibilizar el valor ambiental del área protegida, así como documentar y difundir las actividades de conservación, investigación y participación comunitaria que se desarrollan en el lugar.El sitio incluye secciones dedicadas a la presentación del equipo de trabajo, permitiendo conocer a los miembros que participan en el proyecto, así como páginas informativas que describen el ecosistema protegido, su relevancia ecológica y los principales desafíos asociados a su conservación. Además, se integró contenido relacionado con las actividades realizadas en el área, como jornadas de limpieza, monitoreo ambiental, educación ecológica y otras iniciativas destinadas a fomentar la conciencia ambiental.Desde el punto de vista técnico, el proyecto fue desarrollado utilizando Astro, aprovechando su arquitectura de islas (Islands Architecture) para optimizar el rendimiento del sitio. Este enfoque permitió entregar la mayor parte del contenido como HTML estático altamente optimizado, incorporando componentes interactivos únicamente donde era necesario, lo que mejora significativamente los tiempos de carga, la eficiencia del sitio y la experiencia del usuario.El desarrollo del proyecto implicó la organización de contenido informativo, la estructuración de una interfaz clara y accesible, y la aplicación de prácticas modernas de optimización web y rendimiento, demostrando habilidades en desarrollo frontend, arquitectura moderna de sitios web y creación de plataformas digitales orientadas a la divulgación científica y ambiental.",

    image: "/projects/ecosistemas.webp",

    screenshots: ["/projects/ecosistemas/1.webp", "/projects/ecosistemas/2.webp"],

    technologies: [
      { name: "astro", title: "Astro" },
      { name: "react", title: "React" },
    ],

    problem:
      "Falta de plataformas digitales que comuniquen de forma clara el trabajo de conservación ambiental realizado por grupos universitarios.",

    architecture: [
      "Sitio desarrollado con Astro utilizando Islands Architecture",
      "Entrega de contenido mayoritariamente estático optimizado",
      "Componentes interactivos aislados para mejorar rendimiento",
    ],

    features: [
      "Landing page informativa sobre el ecosistema protegido",
      "Sección con actividades realizadas",
      "Perfil de los miembros del equipo",
      "Contenido educativo sobre conservación ambiental",
    ],

    technicalHighlights: [
      "Uso de arquitectura de islas para optimizar el rendimiento",
      "Generación de páginas estáticas altamente optimizadas",
      "Integración de componentes interactivos cuando es necesario",
    ],

    challenges: [
      "Organizar gran cantidad de información científica de forma accesible",
      "Optimizar el rendimiento manteniendo contenido visual atractivo",
    ],

    learnings: [
      "Desarrollo de sitios de divulgación científica",
      "Optimización de rendimiento web con Astro",
      "Estructuración de contenido informativo para usuarios finales",
    ],

    futureImprovements: [
      "Agregar galería multimedia de actividades",
      "Integrar mapas interactivos del ecosistema",
      "Sistema de noticias o blog para nuevas actividades",
    ],

    codeUrl: "https://github.com/ViticoMC/Ecosistemas-Costeros",

    status: "public",
  },
];
