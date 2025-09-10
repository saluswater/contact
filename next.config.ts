import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/salus-new-lps' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/salus-new-lps' : '',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
