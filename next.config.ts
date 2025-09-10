import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/salus-new-lps',
  assetPrefix: '/salus-new-lps',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};

export default nextConfig;
