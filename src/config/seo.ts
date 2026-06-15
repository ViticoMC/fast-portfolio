/**
 * SEO Configuration
 * Update SITE_URL with your actual domain
 */

export const SEO_CONFIG = {
  SITE_URL: "https://viticomc-porftolio.vercel.app/",
  SITE_NAME: "Victor Portfolio",
  AUTHOR: "Victor",
  DESCRIPTION: {
    es: "Portafolio de Victor, desarrollador frontend especializado en React, Next.js y TypeScript. Interfaces modernas, rápidas y centradas en el usuario.",
    en: "Victor's portfolio, frontend developer specializing in React, Next.js and TypeScript. Modern, fast interfaces focused on user experience.",
  },
  KEYWORDS: {
    es: "Victor, portafolio, frontend developer, React, Next.js, TypeScript, desarrollo web, UI, UX",
    en: "Victor, portfolio, frontend developer, React, Next.js, TypeScript, web development, UI, UX",
  },
  OG_IMAGE: "/my-skin-1200x630.webp",
  TWITTER_HANDLE: "@victor_dev", // Update with actual handle
};

export const ROUTES = {
  HOME: "/",
  PROJECTS: "/projects",
  PROJECT_DETAIL: (id: number | string) => `/projects/${id}`,
  NOT_FOUND: "/404",
};

export const SEO_PAGES = {
  HOME: {
    title: { es: "Victor | Frontend Developer Portfolio", en: "Victor | Frontend Developer Portfolio" },
    description: { es: "Portafolio de Victor, desarrollador frontend especializado en React, Next.js y TypeScript.", en: "Victor's portfolio, frontend developer specializing in React, Next.js and TypeScript." },
  },
  NOT_FOUND: {
    title: { es: "Página no encontrada - Victor Portfolio", en: "Page Not Found - Victor Portfolio" },
    description: { es: "La página que buscas no existe o ha sido movida. Regresa al inicio del portafolio de Victor.", en: "The page you're looking for doesn't exist or has been moved. Return to Victor's portfolio home." },
  },
};

// Helper function to generate full URLs
export const getFullUrl = (path: string): string => {
  return `${SEO_CONFIG.SITE_URL}${path}`;
};
