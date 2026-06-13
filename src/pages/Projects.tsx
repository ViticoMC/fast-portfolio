import { useState } from "react";
import { motion, type Variants } from "motion/react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { SearchBar } from "@/custom-components/common";
import type { TechStackName } from "@/types";
import { extractUniqueTechs } from "@/utils/extractUniqueTech";
import { ProjectCard } from "@/custom-components/ProjectCard";
import { useGetAllprojects } from "@/hooks/useGetAllProjects";
import useScrollTop from "@/hooks/useScrollTop";
import { BackButton } from "@/custom-components/buttons/BackButton";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
};

export function Projects() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTechs, setSelectedTechs] = useState<TechStackName[]>([]);
  const { PROJECTS } = useGetAllprojects();

  const availableTechs = extractUniqueTechs(PROJECTS);

  const filteredProjects = PROJECTS.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTechs =
      selectedTechs.length === 0 ||
      project.technologies.some((tech) => selectedTechs.includes(tech.name));
    return matchesSearch && matchesTechs;
  });

  const handleTechChange = (tech: TechStackName, isSelected: boolean) => {
    setSelectedTechs((prev) =>
      isSelected ? [...prev, tech] : prev.filter((t) => t !== tech)
    );
  };

  const handleProjectDetails = (projectId: number) => {
    navigate(`/projects/${projectId}`);
  };

  useScrollTop();

  return (
    <div className="min-h-screen pt-28 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <BackButton label={t("projectDetails.backToProjects")} />
        </motion.div>

        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight text-balance text-fg-base">
            {t("projectsSection.allProjects")}
          </h1>
          <p className="mt-3 text-base text-fg-muted">
            {t("projectsSection.explore")} {filteredProjects.length}{" "}
            {filteredProjects.length !== 1
              ? t("projectsSection.projectPlural")
              : t("projectsSection.projectSingular")}
          </p>
          <div className="mt-4 h-px w-16 bg-copper" />
        </motion.div>

        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder={t("projects.searchPlaceholder")}
        />

        <div className="mb-12">
          <div className="flex flex-wrap gap-2">
            {availableTechs.map((tech) => {
              const isSelected = selectedTechs.includes(tech);
              return (
                <button
                  key={tech}
                  onClick={() => handleTechChange(tech, !isSelected)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                    isSelected
                      ? "bg-copper text-paper"
                      : "border border-border-base text-fg-muted hover:text-fg-base hover:border-copper/30"
                  }`}
                >
                  {tech}
                </button>
              );
            })}
          </div>
        </div>

        {filteredProjects.length > 0 ? (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                onClick={() => handleProjectDetails(project.id)}
                className="cursor-pointer"
                variants={itemVariants}
              >
                <ProjectCard
                  project={project}
                  variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-base text-fg-muted">
              No projects match your filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedTechs([]);
              }}
              className="mt-4 px-5 py-2.5 rounded-full border border-border-base text-sm font-medium text-fg-muted hover:text-fg-base hover:border-copper/30 transition-all duration-300"
            >
              Clear filters
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
