import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
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
        <div className="min-h-screen flex items-center justify-center pt-24 pb-16 px-4">
            <motion.div
                className="max-w-xl w-full text-center"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="relative mx-auto mb-8 w-48 h-48 flex items-center justify-center">
                    <motion.div
                        className="absolute inset-0 rounded-full bg-highlight-blue/10 border border-highlight-blue/30"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    />
                    <motion.div
                        className="absolute inset-4 rounded-full bg-highlight-blue/5 border border-highlight-blue/20"
                        initial={{ scale: 0.6, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    />
                    <motion.span
                        className="relative text-8xl md:text-9xl font-bold bg-linear-to-br from-highlight-blue to-cyan-500 bg-clip-text text-transparent"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        404
                    </motion.span>
                </div>

                <motion.div
                    className="p-8 md:p-10 rounded-3xl border border-white/10 bg-background/40 backdrop-blur-md shadow-[0_0_40px_rgba(0,0,0,0.35)]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                        {t("notFound.title")}
                    </h1>
                    <p className="text-text-muted text-lg leading-relaxed mb-8">
                        {t("notFound.description")}
                    </p>
                    <motion.button
                        onClick={() => navigate("/")}
                        className="inline-flex items-center gap-2 px-8 py-3 rounded-lg border border-border hover:border-highlight-blue text-text-primary hover:text-highlight-blue font-semibold transition-all duration-300 hover:shadow-glow"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                            />
                        </svg>
                        {t("notFound.backHome")}
                    </motion.button>
                </motion.div>
            </motion.div>
        </div>
    );
}
