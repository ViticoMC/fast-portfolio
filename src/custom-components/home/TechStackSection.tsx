import StackIcon from "tech-stack-icons";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

type TechItem = {
    name: string;
    title: string;
    href: string;
};

type TechItemWithAnimation = TechItem & {
    randomX: number;
    randomY: number;
    randomRotate: number;
    randomDelay: number;
};

type TechCategory = {
    key: "frontend" | "backend" | "database" | "tools";
    color: string;
    items: TechItemWithAnimation[];
};

const generateRandomValues = (): Pick<TechItemWithAnimation, 'randomX' | 'randomY' | 'randomRotate' | 'randomDelay'> => ({
    randomX: Math.random() * 200 - 100,
    randomY: Math.random() * 200 - 100,
    randomRotate: Math.random() * 90 - 45,
    randomDelay: Math.random() * 0.4,
});

const techCategories: TechCategory[] = [
    {
        key: "frontend",
        color: "from-blue-500 to-cyan-500",
        items: [
            { name: "react", title: "React", href: "https://react.dev", ...generateRandomValues() },
            { name: "nextjs2", title: "Next.js", href: "https://nextjs.org", ...generateRandomValues() },
            { name: "astro", title: "Astro", href: "https://astro.build", ...generateRandomValues() },
            { name: "typescript", title: "TypeScript", href: "https://www.typescriptlang.org", ...generateRandomValues() },
            { name: "js", title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", ...generateRandomValues() },
            { name: "tailwindcss", title: "Tailwind", href: "https://tailwindcss.com", ...generateRandomValues() },
            { name: "html5", title: "HTML5", href: "https://developer.mozilla.org/en-US/docs/Web/HTML", ...generateRandomValues() },
            { name: "css3", title: "CSS3", href: "https://developer.mozilla.org/en-US/docs/Web/CSS", ...generateRandomValues() },
            { name: "vitejs", title: "Vite", href: "https://vite.dev", ...generateRandomValues() },
        ]
    },
    {
        key: "backend",
        color: "from-green-500 to-emerald-500",
        items: [
            { name: "nodejs", title: "Node.js", href: "https://nodejs.org", ...generateRandomValues() },
            { name: "expressjs", title: "Express", href: "https://expressjs.com", ...generateRandomValues() },
            { name: "python", title: "Python", href: "https://www.python.org", ...generateRandomValues() },
            { name: "java", title: "Java", href: "https://www.java.com", ...generateRandomValues() },
            { name: "tauri", title: "Tauri", href: "https://tauri.app", ...generateRandomValues() },
            { name: "prisma", title: "Prisma", href: "https://www.prisma.io", ...generateRandomValues() },
        ]
    },
    {
        key: "database",
        color: "from-purple-500 to-pink-500",
        items: [
            { name: "mongodb", title: "MongoDB", href: "https://www.mongodb.com", ...generateRandomValues() },
            { name: "postgresql", title: "PostgreSQL", href: "https://www.postgresql.org", ...generateRandomValues() },
            { name: "mysql", title: "MySQL", href: "https://www.mysql.com", ...generateRandomValues() },
        ]
    },
    {
        key: "tools",
        color: "from-orange-500 to-red-500",
        items: [
            { name: "github", title: "GitHub", href: "https://github.com", ...generateRandomValues() },
            { name: "git", title: "Git", href: "https://git-scm.com", ...generateRandomValues() },
            { name: "vercel", title: "Vercel", href: "https://vercel.com", ...generateRandomValues() },
            { name: "zustand", title: "Zustand", href: "https://zustand-demo.pmnd.rs", ...generateRandomValues() },
            { name: "tanstack", title: "TanStack Query", href: "https://tanstack.com/query", ...generateRandomValues() },
            { name: "supabase", title: "Supabase", href: "https://supabase.com", ...generateRandomValues() },
        ]
    },
];

export function TechStackSection() {
    const { t } = useTranslation();

    return (
        <section className="w-full py-16 px-4">
            <div className="max-w-6xl mx-auto rounded-3xl border border-white/10 p-6 md:p-10 shadow-[0_0_40px_rgba(0,0,0,0.35)] backdrop-blur-md">
                <div className="text-center mb-12">
                    <span className="inline-block px-4 py-1 rounded-full text-xs tracking-widest uppercase border border-border bg-highlight-blue/30 text-foreground">
                        {t("techStackSection.badge")}
                    </span>
                    <h3 className="mt-4 text-2xl md:text-4xl font-bold text-text-primary">
                        {t("techStackSection.title")}
                    </h3>
                </div>

                <div className="space-y-10">
                    {techCategories.map((category) => (
                        <div key={category.key}>
                            <div className="flex items-center gap-3 mb-5">
                                <div className={`h-1 w-8 rounded-full bg-linear-to-r ${category.color}`}></div>
                                <h4 className="text-lg md:text-xl font-semibold text-text-primary uppercase tracking-wide">
                                    {t(`techStackSection.categories.${category.key}`)}
                                </h4>
                            </div>
                            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 md:gap-4">
                                {category.items.map((tech) => (
                                    <motion.a
                                        key={tech.title}
                                        href={tech.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        initial={{
                                            opacity: 0,
                                            scale: 0,
                                            x: tech.randomX,
                                            y: tech.randomY,
                                            rotate: tech.randomRotate
                                        }}
                                        whileInView={{
                                            opacity: 1,
                                            scale: 1,
                                            x: 0,
                                            y: 0,
                                            rotate: 0
                                        }}
                                        viewport={{ once: true }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 260,
                                            damping: 20,
                                            delay: tech.randomDelay
                                        }}
                                        whileHover={{
                                            scale: 1.1,
                                            rotate: [0, -5, 5, 0],
                                            transition: { duration: 0.2 }
                                        }}
                                        className="group h-24 text-foreground rounded-xl hover:text-background border border-border bg-foreground/20 hover:bg-foreground/40 hover:border-border-light transition-all duration-300 flex flex-col items-center justify-center gap-2 hover:shadow-glow"
                                        title={tech.title}
                                    >
                                        <StackIcon
                                            name={tech.name}
                                            className="w-7 h-7 md:w-8 md:h-8 transition-transform duration-300 group-hover:scale-110"
                                        />
                                        <span className="text-[10px] md:text-xs font-medium text-text-muted text-center leading-tight px-1">
                                            {tech.title}
                                        </span>
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}