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
    remotePatterns: [
      new URL('http://localhost:3000/**'),
      new URL('https://yslw5kny2flxpn0p.public.blob.vercel-storage.com')
    ],
  },
  reactStrictMode: false
};

export default nextConfig;
