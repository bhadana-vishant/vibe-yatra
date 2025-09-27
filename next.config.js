/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: '/vibe-yatra',
  assetPrefix: '/vibe-yatra/',
  // Enable proper routing for GitHub Pages
  experimental: {
    appDir: false
  }
}

module.exports = nextConfig