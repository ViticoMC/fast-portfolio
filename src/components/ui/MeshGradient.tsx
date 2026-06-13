"use client";
import { useThemeStore } from "@/store/themeStore";

export function MeshGradient() {
  const theme = useThemeStore((s) => s.theme);

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      <div
        className="absolute inset-0 transition-opacity duration-700"
        style={{
          background:
            theme === "dark"
              ? `
                radial-gradient(ellipse 80% 60% at 10% 20%, oklch(0.45 0.12 45 / 0.15) 0%, transparent 60%),
                radial-gradient(ellipse 60% 70% at 85% 15%, oklch(0.5 0.1 50 / 0.1) 0%, transparent 50%),
                radial-gradient(ellipse 70% 50% at 50% 80%, oklch(0.4 0.08 55 / 0.08) 0%, transparent 50%),
                oklch(0.13 0.02 50)
              `
              : `
                radial-gradient(ellipse 70% 55% at 15% 25%, oklch(0.65 0.12 45 / 0.08) 0%, transparent 60%),
                radial-gradient(ellipse 55% 65% at 80% 20%, oklch(0.7 0.1 50 / 0.06) 0%, transparent 50%),
                radial-gradient(ellipse 65% 45% at 40% 75%, oklch(0.75 0.05 55 / 0.05) 0%, transparent 50%),
                oklch(0.97 0.01 65)
              `,
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "256px 256px",
        }}
      />
    </div>
  );
}
