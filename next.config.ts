import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/salus-new-lps',
  assetPrefix: '/salus-new-lps',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
