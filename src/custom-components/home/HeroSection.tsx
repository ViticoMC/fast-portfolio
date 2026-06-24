import { useTranslation } from "react-i18next";
import { motion, useReducedMotion } from "motion/react";
// import TextType from "@/components/TextType";

const socialLinks = [
  { url: "https://github.com/viticomc", label: "GitHub" },
  { url: "https://www.linkedin.com/in/victor-mc/", label: "LinkedIn" },
  { url: "mailto:victormanuelmartinezcampo178@gmail.com", label: "Email" },
];

export function HeroSection() {
  const { t } = useTranslation();
  const data = t("hero", { returnObjects: true }) as any;
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-[100dvh] w-full flex items-center justify-center px-4 pt-20 pb-16">
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Text Content */}
          <div className="lg:col-span-7 space-y-6">
            {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border-base bg-paper-subtle/50">
              <span className="w-1.5 h-1.5 rounded-full bg-copper animate-pulse" />
              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-fg-muted">
                <TextType key={i18n.language} text={data.badge || []} />
              </span>
            </div> */}

            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.95] tracking-tight text-balance text-fg-base">
              {data.greeting as string}{" "}
              <span className="text-copper">{data.name as string}</span>
              <br />
              <span className="font-sans font-light italic text-fg-muted text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                {data.title as string}
              </span>
            </h1>

            <p className="text-base sm:text-lg text-fg-muted leading-relaxed max-w-xl text-pretty">
              {data.description as string}
            </p>

            <div className="flex flex-wrap gap-3 text-xs uppercase tracking-wider text-fg-dim">
              {data.techStack?.map((tech: string) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full border border-border-base font-medium text-fg-muted"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 px-6 py-3 rounded-full bg-copper text-paper text-sm font-medium transition-all duration-300 hover:opacity-90 active:scale-[0.97]"
              >
                <span>{data.buttons?.contact}</span>
                <span className="w-6 h-6 rounded-full bg-paper/20 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </a>

              <a
                href="/VICTOR-CVE.docx"
                download
                className="group inline-flex items-center gap-2 px-5 py-3 rounded-full border border-border-base text-sm font-medium text-fg-muted hover:text-fg-base hover:border-copper transition-all duration-300 active:scale-[0.97]"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                <span>{data.buttons?.downloadCV}</span>
              </a>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <span className="text-xs uppercase tracking-[0.15em] text-fg-dim font-medium">Find me</span>
              <div className="h-px flex-1 max-w-16 bg-border-base" />
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.url}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium text-fg-muted hover:text-copper transition-colors duration-300"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden ring-2 ring-copper/30">
                <img
                  src="/my-skin.webp"
                  alt="Victor"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-copper/10 blur-3xl pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
