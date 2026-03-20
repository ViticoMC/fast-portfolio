import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

interface BackButtonProps {
    label?: string;
    className?: string;
}

/**
 * Componente reutilizable para botón de retroceso
 * Navega hacia atrás o a la página principal
 */
export function BackButton({ label = "Volver", className = "" }: BackButtonProps) {
    const navigate = useNavigate();

    return (
        <motion.button
            onClick={() => navigate("/projects")}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg border border-border hover:border-highlight-blue text-text-primary hover:text-highlight-blue font-semibold transition-all duration-300 hover:shadow-glow ${className}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <svg
                className="w-5 h-5 group-hover:-translate-x-1 transition-all"
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
            {label}
        </motion.button>
    );
}
