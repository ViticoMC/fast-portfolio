"use client";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, Link } from "react-router-dom";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { useThemeStore } from "@/store/themeStore";

const navItems: { path: string; labelKey: "nav.home" | "nav.projects" }[] = [
  { path: "/", labelKey: "nav.home" },
  { path: "/projects", labelKey: "nav.projects" },
];

export function FluidNav() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const theme = useThemeStore((s) => s.theme);
  const toggleTheme = useThemeStore((s) => s.toggleTheme);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const toggleLanguage = () => {
    const next = i18n.language === "es" ? "en" : "es";
    i18n.changeLanguage(next);
    localStorage.setItem("language", next);
  };

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
        <div className="flex items-center gap-1 px-2 py-2 rounded-full bg-paper/80 backdrop-blur-2xl border border-border-base shadow-sm">
          <Link
            to="/"
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              isActive("/")
                ? "bg-copper text-paper"
                : "text-fg-muted hover:text-fg-base hover:bg-paper-subtle"
            }`}
          >
            {t("nav.home")}
          </Link>
          <Link
            to="/projects"
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              isActive("/projects")
                ? "bg-copper text-paper"
                : "text-fg-muted hover:text-fg-base hover:bg-paper-subtle"
            }`}
          >
            {t("nav.projects")}
          </Link>

          <div className="w-px h-5 bg-border-base mx-1" />

          <button
            onClick={toggleLanguage}
            className="px-3 py-2 rounded-full text-xs font-medium uppercase tracking-wider text-fg-muted hover:text-fg-base hover:bg-paper-subtle transition-all duration-300"
            aria-label={i18n.language === "es" ? "Switch to English" : "Cambiar a Español"}
          >
            {i18n.language === "es" ? "EN" : "ES"}
          </button>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-fg-muted hover:text-fg-base hover:bg-paper-subtle transition-all duration-300"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
              </svg>
            )}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative w-8 h-8 flex items-center justify-center rounded-full text-fg-muted hover:text-fg-base hover:bg-paper-subtle transition-all duration-300"
            aria-label={isOpen ? (i18n.language === "es" ? "Cerrar" : "Close") : (i18n.language === "es" ? "Menú" : "Menu")}
          >
            <span className="sr-only">{isOpen ? "Close" : "Menu"}</span>
            <div className="w-4 h-3 relative flex flex-col justify-between">
              <motion.span
                className="block w-full h-px bg-current rounded-full origin-center"
                animate={isOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="block w-full h-px bg-current rounded-full origin-center"
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.15 }}
              />
              <motion.span
                className="block w-full h-px bg-current rounded-full origin-center"
                animate={isOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
              />
            </div>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(48px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
            className="fixed inset-0 z-40 flex items-center justify-center bg-paper/70"
          >
            <nav className="flex flex-col items-center gap-8">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.path}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
                  transition={{
                    duration: 0.4,
                    delay: shouldReduceMotion ? 0 : 0.05 * i,
                    ease: [0.32, 0.72, 0, 1],
                  }}
                >
                  <Link
                    to={item.path}
                    className={`text-4xl md:text-5xl font-serif tracking-tight transition-colors duration-300 ${
                      isActive(item.path)
                        ? "text-copper"
                        : "text-fg-base hover:text-copper"
                    }`}
                  >
                    {t(item.labelKey)}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
                transition={{
                  duration: 0.4,
                  delay: shouldReduceMotion ? 0 : 0.15,
                  ease: [0.32, 0.72, 0, 1],
                }}
                className="mt-8 flex gap-4"
              >
                <a
                  href="https://github.com/viticomc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full border border-border-base text-fg-muted hover:text-fg-base hover:border-copper transition-all duration-300 text-sm font-medium"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/victor-mc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-copper text-paper text-sm font-medium hover:opacity-90 transition-all duration-300"
                >
                  LinkedIn
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
