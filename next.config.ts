// next.config.js or next.config.ts
import type { NextConfig } from "next";
import withFlowbiteReact from "flowbite-react/plugin/nextjs";

const nextConfig: NextConfig = {
  images: {
    domains: ['source.unsplash.com', "cdn-icons-png"],
  },
};

export default withFlowbiteReact(nextConfig);