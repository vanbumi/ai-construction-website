/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // Untuk deployment static
  },
  output: 'standalone',
}

module.exports = nextConfig