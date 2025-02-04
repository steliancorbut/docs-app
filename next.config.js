/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export', // Face site-ul static
  distDir: 'out', // Next.js va exporta HTML aici
  assetPrefix: process.env.NODE_ENV === 'production' ? "/docs-app/" : "", // Necesită pentru GitHub Pages
  images: { unoptimized: true }, // Evită optimizarea imaginilor (GitHub Pages nu suportă Image Optimization)
  trailingSlash: true, // Adaugă `/` la sfârșitul URL-urilor pentru compatibilitate mai bună
}

module.exports = nextConfig;
