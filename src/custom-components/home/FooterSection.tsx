import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export function FooterSection() {
    const { t } = useTranslation();

    return (
        <section className="w-full px-4 py-10 md:py-14">
            <motion.footer
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45 }}
                className="mx-auto max-w-7xl rounded-3xl border border-white/10 bg-black/20 p-6 md:p-8 shadow-[0_0_30px_rgba(0,0,0,0.25)] backdrop-blur-md"
            >
                <div className="flex flex-col gap-4 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-text-primary">
                            VicotrMC Portfolio
                        </p>
                        <p className="mt-2 text-sm text-text-muted">{t("footer")}</p>
                    </div>
                </div>
            </motion.footer>
        </section>
    );
}