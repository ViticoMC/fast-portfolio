import { Outlet } from "react-router-dom";
import Silk from "@/components/Silk";
import { useTheme } from "@/hooks/useTheme";
import { ControlsBar } from "@/custom-components/ControlsBar";
import { useTranslation } from "react-i18next";

export function Layout() {

    const { isMounted, theme } = useTheme(); // Extraemos 'theme' del hook
    const { t } = useTranslation();

    if (!isMounted) {
        return (
            <div className="w-full h-screen flex items-center justify-center">
                <div className="animate-pulse text-text-primary">{t("messages.loading")}</div>
            </div>
        );
    }

    // Definimos los colores según el tema activo
    const SILK_COLOR = theme === "dark" ? "#373DDE" : "#83B2F0";
    const SILK_BG = theme === "dark" ? "#000000" : "#ffffff";
    return (
        <div className="min-h-screen w-full relative">
            <div className="fixed inset-0 w-full h-screen -z-10 pointer-events-none">
                <Silk color={SILK_COLOR} backgroundColor={SILK_BG} speed={0.8} />
            </div>
            <ControlsBar />

            {/* Contenido */}
            <main className="relative z-10">
                <Outlet />
            </main>
        </div>
    );
}

