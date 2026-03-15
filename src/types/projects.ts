export type TechStackName =
  | "react"
  | "nextjs2"
  | "typescript"
  | "tailwindcss"
  | "nodejs"
  | "vitejs"
  | "tauri"
  | "nextjs"
  | "prisma";

export type Technology = {
  name: TechStackName;
  title: string;
};

export type ProjectStatus = "private" | "public";

export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: Technology[];
  problem: string;
  features: string[];
  demoUrl: string;
  codeUrl?: string;
  status?: ProjectStatus;
};
