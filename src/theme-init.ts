// Script crítico para aplicar tema sin flash - debe ejecutarse ANTES de React
(function () {
  try {
    const saved = localStorage.getItem("theme-storage");
    let theme = "dark"; // default

    if (saved) {
      const parsed = JSON.parse(saved);
      theme = parsed.state?.theme || "dark";
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      theme = prefersDark ? "dark" : "light";
    }

    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  } catch (e) {
    console.error("Error initializing theme:", e);
  }
})();
