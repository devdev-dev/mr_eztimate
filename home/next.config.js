/** @type {import('next').NextConfig} */

const { EZTIMATE_QUICK_URL } = process.env;

module.exports = {
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: `/:path*`
      },
      {
        source: '/eztimate',
        destination: `${EZTIMATE_QUICK_URL}/eztimate`
      },
      {
        source: '/eztimate/:path*',
        destination: `${EZTIMATE_QUICK_URL}/eztimate/:path*`
      }
    ];
  }
};
