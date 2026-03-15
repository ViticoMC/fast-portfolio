import { motion } from "framer-motion";
import type { TechStackName } from "@/types";
import StackIcon from "tech-stack-icons";

interface TechFilterProps {
    availableTechs: TechStackName[];
    selectedTechs: TechStackName[];
    onTechChange: (tech: TechStackName, isSelected: boolean) => void;
}

/**
 * Componente de filtro por tecnologías
 * Permite seleccionar múltiples tecnologías para filtrar proyectos
 */
export function TechFilter({ availableTechs, selectedTechs, onTechChange }: TechFilterProps) {
    const handleToggle = (tech: TechStackName) => {
        const isSelected = selectedTechs.includes(tech);
        onTechChange(tech, !isSelected);
    };

    return (
        <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            <div className="flex flex-wrap gap-3">
                {availableTechs.map((tech) => {
                    const isSelected = selectedTechs.includes(tech);
                    return (
                        <motion.button
                            key={tech}
                            onClick={() => handleToggle(tech)}
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-300 ${isSelected
                                ? "border-highlight-blue bg-highlight-blue/20 text-highlight-blue"
                                : "border-border hover:border-highlight-blue/50 text-text-muted hover:text-text-primary bg-foreground/5 hover:bg-foreground/10"
                                }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <StackIcon name={tech} className="w-4 h-4" />
                            <span className="text-sm font-medium capitalize">{tech}</span>
                        </motion.button>
                    );
                })}
            </div>
        </motion.div>
    );
}



