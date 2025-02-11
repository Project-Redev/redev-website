/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "github.com",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "mc-heads.net",
      },
      { protocol: "https", hostname: "minotar.net" },
      { protocol: "https", hostname: "starlightskins.lunareclipse.studio" },
    ],
  },
};

export default nextConfig;
