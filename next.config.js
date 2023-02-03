/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
};

/** contentlayer plugin */
const { withContentlayer } = require("next-contentlayer");

module.exports = withContentlayer(nextConfig);
