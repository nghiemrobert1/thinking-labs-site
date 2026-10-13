import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/product", destination: "/", permanent: true },
      { source: "/ckd-twin", destination: "/", permanent: false },
    ];
  },
};

export default nextConfig;
