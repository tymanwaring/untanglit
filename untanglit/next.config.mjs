/** @type {import('next').NextConfig} */
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
  },
}

export default nextConfig
