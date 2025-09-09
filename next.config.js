/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
  distDir: "build",
  experimental: {
    instrumentationHook: false, // disables trace writing
  },
};

module.exports = nextConfig;
