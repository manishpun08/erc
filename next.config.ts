import type { NextConfig } from "next";

// eslint-disable-next-line @typescript-eslint/no-require-imports
const createNextIntlPlugin = require("next-intl/plugin");
const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "api.ayatabaya.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "api.ayatabaya.com",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "192.168.1.69",
        port: "8001",
        pathname: "/media/**",
      },
      {
        protocol: "http",
        hostname: "192.168.1.126",
        port: "8001",
        pathname: "/media/**",
      },
      {
        protocol: "http",
        hostname: "192.168.1.97",
        port: "8001",
        pathname: "/media/**",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
