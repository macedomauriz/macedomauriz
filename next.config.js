/** @type {import('next').NextConfig} */
const withOptimizedImages = require("next-optimized-images")

const nextConfig = {
  // svg throwing errors with
  // its optimization package:
  // imagemin-svgo
  handleImages: ["png", "jpeg", "svg", "jpg"],
  output: "export",
  trailingSlash: true,
  reactStrictMode: false,
  images: {
    unoptimized: true,
    disableStaticImages: true,
  },
}

module.exports = withOptimizedImages(nextConfig)
