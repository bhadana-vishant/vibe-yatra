/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: '/vibe-yatra',
  assetPrefix: '/vibe-yatra/',
}

module.exports = nextConfig