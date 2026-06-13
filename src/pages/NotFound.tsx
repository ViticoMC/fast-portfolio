import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import useScrollTop from "@/hooks/useScrollTop";
import { SEO_PAGES } from "@/config/seo";

export default function NotFound() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  useScrollTop();

  useEffect(() => {
    const lang = i18n.language as keyof typeof SEO_PAGES.NOT_FOUND.title;
    document.title = SEO_PAGES.NOT_FOUND.title[lang] || SEO_PAGES.NOT_FOUND.title.en;
  }, [i18n.language]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-20 pb-16">
      <motion.div
        className="max-w-lg w-full text-center"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="font-serif text-8xl md:text-9xl tracking-tight text-fg-base mb-4">
          404
        </h1>
        <p className="text-base text-fg-muted leading-relaxed mb-8">
          {t("notFound.description")}
        </p>
        <button
          onClick={() => navigate("/")}
          className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-copper text-paper text-sm font-medium transition-all duration-300 hover:opacity-90 active:scale-[0.97]"
        >
          <svg
            className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          {t("notFound.backHome")}
        </button>
      </motion.div>
    </div>
  );
}
