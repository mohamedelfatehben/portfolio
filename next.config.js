/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['scontent.forn1-2.fna.fbcdn.net']
  }
}

module.exports = nextConfig
