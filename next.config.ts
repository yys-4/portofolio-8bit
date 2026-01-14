import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/portofolio-8bit',  // Add this line
  reactCompiler: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
