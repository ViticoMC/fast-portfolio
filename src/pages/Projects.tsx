import { useState, useEffect } from "react";
import { motion, type Variants } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { BackButton, SearchBar, TechFilter } from "@/custom-components/common";
import type { TechStackName } from "@/types";
import { extractUniqueTechs } from "@/utils/extractUniqueTech";
import { ProjectCard } from "@/custom-components/ProjectCard";
import { useGetAllprojects } from "@/hooks/useGetAllProjects";

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
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

/**
 * Página de proyectos con búsqueda y filtrado por tecnologías
 * Muestra todos los proyectos con opciones de filtrado
 */
export function Projects() {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedTechs, setSelectedTechs] = useState<TechStackName[]>([]);

    const { PROJECTS } = useGetAllprojects()


    // Extraer tecnologías únicas disponibles
    const availableTechs = extractUniqueTechs(PROJECTS);

    // Filtrar proyectos basado en búsqueda y tecnologías
    const filteredProjects = PROJECTS.filter((project) => {
        // Filtro de búsqueda (título o descripción)
        const matchesSearch =
            project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.description.toLowerCase().includes(searchQuery.toLowerCase());

        // Filtro de tecnologías (si hay seleccionadas, debe tener al menos una)
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

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    }, []);

    return (
        <div className="min-h-screen pt-24 pb-16 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header con botón de retroceso */}
                <motion.div
                    className="mb-12 flex items-center justify-between"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-2">
                            Todos los Proyectos
                        </h1>
                        <p className="text-text-muted text-lg">
                            Explora {filteredProjects.length} proyecto{filteredProjects.length !== 1 ? "s" : ""}
                        </p>
                    </div>
                    <BackButton label="Volver" />
                </motion.div>

                {/* Buscador */}
                <SearchBar
                    value={searchQuery}
                    onChange={setSearchQuery}
                    placeholder="Buscar por nombre o descripción..."
                />

                {/* Filtro de tecnologías */}
                <div className="mb-12">
                    <h3 className="text-sm uppercase tracking-widest font-semibold text-text-muted mb-4">
                        Filtrar por tecnología
                    </h3>
                    <TechFilter
                        availableTechs={availableTechs}
                        selectedTechs={selectedTechs}
                        onTechChange={handleTechChange}
                    />
                </div>

                {/* Grid de proyectos */}
                {filteredProjects.length > 0 ? (
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2  gap-8"
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
                                    variants={{
                                        hidden: { opacity: 0 },
                                        visible: { opacity: 1 },
                                    }}
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                ) : (
                    <motion.div
                        className="text-center py-16"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <svg
                            className="w-16 h-16 text-text-muted mx-auto mb-4 opacity-50"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        <p className="text-text-muted text-lg">
                            No se encontraron proyectos con los filtros seleccionados
                        </p>
                        <button
                            onClick={() => {
                                setSearchQuery("");
                                setSelectedTechs([]);
                            }}
                            className="mt-4 px-6 py-2 rounded-lg border border-border hover:border-highlight-blue text-text-muted hover:text-highlight-blue transition-all duration-300"
                        >
                            Limpiar filtros
                        </button>
                    </motion.div>
                )}
            </div>
        </div>
    );
}
