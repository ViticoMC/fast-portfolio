export type TechStackName =
  | "react"
  | "nextjs2"
  | "typescript"
  | "tailwindcss"
  | "nodejs"
  | "vitejs"
  | "tauri"
  | "nextjs"
  | "prisma"
  | "astro"
  | "supabase"
  | "cloudinary";

export type Technology = {
  name: TechStackName;
  title: string;
};

export type ProjectStatus = "private" | "public";

// export type Project = {
//   id: number;
//   title: string;
//   description: string;
//   image: string;
//   technologies: Technology[];
//   problem: string;
//   features: string[];
//   demoUrl?: string;
//   codeUrl?: string;
//   status?: ProjectStatus;
// };

export interface Project {
  id: number;

  title: string;

  /** Descripción corta para las cards */
  description: string;

  /** Descripción completa para la página de detalles */
  longDescription: string;

  /** Imagen principal usada en la card */
  image: string;

  /** Galería de imágenes para la página de detalles */
  screenshots: string[];

  technologies: Technology[];

  /** Problema que resuelve el proyecto */
  problem: string;

  /** Descripción de la arquitectura del proyecto */
  architecture: string[];

  /** Funcionalidades principales */
  features: string[];

  /** Aspectos técnicos destacables */
  technicalHighlights: string[];

  /** Retos técnicos encontrados durante el desarrollo */
  challenges: string[];

  /** Aprendizajes obtenidos durante el desarrollo */
  learnings: string[];

  /** Posibles mejoras futuras */
  futureImprovements: string[];

  demoUrl?: string;

  codeUrl?: string;

  status: ProjectStatus;
}
