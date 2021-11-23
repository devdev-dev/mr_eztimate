/** @type {import('next').NextConfig} */

const { EZTIMATE_QUICK_URL } = process.env

module.exports = {
  reactStrictMode: true,  
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: `/:path*`,
      },
      {
        source: '/eztimate',
        destination: `${EZTIMATE_QUICK_URL}/eztimate`,
      },
      {
        source: '/eztimate/:path*',
        destination: `${EZTIMATE_QUICK_URL}/eztimate/:path*`,
      },
    ]
  },
}
