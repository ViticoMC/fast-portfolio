import { useTranslation } from 'react-i18next';
import { Globe } from "lucide-react"

export function LanguageSwitcher() {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === 'es' ? 'en' : 'es';
        i18n.changeLanguage(newLang);
        localStorage.setItem('language', newLang);
    };

    return (
        <button
            onClick={toggleLanguage}
            className="flex justify-center items-center gap-2 p-2 rounded-lg bg-muted/40 backdrop-blur-sm border border-muted-foreground/40 hover:border-muted-foreground/80 transition-all duration-300 text-white bg-black hover:bg-muted/60"
            aria-label="Toggle language"
            title={i18n.language === 'es' ? 'English' : 'Español'}
        >
            <Globe className="w-4 h-4" />
            {
                // Mostrar el idioma actual en el botón
                i18n.language === 'es' ? 'ES' : 'EN'
            }
        </button>
    );
}
