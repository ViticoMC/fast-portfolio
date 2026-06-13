import type { Project } from "@/types";
import { motion, type Variants } from "motion/react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import DemoButton from "./buttons/DemoButton";
import CodeButton from "./buttons/CodeButton";
import DetailsButton from "./buttons/DetailsButton";
import TechTag from "./common/TechTag";

interface ProjectCardProps {
  project: Project;
  variants: Variants;
}

export function ProjectCard({ project, variants }: ProjectCardProps) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleDetailsClick = () => {
    navigate(`/projects/${project.id}`);
  };

  return (
    <motion.div
      className="group relative rounded-2xl border border-border-base bg-paper-elevated/50 overflow-hidden hover:border-copper/20 transition-all duration-500 flex flex-col"
      variants={variants}
    >
      <div className="relative h-56 md:h-64 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-paper/40 via-transparent to-transparent" />
      </div>

      <div className="p-6 md:p-8 flex flex-col flex-1">
        <div className="flex-1 space-y-4">
          <div>
            <h3 className="text-xl md:text-2xl font-serif text-fg-base tracking-tight">
              {project.title}
            </h3>
            <p className="mt-2 text-sm text-fg-muted leading-relaxed line-clamp-3">
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 6).map((tech) => (
              <TechTag key={`${project.id}-${tech.name}`} tech={tech} />
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 pt-6 mt-auto border-t border-border-base">
          <DemoButton href={project.demoUrl} label={t("projectsSection.buttons.demo")} />
          <CodeButton href={project.codeUrl} label={t("projectsSection.buttons.code")} />
          <DetailsButton onClick={handleDetailsClick} label={t("projectsSection.buttons.details")} />
        </div>
      </div>
    </motion.div>
  );
}
