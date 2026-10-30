import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: process.env.GITHUB_PAGES === "true" ? "/akhil-alladi-portfolio" : "",
  images: {
    unoptimized: true,
    remotePatterns: [\n      { protocol: "https", hostname: "images.unsplash.com" },\n      { protocol: "https", hostname: "mir-s3-cdn-cf.behance.net" },\n    ],
  },
};

export default nextConfig;
