/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.10minuteschool.com",
      },
    ],
  },
};

export default nextConfig;
