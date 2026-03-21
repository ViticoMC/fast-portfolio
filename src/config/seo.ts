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
  OG_IMAGE: "/my-skin.webp",
  TWITTER_HANDLE: "@victor_dev", // Update with actual handle
};

export const ROUTES = {
  HOME: "/",
  PROJECTS: "/projects",
  PROJECT_DETAIL: (id: number | string) => `/projects/${id}`,
};

// Helper function to generate full URLs
export const getFullUrl = (path: string): string => {
  return `${SEO_CONFIG.SITE_URL}${path}`;
};
