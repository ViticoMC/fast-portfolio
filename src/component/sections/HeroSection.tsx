import TextType from "@/components/TextType";
import { useTranslation } from "react-i18next";
import { Github, Linkedin, Mail } from "lucide-react";
import DownloadButton from "../DownloadButton";
import Silk from "@/components/Silk";
// import HeroTechIcons from "../HeroTechIcons";


const socialLinks = [
  {
    url: "https://github.com/viticomc",
    icon: <Github className="w-5 h-5" />,
  },
  {
    url: "https://www.linkedin.com/in/victor-mc/",
    icon: <Linkedin className="w-5 h-5" />,
  },
  {
    url: "https://mail.google.com/mail/?view=cm&fs=1&to=victormanuelmartinezcampo178@gmail.com",
    icon: <Mail className="w-5 h-5" />,
  },
];
const SILKCOLOR = "rgb(67, 9, 148)";

export default function HeroSection() {
  const { t, i18n } = useTranslation();

  const data = t("hero", { returnObjects: true });


  return (
    <section className="relative  w-full h-screen flex flex-col items-center justify-around ">
      <div className="absolute inset-0 w-full h-full">
        <Silk color={SILKCOLOR} speed={5} />
      </div>


      {/* Contenido principal */}
      <div className="relative bg-background/40 flex flex-col gap-8 items-center justify-center md:max-w-2xl max-w-xl p-4 rounded-2xl ">
        {/* Badge */}
        <div className="mb-4 p-4 bg-highlight-blue/40 border border-border rounded-full text-xs tracking-wider text-foreground uppercase animate-fade-in">
          <TextType key={i18n.language} text={[...data.badge]} />
        </div>

        {/* Hero text */}
        <div className="text-center space-y-6 max-w-4xl animate-fade-in">
          <h1 className="text-sm md:text-base text-text-muted font-light">
            {data.greeting} <span className="text-text-primary font-medium">{data?.name}</span>
          </h1>

          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-text-primary leading-tight">
            {data.title}
          </h2>

          <p className="text-text-muted text-sm md:text-base max-w-2xl mx-auto leading-relaxed px-4">
            {data.description}
          </p>
          <div className="relative text-muted-foreground z-20 flex flex-wrap gap-3 mt-2 justify-center text-xs uppercase tracking-wider animate-fade-in delay-300">
            {data.techStack.map((tech: string) => (
              <span
                key={tech}
                className="hover:text-text-primary hover:scale-[1.2] cursor-pointer transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Botones CTA */}
        <div className="flex flex-wrap gap-4 mt-4 animate-fade-in delay-200">
          <button className="group px-8 py-3 border border-border hover:border-border-light hover:scale-[1.1] rounded-lg text-text-primary font-medium transition-all duration-300  flex items-center gap-2 hover:shadow-glow">
            {data.buttons.contact}
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-all"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <DownloadButton text={data.buttons.downloadCV} />
        </div>

        <div className="flex gap-4 z-20">
          {socialLinks.map((social) => (
            <a
              key={social.url}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-[1.1] w-10 h-10 flex items-center justify-center  hover:bg-bg-tertiary border border-border rounded-lg transition-all duration-300 text-text-muted hover:text-text-primary hover:shadow-glow"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
