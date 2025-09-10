import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/contact' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/contact' : '',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
