import { useTheme } from "@/hooks/useTheme";
import { ControlsBar } from "@/component/ControlsBar";
import Silk from "./components/Silk";
import { HeroSection, TechStackSection, ProjectsSection } from "@/component/sections";
import { TestProjectsSection } from "./component/sections/PersonalProjectSection";

function App() {
  const { isMounted, theme } = useTheme(); // Extraemos 'theme' del hook

  if (!isMounted) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <div className="animate-pulse text-text-primary">Loading...</div>
      </div>
    );
  }

  // Definimos los colores según el tema activo
  const SILK_COLOR = theme === "dark" ? "#373DDE" : "#83B2F0";
  const SILK_BG = theme === "dark" ? "#000000" : "#ffffff";

  return (
    <>
      <div className="fixed inset-0 w-full h-screen -z-10 pointer-events-none">
        <Silk color={SILK_COLOR} backgroundColor={SILK_BG} speed={0.8} />
      </div>
      <ControlsBar />
      <HeroSection />
      <TechStackSection />
      {/* <ProjectsSection /> */}
      <TestProjectsSection />
    </>
  );
}

export default App;