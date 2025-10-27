import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    serverActions: {
      bodySizeLimit: '3mb'
    }
  },
  images: {
    // formats: ["image/avif", "image/webp"],
    remotePatterns: [new URL('http://localhost:3000/**')],
  },
  reactStrictMode: false
};

export default nextConfig;
