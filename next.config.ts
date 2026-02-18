import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Usa il pipeline Webpack stabile invece di Turbopack,
    // più compatibile con Tailwind CSS 3 su Windows.
    turbo: false,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: '*.sanity.io',
      },
    ],
  },
};

export default nextConfig;
