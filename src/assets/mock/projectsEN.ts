import type { Project } from "@/types";

export const PROJECTSEN: Project[] = [
  {
    id: 1,
    title: "Database Laboratory",

    description:
      "Desktop application designed to facilitate practical learning of database modeling and normalization through interactive execution of algorithms.",

    longDescription:
      "Desktop application oriented to interactive learning of databases. It allows students to experiment with fundamental concepts such as functional dependencies, relational schema design, and normalization processes. The tool offers an intuitive interface where users can create data structures, execute analysis algorithms, and visualize results step by step. It was developed with modern web technologies integrated into a native environment using Tauri. Desktop application oriented to support the study of databases, designed to facilitate practical comprehension of fundamental concepts in data modeling and information organization. The tool allows users to experimentally interact with theoretical elements, executing algorithms and building data structures related to relational schema design. The application offers functionalities for creating and visualizing relationships between entities, analyzing dependencies, and exploring normalization principles, enabling understanding of how databases are correctly structured and how data organization is optimized to avoid redundancies and anomalies. The project was developed using Tauri and Vite, which made it possible to build a lightweight, efficient, and cross-platform desktop application, combining modern web technologies with a native environment. Thanks to this architecture, the application can run as a portable tool without the need for complex installations, maintaining low resource consumption. Additionally, the development included the design of a clear and intuitive interface that facilitates interaction with the different learning modules, allowing users to execute algorithms, visualize results, and experiment with different database schema configurations in real time. This project demonstrates skills in developing modern desktop applications using web technologies, designing interactive educational tools, and practical application of advanced concepts in database modeling and normalization.",

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
      "Students often have difficulty understanding normalization processes and data modeling solely through theory or static exercises.",

    architecture: [
      "Frontend built with React and Vite for a dynamic and modular interface",
      "Integration with Tauri to generate a lightweight desktop application",
      "Local data persistence to save user exercises",
      "Separation between algorithm logic and visual components",
    ],

    features: [
      "Creation and visualization of relational schemas",
      "Execution of normalization algorithms",
      "Local database for each user",
      "Portable application for Windows",
      "Interface designed for interactive learning",
    ],

    technicalHighlights: [
      "Implementation of normalization algorithms from scratch",
      "Management of relational structures within application state",
      "Modular architecture separating algorithm logic from UI",
    ],

    challenges: [
      "Visually representing functional dependencies between attributes",
      "Implementing algorithms that explain each step of the normalization process",
    ],

    learnings: [
      "Design of interactive educational tools",
      "Integration of web technologies in desktop applications",
      "Modeling of complex algorithms within graphical interfaces",
    ],

    futureImprovements: [
      "Export generated schemas to SQL",
      "Add more database optimization algorithms",
      "Support for collaboration between students",
    ],

    demoUrl: "https://drive.google.com/file/d/133kNMVZdZBsYkoxxKIO9Otd9_v9oRKGn/view?usp=sharing",

    codeUrl: "https://github.com/ViticoMC/laboratorio-db",

    status: "public",
  },

  {
    id: 2,
    title: "Online Menu",

    description:
      "Interactive digital menu system for restaurants with category filtering and administration panel to manage dishes and images.",

    longDescription:
      "Development of an interactive digital menu system for restaurants, designed to improve customer experience through a modern, intuitive interface optimized for mobile devices. The application allows users to explore the restaurant menu quickly and in an organized manner through a category filtering system, facilitating navigation between different types of dishes such as appetizers, main courses, beverages, or desserts. The system includes clear visualization of each product, showing relevant information such as dish name, description, price, and images, allowing customers to make more informed and visually appealing decisions. Additionally, the platform features an administration panel for restaurant staff, from which it is possible to dynamically manage all menu content. This panel allows creating, editing, and deleting dishes, managing categories, updating prices, and uploading product images, without needing to directly modify the application code. The solution is designed to facilitate constant menu updates, improve product organization, and offer a more efficient digital experience for both customers and system administrators.",

    image: "/projects/menu-online.webp",

    screenshots: ["/projects/menu/1.webp", "/projects/menu/2.webp", "/projects/menu/3.webp"],

    technologies: [
      { name: "react", title: "React" },
      { name: "typescript", title: "TypeScript" },
      { name: "nextjs2", title: "Next.js" },
      { name: "prisma", title: "Prisma" },
    ],

    problem:
      "Many restaurants manage their menus manually or statically, making updates and organization difficult.",

    architecture: [
      "Frontend developed with React and Next.js",
      "Backend integrated through API Routes",
      "Data persistence using Prisma as ORM",
      "Separation between administrative panel and public menu view",
    ],

    features: [
      "Filtering dishes by categories",
      "Administration panel to manage products",
      "Image upload and display",
      "Dynamic menu updates",
      "Interface optimized for mobile devices",
    ],

    technicalHighlights: [
      "Dynamic content management system",
      "Optimized rendering with Next.js",
      "Use of TypeScript to improve code maintainability",
    ],

    challenges: [
      "Design a clear interface to display many dishes",
      "Allow dynamic updates without affecting customer experience",
    ],

    learnings: [
      "Design of administrative panels",
      "Data management with ORM",
      "Building full-stack applications with Next.js",
    ],

    futureImprovements: [
      "Integrate online ordering system",
      "Add support for multiple languages",
      "Authentication system for multiple administrators",
    ],

    demoUrl: "https://tu-menu-online.vercel.app/",

    codeUrl: "https://github.com/ViticoMC/restaurant-plantilla",

    status: "public",
  },

  {
    id: 3,
    title: "COME COME",

    description:
      "2D video game developed for the browser where the player controls a square that collects objects and avoids obstacles.",

    longDescription:
      "Design and development of a 2D video game executed directly in the browser, in which the player controls a character represented by a square with movement in four directions within a dynamic environment. The objective of the game is to collect objects distributed in the scenario to increase the score while avoiding obstacles that progressively increase in difficulty as players advance through levels. The project was developed using JavaScript and React on Vite, implementing from scratch the fundamental game logic without the use of external game engines. This includes collision detection systems, movement control, obstacle generation and management, scoring system, and level progression. Additionally, sound effects and ambient music were integrated to improve user experience, as well as an interface with a start menu and game restart option, allowing the player to easily restart after finishing or losing a game session. The development of this project involved implementing efficient state structures for managing game entities, optimizing real-time rendering within the browser, and designing a fluid interactive experience, demonstrating skills in programming logic, state management in React applications, and development of user-oriented interactive interfaces.",

    image: "/projects/cuadradito.webp",

    screenshots: ["/projects/cuadradito/1.webp", "/projects/cuadradito/2.webp"],

    technologies: [
      { name: "vitejs", title: "Vite" },
      { name: "react", title: "React" },
    ],

    problem:
      "Explore how to develop the basic logic of a video game without using specialized engines.",

    architecture: [
      "Game rendering within a React application",
      "Game state management using hooks",
      "Continuous state update system to simulate animation",
    ],

    features: [
      "Movement in four directions controlled by the user",
      "Scoring system based on collecting objects",
      "Obstacles with progressive difficulty",
      "Background music and sound effects",
      "Game restart menu",
    ],

    technicalHighlights: [
      "Implementation of collision detection from scratch",
      "Dynamic obstacle generation system",
      "Animation management and state update in real time",
    ],

    challenges: [
      "Implement an efficient collision detection system",
      "Maintain smooth rendering within the browser",
    ],

    learnings: [
      "Video game development logic",
      "Animation management in web applications",
      "Real-time rendering optimization",
    ],

    futureImprovements: [
      "Add new levels",
      "High score system",
      "Visual improvements and new types of obstacles",
    ],

    demoUrl: "https://cuadradito.vercel.app/",

    codeUrl: "https://github.com/ViticoMC/cuadradito",

    status: "public",
  },

  {
    id: 4,
    title: "Coastal Ecosystems",

    description:
      "Website developed to disseminate conservation activities of coastal ecosystems carried out by a university working group.",

    longDescription:
      "Informational website for the dissemination of coastal ecosystem conservation activities. Design and development of a website aimed at the dissemination and promotion of initiatives to protect coastal ecosystems, carried out in collaboration with a university working group. The platform aims to make visible the environmental value of the protected area, as well as to document and disseminate conservation, research, and community participation activities that take place there. The site includes sections dedicated to presenting the working team, allowing visitors to meet the members participating in the project, as well as informational pages describing the protected ecosystem, its ecological relevance, and the main challenges associated with its conservation. Additionally, content related to activities conducted in the area is integrated, such as cleaning events, environmental monitoring, ecological education, and other initiatives aimed at promoting environmental awareness. From a technical standpoint, the project was developed using Astro, taking advantage of its Islands Architecture to optimize site performance. This approach made it possible to deliver most of the content as highly optimized static HTML, incorporating interactive components only where necessary, which significantly improves load times, site efficiency, and user experience. The project development involved organizing informational content, structuring a clear and accessible interface, and applying modern web optimization and performance practices, demonstrating skills in frontend development, modern website architecture, and creation of digital platforms oriented toward scientific and environmental dissemination.",

    image: "/projects/ecosistemas.webp",

    screenshots: ["/projects/ecosistemas/1.webp", "/projects/ecosistemas/2.webp"],

    technologies: [
      { name: "astro", title: "Astro" },
      { name: "react", title: "React" },
    ],

    problem:
      "Lack of digital platforms that clearly communicate the environmental conservation work carried out by university groups.",

    architecture: [
      "Website developed with Astro using Islands Architecture",
      "Delivery of mostly optimized static content",
      "Isolated interactive components to improve performance",
    ],

    features: [
      "Informative landing page about the protected ecosystem",
      "Section with activities performed",
      "Profile of team members",
      "Educational content about environmental conservation",
    ],

    technicalHighlights: [
      "Use of island architecture to optimize performance",
      "Generation of highly optimized static pages",
      "Integration of interactive components when necessary",
    ],

    challenges: [
      "Organize large amounts of scientific information in an accessible way",
      "Optimize performance while maintaining attractive visual content",
    ],

    learnings: [
      "Development of scientific dissemination websites",
      "Web performance optimization with Astro",
      "Structuring of informational content for end users",
    ],

    futureImprovements: [
      "Add multimedia gallery of activities",
      "Integrate interactive maps of the ecosystem",
      "News system or blog for new activities",
    ],

    codeUrl: "https://github.com/ViticoMC/Ecosistemas-Costeros",

    status: "public",
  },
];
