import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "*.ufs.sh",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/dezvoltare-web",
        destination: "/software-development",
        permanent: true,
      },
      {
        source: "/social-media",
        destination: "/digital-strategy",
        permanent: true,
      },
      {
        source: "/branding",
        destination: "/digital-strategy",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
