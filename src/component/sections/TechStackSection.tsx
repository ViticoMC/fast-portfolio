import StackIcon from 'tech-stack-icons';
import LogoLoop from "@/components/LogoLoop";

const frontendLogos = [
    { node: <StackIcon name="reactjs" className="w-15 h-15" />, title: "React", href: "https://react.dev" },
    { node: <StackIcon name="nextjs2" className="w-15 h-15" />, title: "Next.js", href: "https://nextjs.org" },
    { node: <StackIcon name="js" className="w-15 h-15" />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { node: <StackIcon name="tailwindcss" className="w-15 h-15" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <StackIcon name="html5" className="w-15 h-15" />, title: "HTML", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { node: <StackIcon name="css3" className="w-15 h-15" />, title: "CSS", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
];

const backendLogos = [
    { node: <StackIcon name="nodejs" className="w-15 h-15" />, title: "Node.js", href: "https://nodejs.org" },
    { node: <StackIcon name="expressjs" className="w-15 h-15" />, title: "Express", href: "https://expressjs.com" },
    { node: <StackIcon name="java" className="w-15 h-15" />, title: "Java", href: "https://www.java.com" },
];

const dataLogos = [
    { node: <StackIcon name="mongodb" className="w-15 h-15" />, title: "MongoDB", href: "https://www.mongodb.com" },
    { node: <StackIcon name="postgresql" className="w-15 h-15" />, title: "PostgreSQL", href: "https://www.postgresql.org" },
    { node: <StackIcon name="mariadb" className="w-15 h-15" />, title: "MariaDB", href: "https://mariadb.org" },
];

const infraLogos = [
    { node: <StackIcon name="github" className="w-15 h-15" />, title: "GitHub", href: "https://github.com" },
    { node: <StackIcon name="supabase" className="w-15 h-15" />, title: "Supabase", href: "https://supabase.com" },
    { node: <StackIcon name="vercel" className="w-15 h-15" />, title: "Vercel", href: "https://vercel.com" },
];

export function TechStackSection() {
    return (
        <div className="w-full py-12 space-y-12">
            {/* Frontend Section */}
            <div className="space-y-4">
                <h3 className="text-2xl font-bold text-center text-cyan-400">
                    Arquitectura Frontend
                </h3>
                <div style={{ height: '150px', position: 'relative', overflow: 'hidden' }}>
                    <LogoLoop
                        logos={frontendLogos}
                        speed={80}
                        direction="left"
                        logoHeight={60}
                        gap={60}
                        hoverSpeed={0}
                        fadeOut
                    />
                </div>
            </div>

            {/* Backend Section */}
            <div className="space-y-4">
                <h3 className="text-2xl font-bold text-center text-blue-400">
                    Backend & Core
                </h3>
                <div style={{ height: '150px', position: 'relative', overflow: 'hidden' }}>
                    <LogoLoop
                        logos={backendLogos}
                        speed={80}
                        direction="right"
                        logoHeight={60}
                        gap={60}
                        hoverSpeed={0}
                        fadeOut
                    />
                </div>
            </div>

            {/* Data Strategy Section */}
            <div className="space-y-4">
                <h3 className="text-2xl font-bold text-center text-purple-400">
                    Estrategia de Datos
                </h3>
                <div style={{ height: '150px', position: 'relative', overflow: 'hidden' }}>
                    <LogoLoop
                        logos={dataLogos}
                        speed={80}
                        direction="left"
                        logoHeight={60}
                        gap={60}
                        hoverSpeed={0}
                        fadeOut
                    />
                </div>
            </div>

            {/* Infrastructure Section */}
            <div className="space-y-4">
                <h3 className="text-2xl font-bold text-center text-green-400">
                    Infraestructura
                </h3>
                <div style={{ height: '150px', position: 'relative', overflow: 'hidden' }}>
                    <LogoLoop
                        logos={infraLogos}
                        speed={80}
                        direction="right"
                        logoHeight={60}
                        gap={60}
                        hoverSpeed={0}
                        fadeOut
                    />
                </div>
            </div>
        </div>
    );
}