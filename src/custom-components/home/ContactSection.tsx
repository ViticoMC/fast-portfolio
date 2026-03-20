import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

export function ContactSection() {
    const { t } = useTranslation();
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
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus("idle");

        try {
            // Simular envío de formulario
            // En un caso real, aquí irías a un endpoint de tu servidor
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Abrir cliente de email con los datos del formulario
            const subject = encodeURIComponent(formData.subject);
            const body = encodeURIComponent(
                `Nombre: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
            );
            window.location.href = `mailto:victormanuelmartinezcampo178@gmail.com?subject=${subject}&body=${body}`;

            setSubmitStatus("success");
            setFormData({
                name: "",
                email: "",
                subject: "",
                message: "",
            });

            setTimeout(() => {
                setSubmitStatus("idle");
            }, 3000);
        } catch (error) {
            setSubmitStatus("error");
            setTimeout(() => {
                setSubmitStatus("idle");
            }, 3000);
            console.log("Error al enviar el formulario:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const data = t("contactSection", { returnObjects: true });

    return (
        <section className="w-full px-4 py-10 md:py-14">
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45 }}
                className="mx-auto max-w-7xl"
            >
                {/* Header */}
                <div className="text-center mb-12 md:mb-16">
                    <span className="inline-block px-4 py-1 rounded-full text-xs tracking-widest uppercase border border-border bg-highlight-blue/30 text-foreground">
                        {data.badge}
                    </span>
                    <h2 className="mt-4 text-3xl md:text-5xl font-bold text-text-primary">
                        {data.title}
                    </h2>
                    <p className="mt-4 text-text-muted text-base md:text-lg max-w-2xl mx-auto">
                        {data.description}
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.45, delay: 0.1 }}
                        className="space-y-6"
                    >
                        {/* Contact Items */}
                        <div className="space-y-4">
                            {/* Email */}
                            <a
                                href="https://mail.google.com/mail/?view=cm&fs=1&to=victormanuelmartinezcampo178@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-start gap-4 p-4 rounded-xl border border-white/10  hover:bg-background/80 transition-all duration-300 hover:border-border-light hover:shadow-glow"
                            >
                                <div className="shrink-0 mt-1">
                                    <Mail className="w-5 h-5 text-highlight-blue group-hover:scale-110 transition-transform" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-semibold uppercase tracking-wide text-text-primary">
                                        {data.email.label}
                                    </h3>
                                    <p className="mt-1 text-text-muted text-sm hover:text-text-primary transition-colors">
                                        victormanuelmartinezcampo178@gmail.com
                                    </p>
                                </div>
                            </a>

                            {/* Phone */}
                            <a
                                href={`https://wa.me/${data.phone.value}`}
                                target="_blank"
                                className="flex items-start gap-4 p-4 rounded-xl border border-white/10 hover:bg-background/80 ">
                                <div className="shrink-0 mt-1">
                                    <Phone className="w-5 h-5 text-highlight-blue" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-semibold uppercase tracking-wide text-text-primary">
                                        {data.phone.label}
                                    </h3>
                                    <p className="mt-1 text-text-muted text-sm">
                                        {data.phone.value}
                                    </p>
                                </div>
                            </a>

                            {/* Location */}
                            <div className="flex items-start gap-4 p-4 rounded-xl border border-white/10 hover:bg-background/80">
                                <div className="shrink-0 mt-1">
                                    <MapPin className="w-5 h-5 text-highlight-blue" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-semibold uppercase tracking-wide text-text-primary">
                                        {data.location.label}
                                    </h3>
                                    <p className="mt-1 text-text-muted text-sm">
                                        {data.location.value}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="pt-6 border-t border-white/10">
                            <p className="text-sm text-text-muted font-medium mb-4">
                                {data.followUs}
                            </p>
                            <div className="flex gap-3">
                                <a
                                    href="https://github.com/viticomc"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-border bg-white/5 text-text-muted hover:text-text-primary hover:bg-highlight-blue/20 hover:border-border-light transition-all duration-300 hover:shadow-glow"
                                    title={t("common.github")}
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/victor-mc/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-border bg-white/5 text-text-muted hover:text-text-primary hover:bg-highlight-blue/20 hover:border-border-light transition-all duration-300 hover:shadow-glow"
                                    title={t("common.linkedin")}
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.736 0-9.646h3.554v1.348c.42-.648 1.36-1.573 3.322-1.573 2.429 0 4.25 1.574 4.25 4.958v5.413zM5.337 8.855c-1.144 0-1.915-.762-1.915-1.715 0-.957.77-1.715 1.97-1.715 1.144 0 1.914.758 1.938 1.715 0 .953-.794 1.715-1.993 1.715zm1.946 11.597h-3.554V9.906h3.554v10.546zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.45, delay: 0.2 }}
                        className="rounded-xl border border-white/10  p-6 md:p-8 backdrop-blur-md shadow-[0_0_30px_rgba(0,0,0,0.25)]"
                    >
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Name */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                                    {data.form.name}
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2.5 rounded-lg border border-white/15 bg-white/5 text-text-primary placeholder-text-muted/50 focus:outline-none focus:border-border-light focus:bg-white/10 transition-all duration-300"
                                    placeholder={data.form.namePlaceholder}
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                                    {data.form.email}
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2.5 rounded-lg border border-white/15 bg-white/5 text-text-primary placeholder-text-muted/50 focus:outline-none focus:border-border-light focus:bg-white/10 transition-all duration-300"
                                    placeholder={data.form.emailPlaceholder}
                                />
                            </div>

                            {/* Subject */}
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-text-primary mb-2">
                                    {data.form.subject}
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2.5 rounded-lg border border-white/15 bg-white/5 text-text-primary placeholder-text-muted/50 focus:outline-none focus:border-border-light focus:bg-white/10 transition-all duration-300"
                                    placeholder={data.form.subjectPlaceholder}
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
                                    {data.form.message}
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full px-4 py-2.5 rounded-lg border border-white/15 bg-white/5 text-text-primary placeholder-text-muted/50 focus:outline-none focus:border-border-light focus:bg-white/10 transition-all duration-300 resize-none"
                                    placeholder={data.form.messagePlaceholder}
                                />
                            </div>

                            {/* Submit Status */}
                            {submitStatus === "success" && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="p-3 rounded-lg bg-green-500/20 border border-green-500/50 text-green-300 text-sm"
                                >
                                    {data.form.successMessage}
                                </motion.div>
                            )}

                            {submitStatus === "error" && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="p-3 rounded-lg bg-red-500/20 border border-red-500/50 text-red-300 text-sm"
                                >
                                    {data.form.errorMessage}
                                </motion.div>
                            )}

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full mt-2 px-6 py-3 rounded-lg border border-border hover:border-border-light bg-gradient-to-r from-highlight-blue/20 to-cyan-500/20 hover:from-highlight-blue/40 hover:to-cyan-500/40 text-text-primary font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-glow"
                            >
                                {isSubmitting ? data.form.sending : data.form.submit}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
