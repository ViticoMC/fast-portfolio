import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import StackIcon from "tech-stack-icons";
import { BackButton } from "@/custom-components/common";
import DemoButton from "@/custom-components/buttons/DemoButton";
import CodeButton from "@/custom-components/buttons/CodeButton";
import { featuredProjects } from "@/assets/mock/mockProjects";
import type { Project } from "@/types";

/**
 * Página de detalle de proyecto
 * Muestra toda la información detallada del proyecto seleccionado
 */
export function ProjectDetails() {
    const { projectId } = useParams<{ projectId: string }>();
    const navigate = useNavigate();
    const { t } = useTranslation();

    // Buscar el proyecto por ID
    const project: Project | undefined = featuredProjects.find(
        (p) => p.id === parseInt(projectId || "0")
    );

    // Si no hay proyecto, mostrar error
    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center pt-24">
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl font-bold text-text-primary mb-4">
                        Proyecto no encontrado
                    </h1>
                    <p className="text-text-muted mb-8">
                        El proyecto que buscas no existe.
                    </p>
                    <BackButton label="Ir a Proyectos" />
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-24 pb-16 px-4">
            <div className="max-w-5xl mx-auto">
                {/* Header con botón de retroceso */}
                <motion.div
                    className="mb-8 flex items-center justify-between"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <BackButton label="Volver a Proyectos" />
                </motion.div>

                {/* Image Hero */}
                <motion.div
                    className="relative rounded-3xl overflow-hidden mb-12 h-96 md:h-[500px]"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-foreground/40 via-transparent to-transparent"></div>
                </motion.div>

                {/* Main Content */}
                <motion.div
                    className="space-y-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {/* Title and Status */}
                    <div>
                        <div className="flex items-center gap-4 mb-4">
                            <h1 className="text-4xl md:text-5xl font-bold text-text-primary">
                                {project.title}
                            </h1>
                            {project.status && (
                                <span className="px-3 py-1 rounded-full text-xs uppercase tracking-widest border border-border bg-highlight-blue/30 text-foreground">
                                    {project.status}
                                </span>
                            )}
                        </div>
                        <p className="text-xl text-text-muted leading-relaxed">
                            {project.description}
                        </p>
                    </div>

                    {/* Technologies Section */}
                    <section className="pb-8 border-b border-border">
                        <h2 className="text-2xl font-bold text-text-primary mb-6">
                            Tecnologías Utilizadas
                        </h2>
                        <div className="flex flex-wrap gap-4">
                            {project.technologies.map((tech) => (
                                <motion.div
                                    key={tech.title}
                                    className="flex items-center gap-3 px-4 py-3 rounded-lg bg-foreground/10 border border-border hover:border-highlight-blue/50 transition-all"
                                    whileHover={{ scale: 1.05, borderColor: "rgb(59, 130, 246)" }}
                                >
                                    <StackIcon name={tech.name} className="w-6 h-6" />
                                    <div>
                                        <p className="text-sm font-semibold text-text-primary">
                                            {tech.title}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* Problem Section */}
                    <section className="pb-8 border-b border-border">
                        <h2 className="text-2xl font-bold text-text-primary mb-4">
                            Problema Resuelto
                        </h2>
                        <div className="p-6 rounded-lg bg-highlight-blue/5 border border-highlight-blue/20">
                            <p className="text-lg text-text-muted italic">
                                "{project.problem}"
                            </p>
                        </div>
                    </section>

                    {/* Features Section */}
                    <section className="pb-8 border-b border-border">
                        <h2 className="text-2xl font-bold text-text-primary mb-6">
                            Características Principales
                        </h2>
                        <ul className="space-y-4">
                            {project.features.map((feature, idx) => (
                                <motion.li
                                    key={idx}
                                    className="flex items-start gap-4"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                                >
                                    <div className="shrink-0 w-6 h-6 rounded-full bg-highlight-blue/20 border border-highlight-blue/50 flex items-center justify-center mt-1">
                                        <span className="w-2 h-2 rounded-full bg-highlight-blue"></span>
                                    </div>
                                    <span className="text-lg text-text-muted leading-relaxed">
                                        {feature}
                                    </span>
                                </motion.li>
                            ))}
                        </ul>
                    </section>

                    {/* Action Buttons */}
                    <motion.div
                        className="flex gap-4 flex-wrap"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <DemoButton
                            href={project.demoUrl}
                            label={t("projectsSection.buttons.demo")}
                        />
                        {project.codeUrl && (
                            <CodeButton
                                href={project.codeUrl}
                                label={t("projectsSection.buttons.code")}
                            />
                        )}
                    </motion.div>

                    {/* Back to All Projects */}
                    <motion.div
                        className="pt-8 text-center border-t border-border"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        <button
                            onClick={() => navigate("/projects")}
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border hover:border-highlight-blue text-text-primary hover:text-highlight-blue font-semibold transition-all duration-300 hover:shadow-glow"
                        >
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 19l-7-7 7-7"
                                />
                            </svg>
                            Ver todos los proyectos
                        </button>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
