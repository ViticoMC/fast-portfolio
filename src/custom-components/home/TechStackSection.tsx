import StackIcon from "tech-stack-icons";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

type CatKey = "frontend" | "backend" | "database" | "tools";

const categories: { key: CatKey; items: string[] }[] = [
  {
    key: "frontend",
    items: [
      "react", "nextjs2", "typescript", "js",
      "tailwindcss", "html5", "css3", "vitejs",
    ],
  },
  {
    key: "backend",
    items: ["nodejs", "expressjs", "python", "prisma"],
  },
  {
    key: "database",
    items: ["mongodb", "postgresql", "supabase"],
  },
  {
    key: "tools",
    items: ["github", "git", "vercel", "zustand", "tanstack"],
  },
];

const gridLayouts = [
  "lg:col-span-7 lg:row-span-2",
  "lg:col-span-5 lg:row-span-1",
  "lg:col-span-5 lg:row-span-1",
  "lg:col-span-12 lg:row-span-1",
];

export function TechStackSection() {
  const { t } = useTranslation();
  const catLabels = t("techStackSection.categories", { returnObjects: true }) as Record<CatKey, string>;

  return (
    <section className="w-full px-4 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight text-balance text-fg-base">
            {t("techStackSection.title")}
          </h2>
          <div className="mt-4 h-px w-16 bg-copper" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 auto-rows-auto">
          {categories.map((cat, catIdx) => (
            <motion.div
              key={cat.key}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: catIdx * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`${gridLayouts[catIdx]} rounded-2xl border border-border-base bg-paper-elevated/50 p-6 md:p-8`}
            >
              <h3 className="text-xs uppercase tracking-[0.2em] font-medium text-fg-muted mb-5">
                {catLabels[cat.key]}
              </h3>
              <div className="flex flex-wrap gap-3">
                {cat.items.map((tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: catIdx * 0.1 + i * 0.03,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border-base bg-paper-subtle/50 text-fg-muted hover:text-copper hover:border-copper/30 transition-all duration-300 cursor-default text-sm"
                  >
                    <StackIcon name={tech} className="w-4 h-4 shrink-0" />
                    <span className="font-medium capitalize">{tech}</span>
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
