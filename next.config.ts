/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // basePath: '', // should be empty unless you serve from subpath
  // assetPrefix: '',
  images: {
    domains: ["api.digically.in"],
  },
};

module.exports = nextConfig;
