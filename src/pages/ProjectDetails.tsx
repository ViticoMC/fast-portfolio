import { useParams, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import StackIcon from "tech-stack-icons";
import DemoButton from "@/custom-components/buttons/DemoButton";
import CodeButton from "@/custom-components/buttons/CodeButton";
import type { Project } from "@/types";
import { useGetAllprojects } from "@/hooks/useGetAllProjects";
import { BackButton } from "@/custom-components/buttons/BackButton";
import Stack from "@/components/Stack";
import useScrollTop from "@/hooks/useScrollTop";

export function ProjectDetails() {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const { t } = useTranslation();
  useScrollTop();

  const { PROJECTS } = useGetAllprojects();
  const project: Project | undefined = PROJECTS.find(
    (p) => p.id === parseInt(projectId || "0")
  );

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-28 px-4">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-serif text-4xl text-fg-base mb-4">
            {t("projectDetails.notFound")}
          </h1>
          <p className="text-fg-muted mb-8">{t("projectDetails.projectNotFoundDesc")}</p>
          <BackButton label={t("projectDetails.backToProjects")} />
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-28 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <BackButton label={t("projectDetails.backToProjects")} />
        </motion.div>

        <motion.div
          className="relative rounded-2xl overflow-hidden mb-12 h-80 md:h-112"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-paper/30 via-transparent to-transparent" />
        </motion.div>

        <motion.div
          className="space-y-12"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div>
            <div className="flex items-center gap-4 mb-4">
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-tight text-fg-base">
                {project.title}
              </h1>
              {project.status && (
                <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-widest border border-border-base text-fg-muted font-medium">
                  {project.status}
                </span>
              )}
            </div>
          </div>

          <section>
            <h2 className="font-serif text-2xl text-fg-base mb-4">
              {t("projectDetails.fullDescription")}
            </h2>
            <p className="text-base text-fg-muted leading-relaxed">
              {project.longDescription}
            </p>
          </section>

          {project.screenshots && project.screenshots.length > 0 && (
            <section>
              <h2 className="font-serif text-2xl text-fg-base mb-6">
                {t("projectDetails.gallery")}
              </h2>
              <div className="min-h-72">
                <Stack
                  cards={project.screenshots.map((screenshot, idx) => (
                    <div
                      key={`${screenshot}-${idx}`}
                      className="group relative overflow-hidden rounded-xl border border-border-base bg-paper-subtle/30"
                    >
                      <img
                        src={screenshot}
                        alt={`${project.title} screenshot ${idx + 1}`}
                        className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  ))}
                />
              </div>
            </section>
          )}

          <section>
            <h2 className="font-serif text-2xl text-fg-base mb-6">
              {t("projectDetails.technologiesUsed")}
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, idx) => (
                <motion.div
                  key={tech.title}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border-base bg-paper-subtle/30"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.04 }}
                >
                  <StackIcon name={tech.name} className="w-5 h-5" />
                  <span className="text-sm font-medium text-fg-muted">{tech.title}</span>
                </motion.div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-fg-base mb-4">
              {t("projectDetails.problemSolved")}
            </h2>
            <div className="p-5 rounded-xl border border-border-base bg-paper-subtle/30">
              <p className="text-base text-fg-muted italic leading-relaxed">
                &ldquo;{project.problem}&rdquo;
              </p>
            </div>
          </section>

          {project.architecture && project.architecture.length > 0 && (
            <section>
              <h2 className="font-serif text-2xl text-fg-base mb-6">
                {t("projectDetails.projectArchitecture")}
              </h2>
              <ul className="space-y-3">
                {project.architecture.map((arch, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-base text-fg-muted leading-relaxed">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-copper/40" />
                    {arch}
                  </li>
                ))}
              </ul>
            </section>
          )}

          <section>
            <h2 className="font-serif text-2xl text-fg-base mb-6">
              {t("projectDetails.mainFeatures")}
            </h2>
            <ul className="space-y-3">
              {project.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 text-base text-fg-muted leading-relaxed">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-copper/40" />
                  {feature}
                </li>
              ))}
            </ul>
          </section>

          {project.technicalHighlights && project.technicalHighlights.length > 0 && (
            <section>
              <h2 className="font-serif text-2xl text-fg-base mb-6">
                {t("projectDetails.technicalHighlights")}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {project.technicalHighlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl border border-border-base bg-paper-subtle/30 text-sm text-fg-muted leading-relaxed"
                  >
                    {highlight}
                  </div>
                ))}
              </div>
            </section>
          )}

          {project.challenges && project.challenges.length > 0 && (
            <section>
              <h2 className="font-serif text-2xl text-fg-base mb-6">
                {t("projectDetails.technicalChallenges")}
              </h2>
              <ul className="space-y-3">
                {project.challenges.map((challenge, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-base text-fg-muted leading-relaxed">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-copper/40" />
                    {challenge}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {project.learnings && project.learnings.length > 0 && (
            <section>
              <h2 className="font-serif text-2xl text-fg-base mb-6">
                {t("projectDetails.learnings")}
              </h2>
              <ul className="space-y-3">
                {project.learnings.map((learning, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-base text-fg-muted leading-relaxed">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-copper/40" />
                    {learning}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {project.futureImprovements && project.futureImprovements.length > 0 && (
            <section>
              <h2 className="font-serif text-2xl text-fg-base mb-6">
                {t("projectDetails.futureImprovements")}
              </h2>
              <ul className="space-y-3">
                {project.futureImprovements.map((improvement, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-base text-fg-muted leading-relaxed">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-copper/40" />
                    {improvement}
                  </li>
                ))}
              </ul>
            </section>
          )}

          <div className="flex gap-3 flex-wrap pt-4">
            <DemoButton
              href={project.demoUrl}
              label={t("projectsSection.buttons.demo")}
            />
            {project.codeUrl && (
              <CodeButton
                href={project.codeUrl}
                label={t("projectsSection.buttons.code")}
              />
            )}
          </div>

          <div className="pt-8 text-center border-t border-border-base">
            <button
              onClick={() => navigate("/projects")}
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border-base text-sm font-medium text-fg-muted hover:text-fg-base hover:border-copper/30 transition-all duration-200 active:scale-[0.97]"
            >
              <svg
                className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              {t("projectDetails.backToAllProjects")}
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
