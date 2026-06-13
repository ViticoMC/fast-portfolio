import { useTranslation } from "react-i18next";

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "es" ? "en" : "es";
    i18n.changeLanguage(newLang);
    localStorage.setItem("language", newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-2 rounded-full text-xs font-medium uppercase tracking-wider text-fg-muted hover:text-fg-base hover:bg-paper-subtle transition-all duration-300"
      aria-label={i18n.language === "es" ? "Switch to English" : "Cambiar a Español"}
    >
      {i18n.language === "es" ? "EN" : "ES"}
    </button>
  );
}
