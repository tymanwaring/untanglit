/** @type {import('next').NextConfig} */ // next config
const nextConfig = {
  // Monorepo root (for Turbopack when building from repo root)
  turbopack: { root: process.cwd() },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com', pathname: '/**' },
    ],
    // Smaller initial widths for faster first load (browser picks from these)
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },
}

export default nextConfig
