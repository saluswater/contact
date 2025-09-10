import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/contact',
  assetPrefix: '/contact',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};

export default nextConfig;
