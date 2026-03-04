/** @type {import('next').NextConfig} */
const nextConfig = {
  // Monorepo root (for Turbopack when building from repo root)
  turbopack: { root: process.cwd() },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
