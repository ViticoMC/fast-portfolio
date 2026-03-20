import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useGetAllWorkExperience } from "@/hooks/useGetAllWorkExperience";
import type { WorkExperience, WorkMode } from "@/types";
import DemoButton from "@/custom-components/buttons/DemoButton";
import TechTag from "../common/TechTag";
import Stack from "@/components/Stack";

const workModeStyles: Record<
    WorkMode,
    {
        badgeClassName: string;
        dotClassName: string;
    }
> = {
    team: {
        badgeClassName: "border-cyan-400/30 bg-cyan-500/10 text-cyan-200",
        dotClassName: "bg-cyan-400",
    },
    solo: {
        badgeClassName: "border-amber-400/30 bg-amber-500/10 text-amber-200",
        dotClassName: "bg-amber-400",
    },
    hybrid: {
        badgeClassName: "border-violet-400/30 bg-violet-500/10 text-violet-200",
        dotClassName: "bg-violet-400",
    },
};

function WorkExperienceCard({
    experience,
    modeLabel,
    modeValue,
    responsibilitiesLabel,
    achievementsLabel,
    demoLabel,
    galleryLabel,
}: {
    experience: WorkExperience;
    modeLabel: string;
    modeValue: string;
    responsibilitiesLabel: string;
    achievementsLabel: string;
    demoLabel: string;
    galleryLabel: string;
}) {
    const modeStyle = workModeStyles[experience.workMode];
    const galleryImages = experience.workImages ?? [];

    return (
        <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45 }}
            className="relative overflow-hidden rounded-3xl border border-white/10  p-6 md:p-8 shadow-[0_0_40px_rgba(0,0,0,0.25)] backdrop-blur-md"
        >
            <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-highlight-blue/60 to-transparent" />

            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-3xl space-y-4">
                    <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.24em] text-text-muted">
                        <span className="inline-flex items-center gap-2">
                            <span className={`h-2 w-2 rounded-full ${modeStyle.dotClassName}`} />
                            {experience.startDate} - {experience.endDate}
                        </span>
                        <span>{experience.location}</span>
                    </div>

                    <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-text-primary">
                            {experience.role}
                        </h3>
                        <p className="mt-2 text-sm md:text-base text-text-muted">
                            {experience.company}
                        </p>
                    </div>

                    <p className=" text-sm md:text-base leading-relaxed text-text-muted">
                        {experience.summary}
                    </p>
                </div>

                <div className="flex flex-wrap gap-3 lg:max-w-xs lg:justify-end">
                    <span
                        className={`inline-flex items-center rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] ${modeStyle.badgeClassName}`}
                    >
                        {modeLabel}: {modeValue}
                    </span>
                    {experience.demoUrl && (
                        <DemoButton href={experience.demoUrl} label={demoLabel} />
                    )}
                </div>
            </div>

            <div className="mt-8 flex flex-col gap-4">
                <div className="grid gap-6 md:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                        <h4 className="text-sm font-semibold uppercase tracking-[0.22em] text-text-primary">
                            {responsibilitiesLabel}
                        </h4>
                        <ul className="mt-4 space-y-3 text-sm leading-relaxed text-text-muted">
                            {experience.responsibilities.map((item) => (
                                <li key={item} className="flex gap-3">
                                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                        <h4 className="text-sm font-semibold uppercase tracking-[0.22em] text-text-primary">
                            {achievementsLabel}
                        </h4>
                        <ul className="mt-4 space-y-3 text-sm leading-relaxed text-text-muted">
                            {experience.achievements.map((item) => (
                                <li key={item} className="flex gap-3">
                                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-linear-to-br from-white/8 to-white/2 p-5">
                    <h4 className="text-sm font-semibold uppercase tracking-[0.22em] text-text-primary">
                        Stack
                    </h4>
                    <div className="mt-4 flex flex-wrap gap-3">
                        {experience.technologies.map((tech) => (
                            <TechTag key={`${experience.id}-${tech.name}`} tech={tech} />
                        ))}
                    </div>
                </div>

                {galleryImages.length > 0 && (
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 ">
                        <h4 className="text-sm font-semibold uppercase tracking-[0.22em] text-text-primary">
                            {galleryLabel}
                        </h4>
                        <div className="mt-4 grid grid-cols-1 gap-4  min-h-80">
                            <Stack cards={galleryImages.map((image, index) => (
                                <div
                                    key={`${experience.id}-${image}-${index}`}
                                    // href={image}
                                    // target="_blank"
                                    // rel="noopener noreferrer"
                                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/20"
                                >
                                    <img
                                        src={image}
                                        alt={`${experience.company} ${galleryLabel} ${index + 1}`}
                                        className="h-80 w-full object-cover  transition-transform duration-500 group-hover:scale-105"
                                        loading="lazy"
                                    />
                                </div>
                            ))}
                                pauseOnHover={true}
                            />
                        </div>
                    </div>
                )}
            </div>
        </motion.article>
    );
}

export function WorkExpSection() {
    const { t } = useTranslation();
    const { WORK_EXPERIENCES } = useGetAllWorkExperience();

    return (
        <section className="w-full md:px-4 py-16">
            <div className="mx-auto max-w-7xl rounded-3xl border border-white/10 p-4 md:p-8 shadow-[0_0_40px_rgba(0,0,0,0.35)] backdrop-blur-md">
                <motion.div
                    className="mb-12 text-center"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="inline-block rounded-full border border-border bg-highlight-blue/30 px-4 py-1 text-xs uppercase tracking-widest text-foreground">
                        {t("workExperienceSection.badge")}
                    </span>
                    <h2 className="mt-4 text-4xl font-bold text-text-primary md:text-5xl lg:text-6xl">
                        {t("workExperienceSection.title")}
                    </h2>
                    <p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-text-muted md:text-base">
                        {t("workExperienceSection.description")}
                    </p>
                    <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-linear-to-r from-highlight-blue to-cyan-500" />
                </motion.div>

                <div className="space-y-6">
                    {WORK_EXPERIENCES.map((experience) => (
                        <WorkExperienceCard
                            key={experience.id}
                            experience={experience}
                            modeLabel={t("workExperienceSection.labels.mode")}
                            modeValue={t(`workExperienceSection.modes.${experience.workMode}`)}
                            responsibilitiesLabel={t("workExperienceSection.labels.responsibilities")}
                            achievementsLabel={t("workExperienceSection.labels.achievements")}
                            demoLabel={t("projectsSection.buttons.demo")}
                            galleryLabel={t("workExperienceSection.labels.gallery")}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
