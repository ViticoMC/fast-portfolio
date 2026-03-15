
import { HeroSection, TechStackSection } from "@/custom-components/home";
import { TestProjectsSection } from "@/custom-components/home/PersonalProjectSection";

export default function Home() {


    return (
        <>
            <HeroSection />
            <TechStackSection />
            {/* <ProjectsSection /> */}
            <TestProjectsSection />
        </>
    );
}
