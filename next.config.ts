import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/Ivanna/:pases",
        destination: "/xv-anos/Ivanna?pases=:pases",
      },
    ];
  },
};
export default nextConfig;
