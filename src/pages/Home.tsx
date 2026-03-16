
import { HeroSection, TechStackSection, WorkExpSection } from "@/custom-components/home";
import { TestProjectsSection } from "@/custom-components/home/PersonalProjectSection";

export default function Home() {


    return (
        <>
            <HeroSection />
            <TechStackSection />
            <WorkExpSection />
            {/* <ProjectsSection /> */}
            <TestProjectsSection />
        </>
    );
}
