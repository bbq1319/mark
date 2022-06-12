/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: "/test:path*",
        destination: "/not-test:path*",
        permanent: false,
      },
    ];
  },

  async rewrites() {
    return [
      {
        source: "/api/userList",
        destination: `http://localhost:8080/api/v1/userList`,
      },
    ];
  },
};

module.exports = nextConfig;
