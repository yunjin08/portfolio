/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizeCss: true, // Enable CSS optimization
    optimizePackageImports: ["gsap", "three", "framer-motion"],
  },
  output: "standalone",
  // This enables static optimization and reduces server-side execution
  poweredByHeader: false,
  async redirects() {
    return [];
  },
  async rewrites() {
    return [];
  },
};

export default nextConfig;
