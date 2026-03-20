
import { FooterSection, HeroSection, TechStackSection, WorkExpSection, ContactSection } from "@/custom-components/home";
import { TestProjectsSection } from "@/custom-components/home/PersonalProjectSection";

export default function Home() {


    return (
        <div className="max-w-[100vw] p-0 overflow-x-hidden">
            <HeroSection />
            <TechStackSection />
            <WorkExpSection />
            {/* <ProjectsSection /> */}
            <TestProjectsSection />
            <ContactSection />
            <FooterSection />
        </div>
    );
}
