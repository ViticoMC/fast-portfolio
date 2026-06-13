import type { Technology } from "@/types";
import StackIcon from "tech-stack-icons";

export default function TechTag({ tech }: { tech: Technology }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-border-base bg-paper-subtle/50 text-fg-muted text-[10px] font-medium uppercase tracking-wider">
      <StackIcon name={tech.name} className="w-3.5 h-3.5" />
      {tech.title}
    </span>
  );
}
