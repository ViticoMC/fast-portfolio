import { useEffect, useState } from "react";
import { useThemeStore } from "@/store/themeStore";

export function useTheme() {
  const { theme, setTheme, toggleTheme } = useThemeStore();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Solo marcar como montado (ya est inicializado en theme-init.ts)
    setIsMounted(true);
  }, []);

  return { theme, setTheme, toggleTheme, isMounted };
}
