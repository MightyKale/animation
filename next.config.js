/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: false,
  },
  basePath: '/metaverse', 
  assetPrefix: '/metaverse/', 
  eslint: {
    ignoreDuringBuilds: true,
  }
};

module.exports = nextConfig;
