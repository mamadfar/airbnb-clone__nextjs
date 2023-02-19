/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["links.papareact.com"]
  },
  env: {
    AIR_MAP_STYLE: process.env.AIR_MAP_STYLE,
    AIR_MAP_TOKEN: process.env.AIR_MAP_TOKEN
  }
}

module.exports = nextConfig
