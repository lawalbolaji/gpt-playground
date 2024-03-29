/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["via.placeholder.com", "s.gravatar.com"],
  },
  output: "standalone",
};

module.exports = nextConfig;
