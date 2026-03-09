import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { en } from "@/language/locales/en";
import { es } from "@/language/locales/es";

const resources = {
  en: {
    translation: en,
  },
  es: {
    translation: es,
  },
};

const language = localStorage.getItem("language") || "es";

i18next.use(initReactI18next).init({
  resources,
  lng: language,
  fallbackLng: "es",
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
