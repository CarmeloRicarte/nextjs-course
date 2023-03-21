/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  skipTrailingSlashRedirect: true, // skip trailing slash
  skipMiddlewareUrlNormalize: true, // normalize URL, because by default, NextJS routes starts with '/_next/data/build-id/*name of route.json
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: 'rickandmortyapi.com',
      },
    ],
  },
};

module.exports = nextConfig;
