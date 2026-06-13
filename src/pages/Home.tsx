import { HeroSection } from "@/custom-components/home/HeroSection";
import { TechStackSection } from "@/custom-components/home/TechStackSection";
import { WorkExpSection } from "@/custom-components/home/WorkExpSection";
import { TestProjectsSection } from "@/custom-components/home/PersonalProjectSection";
import { ContactSection } from "@/custom-components/home/ContactSection";
import { FooterSection } from "@/custom-components/home/FooterSection";

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      <HeroSection />
      <TechStackSection />
      <WorkExpSection />
      <TestProjectsSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}
