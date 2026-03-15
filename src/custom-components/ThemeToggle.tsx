import { useTheme } from '@/hooks/useTheme';
import { MoonIcon, SunDim } from "lucide-react"

export function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-muted/40 backdrop-blur-sm border border-muted-foreground/40 hover:border-muted-foreground/80 transition-all duration-300 text-white bg-black hover:bg-muted/60"
            aria-label="Toggle theme"
        >
            {theme === 'dark' ? (
                <SunDim className="w-5 h-5" />
            ) : (
                <MoonIcon className="w-5 h-5" />
            )}
        </button>
    );
}
