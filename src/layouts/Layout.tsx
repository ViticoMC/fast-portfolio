import { Outlet } from "react-router-dom";
import { MeshGradient } from "@/components/ui/MeshGradient";
import { FluidNav } from "@/components/ui/FluidNav";
import { useTheme } from "@/hooks/useTheme";

export function Layout() {
  const { isMounted } = useTheme();

  if (!isMounted) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-paper text-fg-muted">
        <div className="animate-pulse text-sm">Loading</div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen w-full bg-paper text-fg-base antialiased">
      <MeshGradient />
      <FluidNav />
      <main className="relative z-10">
        <Outlet />
      </main>
    </div>
  );
}
