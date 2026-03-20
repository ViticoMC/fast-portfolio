import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import StackIcon from "tech-stack-icons";
import DemoButton from "@/custom-components/buttons/DemoButton";
import CodeButton from "@/custom-components/buttons/CodeButton";
import type { Project } from "@/types";
import { useGetAllprojects } from "@/hooks/useGetAllProjects";
import { BackButton } from "@/custom-components/buttons/BackButton";
import Stack from "@/components/Stack";
import useScrollTop from "@/hooks/useScrollTop";

/**
 * Página de detalle de proyecto
 * Muestra toda la información detallada del proyecto seleccionado
 */
export function ProjectDetails() {
    const { projectId } = useParams<{ projectId: string }>();
    const navigate = useNavigate();
    const { t } = useTranslation();
    useScrollTop();

    const { PROJECTS } = useGetAllprojects()

    // Buscar el proyecto por ID
    const project: Project | undefined = PROJECTS.find(
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
                        {t("projectDetails.notFound")}
                    </h1>
                    <p className="text-text-muted mb-8">
                        {t("projectDetails.projectNotFoundDesc")}
                    </p>
                    <BackButton label={t("projectDetails.backToProjects")} />
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
                    <BackButton label={t("projectDetails.backToProjects")} />
                </motion.div>

                {/* Image Hero */}
                <motion.div
                    className="relative rounded-3xl overflow-hidden mb-12 h-96 md:h-125"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-foreground/20 via-transparent to-transparent"></div>
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
                        {/* <p className="text-lg text-text-muted leading-relaxed">
                            {project.description}
                        </p> */}
                    </div>

                    {/* Long Description Section */}
                    <section className="pb-8 border-b border-border">
                        <h2 className="text-2xl font-bold text-text-primary mb-4">
                            {t("projectDetails.fullDescription")}
                        </h2>
                        <p className="text-lg text-text-muted leading-relaxed">
                            {project.longDescription}
                        </p>
                    </section>

                    {/* Screenshots Section */}
                    {project.screenshots && project.screenshots.length > 0 && (
                        <section className="pb-8 border-b border-border">
                            <h2 className="text-2xl font-bold text-text-primary mb-6">
                                {t("projectDetails.gallery")}
                            </h2>
                            <div className="mt-4 grid grid-cols-1 gap-4  min-h-80">
                                <Stack
                                    cards={project.screenshots.map((screenshot, idx) => (
                                        <div
                                            key={`${screenshot}-${idx}`}
                                            // href={screenshot.image}
                                            // target="_blank"
                                            // rel="noopener noreferrer"
                                            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/20"
                                        >
                                            <img
                                                src={screenshot}
                                                alt="Foto de projecto"
                                                className="h-80 w-full object-cover  transition-transform duration-500 group-hover:scale-105"
                                                loading="lazy"
                                            />
                                        </div>
                                    ))}
                                />

                            </div>
                        </section>
                    )}

                    {/* Technologies Section */}
                    <section className="pb-8 border-b border-border">
                        <h2 className="text-2xl font-bold text-text-primary mb-6">
                            {t("projectDetails.technologiesUsed")}
                        </h2>
                        <div className="flex flex-wrap gap-4">
                            {project.technologies.map((tech, idx) => (
                                <motion.div
                                    key={tech.title}
                                    className="flex items-center gap-3 px-4 py-3 rounded-lg bg-foreground/10 border border-border hover:border-highlight-blue/50 transition-all"
                                    whileHover={{ scale: 1.05 }}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: idx * 0.05 }}
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
                            {t("projectDetails.problemSolved")}
                        </h2>
                        <div className="p-6 rounded-lg bg-highlight-blue/5 border border-highlight-blue/20">
                            <p className="text-lg text-text-muted italic">
                                "{project.problem}"
                            </p>
                        </div>
                    </section>

                    {/* Architecture Section */}
                    {project.architecture && project.architecture.length > 0 && (
                        <section className="pb-8 border-b border-border">
                            <h2 className="text-2xl font-bold text-text-primary mb-6">
                                {t("projectDetails.projectArchitecture")}
                            </h2>
                            <ul className="space-y-3">
                                {project.architecture.map((arch, idx) => (
                                    <motion.li
                                        key={idx}
                                        className="flex items-start gap-4"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3, delay: idx * 0.05 }}
                                    >
                                        <div className="shrink-0 w-6 h-6 rounded-lg bg-cyan-500/20 border border-cyan-500/50 flex items-center justify-center mt-1">
                                            <span className="text-xs font-bold text-cyan-400">→</span>
                                        </div>
                                        <span className="text-base text-text-muted leading-relaxed">
                                            {arch}
                                        </span>
                                    </motion.li>
                                ))}
                            </ul>
                        </section>
                    )}

                    {/* Features Section */}
                    <section className="pb-8 border-b border-border">
                        <h2 className="text-2xl font-bold text-text-primary mb-6">
                            {t("projectDetails.mainFeatures")}
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
                                    <span className="text-base text-text-muted leading-relaxed">
                                        {feature}
                                    </span>
                                </motion.li>
                            ))}
                        </ul>
                    </section>

                    {/* Technical Highlights Section */}
                    {project.technicalHighlights && project.technicalHighlights.length > 0 && (
                        <section className="pb-8 border-b border-border">
                            <h2 className="text-2xl font-bold text-text-primary mb-6">
                                {t("projectDetails.technicalHighlights")}
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {project.technicalHighlights.map((highlight, idx) => (
                                    <motion.div
                                        key={idx}
                                        className="p-4 rounded-lg bg-foreground/5 border border-highlight-blue/30 hover:border-highlight-blue/60 transition-all"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3, delay: idx * 0.05 }}
                                        whileHover={{ scale: 1.02 }}
                                    >
                                        <p className="text-sm text-text-muted leading-relaxed">
                                            ⚡ {highlight}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Challenges Section */}
                    {project.challenges && project.challenges.length > 0 && (
                        <section className="pb-8 border-b border-border">
                            <h2 className="text-2xl font-bold text-text-primary mb-6">
                                {t("projectDetails.technicalChallenges")}
                            </h2>
                            <ul className="space-y-3">
                                {project.challenges.map((challenge, idx) => (
                                    <motion.li
                                        key={idx}
                                        className="flex items-start gap-4"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3, delay: idx * 0.05 }}
                                    >
                                        <div className="shrink-0 w-6 h-6 rounded-lg bg-orange-500/20 border border-orange-500/50 flex items-center justify-center mt-1">
                                            <span className="text-xs font-bold text-orange-400">!</span>
                                        </div>
                                        <span className="text-base text-text-muted leading-relaxed">
                                            {challenge}
                                        </span>
                                    </motion.li>
                                ))}
                            </ul>
                        </section>
                    )}

                    {/* Learnings Section */}
                    {project.learnings && project.learnings.length > 0 && (
                        <section className="pb-8 border-b border-border">
                            <h2 className="text-2xl font-bold text-text-primary mb-6">
                                {t("projectDetails.learnings")}
                            </h2>
                            <ul className="space-y-3">
                                {project.learnings.map((learning, idx) => (
                                    <motion.li
                                        key={idx}
                                        className="flex items-start gap-4"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3, delay: idx * 0.05 }}
                                    >
                                        <div className="shrink-0 w-6 h-6 rounded-lg bg-green-500/20 border border-green-500/50 flex items-center justify-center mt-1">
                                            <span className="text-xs font-bold text-green-400">✓</span>
                                        </div>
                                        <span className="text-base text-text-muted leading-relaxed">
                                            {learning}
                                        </span>
                                    </motion.li>
                                ))}
                            </ul>
                        </section>
                    )}

                    {/* Future Improvements Section */}
                    {project.futureImprovements && project.futureImprovements.length > 0 && (
                        <section className="pb-8 border-b border-border">
                            <h2 className="text-2xl font-bold text-text-primary mb-6">
                                {t("projectDetails.futureImprovements")}
                            </h2>
                            <ul className="space-y-3">
                                {project.futureImprovements.map((improvement, idx) => (
                                    <motion.li
                                        key={idx}
                                        className="flex items-start gap-4"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3, delay: idx * 0.05 }}
                                    >
                                        <div className="shrink-0 w-6 h-6 rounded-lg bg-purple-500/20 border border-purple-500/50 flex items-center justify-center mt-1">
                                            <span className="text-xs font-bold text-purple-400">★</span>
                                        </div>
                                        <span className="text-base text-text-muted leading-relaxed">
                                            {improvement}
                                        </span>
                                    </motion.li>
                                ))}
                            </ul>
                        </section>
                    )}

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
                            {t("projectDetails.backToAllProjects")}
                        </button>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
