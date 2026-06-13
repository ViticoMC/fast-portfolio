import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { useGetAllWorkExperience } from "@/hooks/useGetAllWorkExperience";
import type { WorkExperience, WorkMode } from "@/types";
import TechTag from "../common/TechTag";

const workModeStyles: Record<WorkMode, { dot: string }> = {
  team: { dot: "bg-copper" },
  solo: { dot: "bg-copper/60" },
  hybrid: { dot: "bg-copper/80" },
};

function WorkCard({ experience, labels }: { experience: WorkExperience; labels: Record<string, string> }) {
  const modeStyle = workModeStyles[experience.workMode];

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="relative pl-8 md:pl-12 pb-12 last:pb-0"
    >
      <div className="absolute left-0 top-2 bottom-0 w-px bg-border-base last:hidden" />
      <div className={`absolute left-[-3.5px] top-2 w-[7px] h-[7px] rounded-full ${modeStyle.dot} ring-2 ring-paper`} />

      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-3 text-xs tracking-[0.15em] uppercase text-fg-dim font-medium">
          <span>{experience.startDate} — {experience.endDate}</span>
          <span className="w-1 h-1 rounded-full bg-border-base" />
          <span>{experience.location}</span>
        </div>

        <div>
          <h3 className="text-2xl md:text-3xl font-serif text-fg-base tracking-tight">
            {experience.role}
          </h3>
          <p className="mt-1 text-sm text-fg-muted">{experience.company}</p>
        </div>

        <p className="text-sm md:text-base text-fg-muted leading-relaxed max-w-3xl">
          {experience.summary}
        </p>

        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech) => (
            <TechTag key={`${experience.id}-${tech.name}`} tech={tech} />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="rounded-xl border border-border-base bg-paper-subtle/30 p-4">
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-semibold text-fg-muted mb-3">
              {labels.responsibilities}
            </h4>
            <ul className="space-y-2">
              {experience.responsibilities.map((item) => (
                <li key={item} className="flex gap-2 text-sm text-fg-muted leading-relaxed">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-copper/40" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-border-base bg-paper-subtle/30 p-4">
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-semibold text-fg-muted mb-3">
              {labels.achievements}
            </h4>
            <ul className="space-y-2">
              {experience.achievements.map((item) => (
                <li key={item} className="flex gap-2 text-sm text-fg-muted leading-relaxed">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-copper/40" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function WorkExpSection() {
  const { t } = useTranslation();
  const { WORK_EXPERIENCES } = useGetAllWorkExperience();

  const labels = {
    responsibilities: t("workExperienceSection.labels.responsibilities"),
    achievements: t("workExperienceSection.labels.achievements"),
  };

  return (
    <section className="w-full px-4 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight text-balance text-fg-base">
            {t("workExperienceSection.title")}
          </h2>
          <p className="mt-4 text-base text-fg-muted leading-relaxed max-w-2xl text-pretty">
            {t("workExperienceSection.description")}
          </p>
          <div className="mt-6 h-px w-16 bg-copper" />
        </div>

        <div className="max-w-4xl">
          {WORK_EXPERIENCES.map((exp) => (
            <WorkCard key={exp.id} experience={exp} labels={labels} />
          ))}
        </div>
      </div>
    </section>
  );
}
