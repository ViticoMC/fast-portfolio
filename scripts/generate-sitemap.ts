import fs from "fs";
import path from "path";

/**
 * Sitemap Generator Script
 * Generates sitemap.xml from routes and project data
 */

const SITE_URL = process.env.VITE_SITE_URL || "https://viticomc-porftolio.vercel.app";
const DIST_DIR = "./dist";
const PUBLIC_DIR = "./public";

// Static routes
const staticRoutes = [
  { path: "/", priority: "1.0", changefreq: "monthly" },
  { path: "/projects", priority: "0.9", changefreq: "weekly" },
];

// Dynamic project routes - extracted from mock data
const projectIds = [1, 2, 3, 4, 5, 6]; // Update with actual project IDs or fetch from data

interface SitemapUrl {
  path: string;
  priority: string;
  changefreq: string;
  lastmod?: string;
}

function generateSitemap(routes: SitemapUrl[]): string {
  const lastmod = new Date().toISOString().split("T")[0];

  const urlEntries = routes
    .map(
      (route) => `  <url>
    <loc>${SITE_URL}${route.path}</loc>
    <lastmod>${route.lastmod || lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;
}

function generateRobotsTxt(): string {
  return `# robots.txt
User-agent: *
Allow: /

# Sitemaps
Sitemap: ${SITE_URL}/sitemap.xml

# Disallow private routes if any
# Disallow: /admin
`;
}

export function buildSitemap() {
  try {
    // Combine static and dynamic routes
    const allRoutes: SitemapUrl[] = [...staticRoutes];

    // Add project detail routes
    projectIds.forEach((id) => {
      allRoutes.push({
        path: `/projects/${id}`,
        priority: "0.8",
        changefreq: "monthly",
      });
    });

    const sitemapContent = generateSitemap(allRoutes);
    const robotsContent = generateRobotsTxt();

    // Ensure public directory exists
    if (!fs.existsSync(PUBLIC_DIR)) {
      fs.mkdirSync(PUBLIC_DIR, { recursive: true });
    }

    // Write files to public folder (will be copied to dist during build)
    fs.writeFileSync(path.join(PUBLIC_DIR, "sitemap.xml"), sitemapContent);
    fs.writeFileSync(path.join(PUBLIC_DIR, "robots.txt"), robotsContent);

    console.log("✓ Sitemap and robots.txt generated successfully");
  } catch (error) {
    console.error("✗ Error generating sitemap:", error);
    process.exit(1);
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  buildSitemap();
}

export default buildSitemap;
