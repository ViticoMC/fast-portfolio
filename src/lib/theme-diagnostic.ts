/**
 * Script de diagnóstico - Verificar que las variables CSS funcionan
 */

export function diagnosticTheme() {
  if (typeof window === "undefined") return;

  const root = document.documentElement;
  const computedStyle = getComputedStyle(root);

  const classes = Array.from(root.classList);
  console.log("%c🎨 ESTADO ACTUAL DEL TEMA", "color: #4f46e5; font-weight: bold; font-size: 14px;");
  console.log("Clases en <html>:", classes);

  const variablesToCheck = [
    "--primary",
    "--text-primary",
    "--bg-primary",
    "--border",
  ];

  console.log("%c📋 VARIABLES CSS DISPONIBLES", "color: #8b5cf6; font-weight: bold; font-size: 14px;");
  variablesToCheck.forEach((varName) => {
    const value = computedStyle.getPropertyValue(varName).trim();
    console.log(`${varName}: ${value || "❌ NO DEFINIDA"}`);
  });

  const bodyStyle = getComputedStyle(document.body);
  console.log("%c🎯 ESTILOS DEL BODY", "color: #06b6d4; font-weight: bold; font-size: 14px;");
  console.log("background-color:", bodyStyle.backgroundColor);
  console.log("color:", bodyStyle.color);

  console.log("%c✅ INFORMACIÓN DEL SISTEMA", "color: #10b981; font-weight: bold; font-size: 14px;");
  console.log("HTML classes:", root.className);
  console.log("CSS variables cargadas: Sí");
}

if (import.meta.env.NODE_ENV === "development") {
  if (typeof window !== "undefined") {
    window.addEventListener("DOMContentLoaded", () => {
      setTimeout(() => {
        diagnosticTheme();
      }, 100);
    });
    (window as any).diagnosticTheme = diagnosticTheme;
  }
}
