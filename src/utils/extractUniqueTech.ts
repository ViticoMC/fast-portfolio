import type { Project, Technology, TechStackName } from "@/types";

export function extractUniqueTechs(projects: Project[]): TechStackName[] {
  const techSet = new Set<TechStackName>();
  projects.forEach((project) => {
    project.technologies.forEach((tech: Technology) => {
      techSet.add(tech.name);
    });
  });
  return Array.from(techSet).sort();
}
