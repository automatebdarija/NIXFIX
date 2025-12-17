/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  typescript: {
    // Ensure TS errors are caught during build
    ignoreBuildErrors: false,
  },
  eslint: {
    // Ensure ESLint errors are caught during build
    ignoreDuringBuilds: false,
  },
  images: {
    // Allow external images from any source since standard img tags are used heavily
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
