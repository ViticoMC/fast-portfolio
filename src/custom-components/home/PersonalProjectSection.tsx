import { motion, type Variants } from "motion/react";
import { useTranslation } from "react-i18next";
import { ProjectCard } from "../../custom-components/ProjectCard";
import { Link } from "react-router-dom";
import { useGetAllprojects } from "@/hooks/useGetAllProjects";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
};

export function TestProjectsSection() {
  const { t } = useTranslation();
  const { PROJECTS } = useGetAllprojects();
  const displayedProjects = PROJECTS.slice(0, 2);

  return (
    <section className="w-full px-4 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight text-balance text-fg-base">
            {t("projectsSection.title")}
          </h2>
          <div className="mt-6 h-px w-16 bg-copper" />
        </div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {displayedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} variants={itemVariants} />
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border-base text-sm font-medium text-fg-muted hover:text-fg-base hover:border-copper transition-all duration-300"
          >
            <span>Explorar M&aacute;s Proyectos</span>
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
