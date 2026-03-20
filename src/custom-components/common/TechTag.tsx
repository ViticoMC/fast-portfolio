import type { Technology } from "@/types";
import StackIcon from "tech-stack-icons";


export default function TechTag({ tech }: { tech: Technology }) {
    return (
        <div
            className="group/tech hover:scale-[1.1] flex items-center gap-2 px-3 py-1.5 rounded-lg bg-foreground/10 border border-border  transition-all"
            title={tech.title}
        >
            <StackIcon name={tech.name} className="w-4 h-4" />
            <span className="text-xs font-medium text-text-muted  transition-all">
                {tech.title}
            </span>
        </div>
    )
}
