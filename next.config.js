/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export', // Face site-ul static
  distDir: 'out', // Next.js va exporta HTML aici
  assetPrefix: '/docs-app/', // Necesită pentru GitHub Pages
  basePath: '/docs-app', 
  images: { unoptimized: true }, // Evită optimizarea imaginilor (GitHub Pages nu suportă Image Optimization)
  trailingSlash: true, // Adaugă `/` la sfârșitul URL-urilor pentru compatibilitate mai bună
}

module.exports = nextConfig;
