import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./language/i18n/config.ts";
import RouterConfig from "./router.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterConfig />
  </StrictMode>
);

