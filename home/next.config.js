/** @type {import('next').NextConfig} */

const { EZTIMATE_URL } = process.env

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
        destination: `${EZTIMATE_URL}/eztimate`,
      },
      {
        source: '/eztimate/:path*',
        destination: `${EZTIMATE_URL}/eztimate/:path*`,
      },
    ]
  },
}
