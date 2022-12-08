/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
        port: '',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: 'i.gr-assets.com',
        port: '',
        pathname: '/images/S/compressed.photo.goodreads.com/books/**',
      },
    ],
  },
};

module.exports = nextConfig;
