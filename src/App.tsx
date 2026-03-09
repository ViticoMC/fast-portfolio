import { useTheme } from "@/hooks/useTheme";
import { ControlsBar } from "@/component/ControlsBar";
import HeroSection from "./component/sections/HeroSection";

// Dentro del return

function App() {
  const { isMounted } = useTheme();
  // return <VariablesTest />;

  if (!isMounted) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <div className="animate-pulse text-text-primary">Loading...</div>
      </div>
    );
  }

  return (
    <>
      <ControlsBar />
      <HeroSection />
    </>
  );
}

export default App;
