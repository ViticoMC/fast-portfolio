import { motion, type Variants } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ProjectCard } from "../../custom-components/ProjectCard";
import { Link } from "react-router-dom";
import { useGetAllprojects } from "@/hooks/useGetAllProjects";

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 24,
        },
    },
};

export function TestProjectsSection() {
    const { t } = useTranslation();

    const { PROJECTS } = useGetAllprojects()

    // Mostrar solo los primeros 2 proyectos
    const displayedProjects = PROJECTS.slice(0, 2);

    return (
        <section className="w-full h-full  md:px-4 ">
            <div className="max-w-7xl mx-auto border-white/10 p-4 shadow-[0_0_40px_rgba(0,0,0,0.35)] rounded-3xl backdrop-blur-md">
                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block px-4 py-1 rounded-full text-xs tracking-widest uppercase border border-border bg-highlight-blue/30 text-foreground mb-4">
                        {t("projectsSection.badge")}
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mt-4">
                        {t("projectsSection.title")}
                    </h2>
                    <div className="w-16 h-1 bg-linear-to-r from-highlight-blue to-cyan-500 mx-auto mt-6 rounded-full"></div>
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    className="grid grid-cols-1  lg:grid-cols-2 gap-8 md:gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {displayedProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} variants={itemVariants} />
                    ))}
                </motion.div>

                {/* Explore More Button */}
                <motion.div
                    className="text-center mt-16"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    <Link
                        to={"/projects"}
                        className="group px-8 py-3 rounded-lg border border-border hover:scale-[1.1] text-text-primary  font-semibold transition-all duration-300 hover:shadow-glow flex items-center gap-2 mx-auto cursor-pointer backdrop-blur-2xl max-w-70"
                    >
                        Explorar Más Proyectos
                        <svg
                            className="w-4 h-4 group-hover:translate-x-1 transition-all"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
