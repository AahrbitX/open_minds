import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["images.unsplash.com"],
    loader: "default",
  },
  experimental: {
    viewTransition: true,
  },
};

export default nextConfig;
