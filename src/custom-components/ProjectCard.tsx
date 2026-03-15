import type { Project } from "@/types";
import { motion, type Variants } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import StackIcon from "tech-stack-icons";
import DemoButton from "./buttons/DemoButton";
import CodeButton from "./buttons/CodeButton";
import DetailsButton from "./buttons/DetailsButton";

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
            className="backdrop-blur-xl  group relative rounded-3xl border border-border  bg-background/40 hover:border-border-light transition-all duration-300 hover:shadow-glow  "
            variants={variants}
        >
            {/* Project Image */}
            <div className="relative rounded-t-2xl h-64 md:h-80 overflow-hidden ">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full  h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-foreground/10 via-transparent to-transparent"></div>
            </div>

            {/* Project Content */}
            <div className="p-8 flex flex-col justify-between ">
                {/* Header Content */}
                <div className="mb-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-2  transition-colors">
                        {project.title}
                    </h3>
                    <p className="text-text-muted text-sm md:text-base leading-relaxed line-clamp-4">
                        {project.description}
                    </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-3 mb-8">
                    {project.technologies.map((tech) => (
                        <div
                            key={tech.title}
                            className="group/tech hover:scale-[1.1] flex items-center gap-2 px-3 py-1.5 rounded-lg bg-foreground/10 border border-border hover:border-highlight-blue/50 transition-all"
                            title={tech.title}
                        >
                            <StackIcon name={tech.name} className="w-4 h-4" />
                            <span className="text-xs font-medium text-text-muted  transition-all">
                                {tech.title}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Problem Section */}
                <div className="mb-6 pb-6 border-b border-border">
                    <h4 className="text-xs uppercase tracking-widest font-semibold text-text-muted mb-3">
                        Problema que resolviste
                    </h4>
                    <p className="text-sm text-text-muted/80 italic leading-relaxed">
                        "{project.problem}"
                    </p>
                </div>

                {/* Features Section */}
                <div className="mb-8">
                    <h4 className="text-xs uppercase tracking-widest font-semibold text-text-muted mb-4">
                        Características principales
                    </h4>
                    <ul className="space-y-3">
                        {project.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                                <span className="shrink-0 w-5 h-5 rounded-full bg-highlight-blue/20 border border-highlight-blue/50 flex items-center justify-center mt-0.5">
                                    <span className="w-2 h-2 rounded-full bg-highlight-blue"></span>
                                </span>
                                <span className="text-sm text-text-muted leading-relaxed">
                                    {feature}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                    <DemoButton href={project.demoUrl} label={t('projectsSection.buttons.demo')} />
                    <CodeButton href={project.codeUrl} label={t('projectsSection.buttons.code')} />
                    <DetailsButton onClick={handleDetailsClick} label={t('projectsSection.buttons.details')} />
                </div>
            </div>
        </motion.div>
    );
}
