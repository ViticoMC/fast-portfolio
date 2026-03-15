import { motion } from "framer-motion";

interface SearchBarProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
}

/**
 * Componente de búsqueda reutilizable
 * Permite filtrar proyectos por título o descripción
 */
export function SearchBar({ value, onChange, placeholder }: SearchBarProps) {
    const searchPlaceholder = placeholder || "Buscar proyectos...";

    return (
        <motion.div
            className="relative mb-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            <div className="relative">
                <svg
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
                <input
                    type="text"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder={searchPlaceholder}
                    className="w-full pl-12 pr-4 py-3 rounded-lg bg-foreground/5 border border-border hover:border-border-light focus:border-highlight-blue focus:outline-none text-text-primary placeholder-text-muted/50 transition-all duration-300"
                />
                {value && (
                    <motion.button
                        onClick={() => onChange("")}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-primary transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </motion.button>
                )}
            </div>
        </motion.div>
    );
}
