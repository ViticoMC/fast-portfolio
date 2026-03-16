import type { Technology } from "./projects";

export type WorkMode = "solo" | "team" | "hybrid";

export interface WorkExperience {
  id: number;
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  location: string;
  workMode: WorkMode;
  summary: string;
  responsibilities: string[];
  achievements: string[];
  technologies: Technology[];
}