import { useState } from "react";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

export function ContactSection() {
  const { t } = useTranslation();
  const data = t("contactSection", { returnObjects: true }) as any;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const subject = encodeURIComponent(formData.subject);
      const body = encodeURIComponent(
        `Nombre: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
      );
      window.location.href = `mailto:victormanuelmartinezcampo178@gmail.com?subject=${subject}&body=${body}`;
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } catch {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="w-full px-4 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight text-balance text-fg-base">
              {data.title}
            </h2>
            <p className="text-base text-fg-muted leading-relaxed max-w-md text-pretty">
              {data.description}
            </p>
            <div className="h-px w-16 bg-copper" />

            <div className="space-y-4 pt-4">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=victormanuelmartinezcampo178@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <span className="w-8 h-8 rounded-full border border-border-base flex items-center justify-center group-hover:border-copper/50 transition-colors duration-300">
                  <svg className="w-4 h-4 text-fg-muted group-hover:text-copper transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </span>
                <span className="text-sm text-fg-muted group-hover:text-fg-base transition-colors duration-300">
                  victormanuelmartinezcampo178@gmail.com
                </span>
              </a>

              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full border border-border-base flex items-center justify-center">
                  <svg className="w-4 h-4 text-fg-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </span>
                <span className="text-sm text-fg-muted">{data.location?.value}</span>
              </div>

              <div className="flex gap-3 pt-4">
                <a
                  href="https://github.com/viticomc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium uppercase tracking-wider text-fg-muted hover:text-copper transition-colors duration-300"
                >
                  GitHub
                </a>
                <span className="text-fg-dim">/</span>
                <a
                  href="https://www.linkedin.com/in/victor-mc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium uppercase tracking-wider text-fg-muted hover:text-copper transition-colors duration-300"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder={data.form?.namePlaceholder || "Name"}
                  className="w-full px-4 py-3 rounded-xl border border-border-base bg-paper-subtle/30 text-fg-base placeholder:text-fg-dim/50 focus:outline-none focus:border-copper/50 focus:bg-paper-elevated/50 transition-all duration-300 text-sm"
                />
              </div>

              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder={data.form?.emailPlaceholder || "Email"}
                  className="w-full px-4 py-3 rounded-xl border border-border-base bg-paper-subtle/30 text-fg-base placeholder:text-fg-dim/50 focus:outline-none focus:border-copper/50 focus:bg-paper-elevated/50 transition-all duration-300 text-sm"
                />
              </div>

              <div>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder={data.form?.subjectPlaceholder || "Subject"}
                  className="w-full px-4 py-3 rounded-xl border border-border-base bg-paper-subtle/30 text-fg-base placeholder:text-fg-dim/50 focus:outline-none focus:border-copper/50 focus:bg-paper-elevated/50 transition-all duration-300 text-sm"
                />
              </div>

              <div>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder={data.form?.messagePlaceholder || "Message"}
                  className="w-full px-4 py-3 rounded-xl border border-border-base bg-paper-subtle/30 text-fg-base placeholder:text-fg-dim/50 focus:outline-none focus:border-copper/50 focus:bg-paper-elevated/50 transition-all duration-300 text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group inline-flex items-center gap-3 px-6 py-3 rounded-full bg-copper text-paper text-sm font-medium transition-all duration-300 hover:opacity-90 active:scale-[0.97] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>{isSubmitting ? (data.form?.sending || "Sending...") : (data.form?.submit || "Send")}</span>
                <span className="w-6 h-6 rounded-full bg-paper/20 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </button>

              {submitStatus === "success" && (
                <motion.p
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-fg-muted"
                >
                  {data.form?.successMessage || "Message sent!"}
                </motion.p>
              )}

              {submitStatus === "error" && (
                <motion.p
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-fg-muted"
                >
                  {data.form?.errorMessage || "Something went wrong."}
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
