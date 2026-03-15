import type { Project } from "@/types";

export const PROJECTSES: Project[] = [
  {
    id: 1,
    title: "Laboratorio de DB",
    description:
      "Desarrollo de una aplicación de escritorio orientada al apoyo del estudio de bases de datos, diseñada para facilitar la comprensión práctica de conceptos fundamentales del modelado y la organización de la información. La herramienta permite a los usuarios experimentar de forma interactiva con distintos elementos teóricos, ejecutando algoritmos y construyendo estructuras de datos relacionadas con el diseño de esquemas relacionales.La aplicación ofrece funcionalidades para crear y visualizar relaciones entre entidades, analizar dependencias y explorar principios de normalización, permitiendo comprender cómo se estructuran correctamente las bases de datos y cómo se optimiza la organización de los datos para evitar redundancias y anomalías.El proyecto fue desarrollado utilizando Tauri y Vite, lo que permitió construir una aplicación de escritorio ligera, eficiente y multiplataforma, combinando tecnologías web modernas con un entorno nativo. Gracias a esta arquitectura, la aplicación puede ejecutarse como una herramienta portable sin necesidad de instalaciones complejas, manteniendo un consumo reducido de recursos.Además, el desarrollo incluyó el diseño de una interfaz clara e intuitiva que facilita la interacción con los distintos módulos de aprendizaje, permitiendo a los usuarios ejecutar algoritmos, visualizar resultados y experimentar con diferentes configuraciones de esquemas de bases de datos en tiempo real.Este proyecto demuestra habilidades en desarrollo de aplicaciones de escritorio modernas utilizando tecnologías web, diseño de herramientas educativas interactivas y aplicación práctica de conceptos avanzados de modelado de bases de datos y normalización",
    image: "/projects/laboratorio.webp",
    technologies: [
      { name: "vitejs", title: "Vite" },
      { name: "tauri", title: "Tauri" },
      { name: "react", title: "React" },
      { name: "tailwindcss", title: "Tailwind CSS" },
    ],
    problem:
      "Dificultad en el estudio de los estudiantes , debido a la falta de herramientas atractivas que el alumno disfrute",
    features: [
      "Base de datos local para cada usuario ",
      "Portable a cualquier dispositivo windows",
      "Resolucion de algoritmos de normalizacion y modelado de datos",
      "Interfaz intuitiva y atractiva para mejorar la experiencia de aprendizaje",
    ],
    demoUrl: "https://drive.google.com/file/d/133kNMVZdZBsYkoxxKIO9Otd9_v9oRKGn/view?usp=sharing",
    codeUrl: "https://github.com/ViticoMC/laboratorio-db",
    status: "public",
  },
  {
    id: 2,
    title: "Menu Online",
    description:
      "Desarrollo de un sistema de menú digital interactivo para restaurantes, diseñado para mejorar la experiencia del cliente mediante una interfaz moderna, intuitiva y optimizada para dispositivos móviles. La aplicación permite a los usuarios explorar el menú del restaurante de forma rápida y organizada mediante un sistema de filtrado por categorías, facilitando la navegación entre diferentes tipos de platos como entradas, platos principales, bebidas o postres. El sistema incluye una visualización clara de cada producto, mostrando información relevante como nombre del plato, descripción, precio e imágenes, lo que permite a los clientes tomar decisiones de forma más informada y atractiva visualmente.Adicionalmente, la plataforma cuenta con un panel de administración destinado al personal del restaurante, desde el cual es posible gestionar de manera dinámica todo el contenido del menú. Este panel permite crear, editar y eliminar platos, administrar categorías, actualizar precios y subir imágenes de los productos, sin necesidad de modificar directamente el código de la aplicación.La solución está pensada para facilitar la actualización constante del menú, mejorar la organización de los productos y ofrecer una experiencia digital más eficiente tanto para los clientes como para los administradores del sistema.",
    image: "/projects/menu-online.webp",
    technologies: [
      { name: "react", title: "React" },
      { name: "typescript", title: "TypeScript" },
      { name: "nextjs2", title: "Next.js" },
      { name: "prisma", title: "Prisma" },
    ],
    problem:
      "Gestionar y actualizar su menú de forma dinámica, organizar los platos por categorías y mejorar la experiencia del cliente mediante una navegación clara, visual y accesible desde dispositivos móviles",
    features: [
      "Permite actualizar platos, precios o categorías en tiempo real desde el panel de administración",
      "Presenta imágenes de los platos, descripciones y precios de forma clara.",
      "Implementa filtros por categorías (creadas por el administrador).",
    ],
    demoUrl: "https://tu-menu-online.vercel.app/",
    status: "public",
    codeUrl: "https://github.com/ViticoMC/restaurant-plantilla",
  },
  {
    id: 3,
    title: "COME COME",
    description:
      "Diseño y desarrollo de un videojuego 2D ejecutado directamente en el navegador, en el que el jugador controla un personaje representado por un cuadrado con movimiento en cuatro direcciones dentro de un entorno dinámico. El objetivo del juego consiste en recolectar objetos distribuidos en el escenario para incrementar la puntuación mientras se evitan obstáculos que aumentan progresivamente en dificultad a medida que avanzan los niveles.El proyecto fue desarrollado utilizando JavaScript y React sobre Vite, implementando desde cero la lógica fundamental del juego sin el uso de motores de videojuegos externos. Esto incluye sistemas de detección de colisiones, control de movimiento, generación y gestión de obstáculos, sistema de puntuación y progresión por niveles.Adicionalmente, se integraron efectos de sonido y música ambiental para mejorar la experiencia del usuario, así como una interfaz con menú de inicio y reinicio de partida, permitiendo al jugador volver a comenzar fácilmente tras finalizar o perder una sesión de juego.El desarrollo de este proyecto implicó la implementación de estructuras de estado eficientes para la gestión de entidades del juego, optimización del renderizado en tiempo real dentro del navegador y diseño de una experiencia interactiva fluida, demostrando habilidades en lógica de programación, manejo del estado en aplicaciones React y desarrollo de interfaces interactivas orientadas al usuario.",
    image: "/projects/cuadradito.webp",
    technologies: [
      { name: "vitejs", title: "Vite" },
      { name: "react", title: "React" },
    ],
    problem:
      "Satisfacer mi curiosidad personal sobre como desarrollar colisiones y moviento de un personaje desde cero",
    features: [
      "Movimiento fluido en cuatro direcciones controlado por el usuario",
      "Sistema de generación de obstáculos con dificultad progresiva a medida que avanzan los niveles",
      "Sistema de puntuación basado en la recolección de objetos dentro del escenario",
      "Música de fondo y efectos de sonido para mejorar la experiencia de juego",
    ],
    demoUrl: "https://cuadradito.vercel.app/",
    status: "public",
    codeUrl: "https://github.com/ViticoMC/cuadradito",
  },
  {
    id: 4,
    title: "Ecosistemas Costeros",
    description:
      "Sitio web informativo para la divulgación de actividades de conservación de ecosistemas costeros . Diseño y desarrollo de un sitio web orientado a la divulgación y promoción de iniciativas de protección de ecosistemas costeros, realizado en colaboración con un grupo de trabajo de la universidad. La plataforma tiene como objetivo visibilizar el valor ambiental del área protegida, así como documentar y difundir las actividades de conservación, investigación y participación comunitaria que se desarrollan en el lugar.El sitio incluye secciones dedicadas a la presentación del equipo de trabajo, permitiendo conocer a los miembros que participan en el proyecto, así como páginas informativas que describen el ecosistema protegido, su relevancia ecológica y los principales desafíos asociados a su conservación. Además, se integró contenido relacionado con las actividades realizadas en el área, como jornadas de limpieza, monitoreo ambiental, educación ecológica y otras iniciativas destinadas a fomentar la conciencia ambiental.Desde el punto de vista técnico, el proyecto fue desarrollado utilizando Astro, aprovechando su arquitectura de islas (Islands Architecture) para optimizar el rendimiento del sitio. Este enfoque permitió entregar la mayor parte del contenido como HTML estático altamente optimizado, incorporando componentes interactivos únicamente donde era necesario, lo que mejora significativamente los tiempos de carga, la eficiencia del sitio y la experiencia del usuario.El desarrollo del proyecto implicó la organización de contenido informativo, la estructuración de una interfaz clara y accesible, y la aplicación de prácticas modernas de optimización web y rendimiento, demostrando habilidades en desarrollo frontend, arquitectura moderna de sitios web y creación de plataformas digitales orientadas a la divulgación científica y ambiental.",
    image: "/projects/laboratorio.webp",
    technologies: [
      { name: "astro", title: "Astro" },
      { name: "react", title: "React" },
    ],
    problem: "Fomentar en la mente de las personas el cuidado del medio ambiente",
    features: [
      "Landign page informativa sobre el ecosistema protegido y su importancia ambiental",
      "Actividades realizadas",
      "Detalles de los miembros del equipo de trabajo",
    ],
    codeUrl: "https://github.com/ViticoMC/Ecosistemas-Costeros",
    status: "public",
  },
];

