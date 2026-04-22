/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // untuk deployment static
  },
  output: 'standalone',
}

module.exports = nextConfig