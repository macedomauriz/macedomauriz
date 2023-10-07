/** @type {import('next').NextConfig} */
const withOptimizedImages = require("next-optimized-images")

const customImageHandling = {
  handleImages: ["png", "jpeg", "svg", "jpg"],
}

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

const mergedConfig = {
  ...nextConfig,
  ...customImageHandling,
}

module.exports = withOptimizedImages(nextConfig)