export const PROJECTSEN: Project[] = [
  {
    id: 1,
    title: "Database Laboratory",
    description:
      "Development of a desktop application aimed at supporting the study of databases, designed to facilitate practical comprehension of fundamental concepts in data modeling and information organization. The tool allows users to experimentally interact with theoretical elements, executing algorithms and building data structures related to relational schema design. The application offers functionalities for creating and visualizing relationships between entities, analyzing dependencies, and exploring normalization principles, enabling understanding of how databases are correctly structured and how data organization is optimized to avoid redundancies and anomalies. The project was developed using Tauri and Vite, which made it possible to build a lightweight, efficient, and cross-platform desktop application, combining modern web technologies with a native environment. Thanks to this architecture, the application can run as a portable tool without the need for complex installations, maintaining low resource consumption. Additionally, the development included the design of a clear and intuitive interface that facilitates interaction with the different learning modules, allowing users to execute algorithms, visualize results, and experiment with different database schema configurations in real time. This project demonstrates skills in developing modern desktop applications using web technologies, designing interactive educational tools, and practical application of advanced concepts in database modeling and normalization.",
    image: "/projects/laboratorio.webp",
    technologies: [
      { name: "vitejs", title: "Vite" },
      { name: "tauri", title: "Tauri" },
      { name: "react", title: "React" },
      { name: "tailwindcss", title: "Tailwind CSS" },
    ],
    problem:
      "Difficulty in student learning due to the lack of attractive tools that students enjoy",
    features: [
      "Local database for each user",
      "Portable to any Windows device",
      "Resolution of normalization algorithms and data modeling",
      "Intuitive and attractive interface to improve the learning experience",
    ],
    demoUrl: "https://drive.google.com/file/d/133kNMVZdZBsYkoxxKIO9Otd9_v9oRKGn/view?usp=sharing",
    codeUrl: "https://github.com/ViticoMC/laboratorio-db",
    status: "public",
  },
  {
    id: 2,
    title: "Online Menu",
    description:
      "Development of an interactive digital menu system for restaurants, designed to improve customer experience through a modern, intuitive interface optimized for mobile devices. The application allows users to explore the restaurant menu quickly and in an organized manner through a category filtering system, facilitating navigation between different types of dishes such as appetizers, main courses, beverages, or desserts. The system includes clear visualization of each product, showing relevant information such as dish name, description, price, and images, allowing customers to make more informed and visually appealing decisions. Additionally, the platform features an administration panel for restaurant staff, from which it is possible to dynamically manage all menu content. This panel allows creating, editing, and deleting dishes, managing categories, updating prices, and uploading product images, without needing to directly modify the application code. The solution is designed to facilitate constant menu updates, improve product organization, and offer a more efficient digital experience for both customers and system administrators.",
    image: "/projects/menu-online.webp",
    technologies: [
      { name: "react", title: "React" },
      { name: "typescript", title: "TypeScript" },
      { name: "nextjs2", title: "Next.js" },
      { name: "prisma", title: "Prisma" },
    ],
    problem:
      "Managing and updating menu dynamically, organizing dishes by categories, and improving customer experience through clear, visual navigation accessible from mobile devices",
    features: [
      "Allows updating dishes, prices, or categories in real-time from the administration panel",
      "Displays dish images, descriptions, and prices clearly",
      "Implements category filters created by the administrator",
    ],
    demoUrl: "https://tu-menu-online.vercel.app/",
    status: "public",
    codeUrl: "https://github.com/ViticoMC/restaurant-plantilla",
  },
  {
    id: 3,
    title: "COME COME",
    description:
      "Design and development of a 2D video game executed directly in the browser, in which the player controls a character represented by a square with movement in four directions within a dynamic environment. The objective of the game is to collect objects distributed in the scenario to increase the score while avoiding obstacles that progressively increase in difficulty as players advance through levels. The project was developed using JavaScript and React on Vite, implementing from scratch the fundamental game logic without the use of external game engines. This includes collision detection systems, movement control, obstacle generation and management, scoring system, and level progression. Additionally, sound effects and ambient music were integrated to improve user experience, as well as an interface with a start menu and game restart option, allowing the player to easily restart after finishing or losing a game session. The development of this project involved implementing efficient state structures for managing game entities, optimizing real-time rendering within the browser, and designing a fluid interactive experience, demonstrating skills in programming logic, state management in React applications, and development of user-oriented interactive interfaces.",
    image: "/projects/cuadradito.webp",
    technologies: [
      { name: "vitejs", title: "Vite" },
      { name: "react", title: "React" },
    ],
    problem:
      "Satisfy personal curiosity about how to develop collisions and character movement from scratch",
    features: [
      "Smooth movement in four directions controlled by the user",
      "System for generating obstacles with progressive difficulty as players advance through levels",
      "Scoring system based on collecting objects in the scenario",
      "Background music and sound effects to improve game experience",
    ],
    demoUrl: "https://cuadradito.vercel.app/",
    status: "public",
    codeUrl: "https://github.com/ViticoMC/cuadradito",
  },
  {
    id: 4,
    title: "Coastal Ecosystems",
    description:
      "Informational website for the dissemination of coastal ecosystem conservation activities. Design and development of a website aimed at the dissemination and promotion of initiatives to protect coastal ecosystems, carried out in collaboration with a university working group. The platform aims to make visible the environmental value of the protected area, as well as to document and disseminate conservation, research, and community participation activities that take place there. The site includes sections dedicated to presenting the working team, allowing visitors to meet the members participating in the project, as well as informational pages describing the protected ecosystem, its ecological relevance, and the main challenges associated with its conservation. Additionally, content related to activities conducted in the area is integrated, such as cleaning events, environmental monitoring, ecological education, and other initiatives aimed at promoting environmental awareness. From a technical standpoint, the project was developed using Astro, taking advantage of its Islands Architecture to optimize site performance. This approach made it possible to deliver most of the content as highly optimized static HTML, incorporating interactive components only where necessary, which significantly improves load times, site efficiency, and user experience. The project development involved organizing informational content, structuring a clear and accessible interface, and applying modern web optimization and performance practices, demonstrating skills in frontend development, modern website architecture, and creation of digital platforms oriented toward scientific and environmental dissemination.",
    image: "/projects/laboratorio.webp",
    technologies: [
      { name: "astro", title: "Astro" },
      { name: "react", title: "React" },
    ],
    problem: "Promote environmental care in people's minds",
    features: [
      "Informative landing page about the protected ecosystem and its environmental importance",
      "Activities performed",
      "Details of working team members",
    ],
    codeUrl: "https://github.com/ViticoMC/Ecosistemas-Costeros",
    status: "public",
  },
];
