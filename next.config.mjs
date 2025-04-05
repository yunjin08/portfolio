/** @type {import('next').NextConfig} */
import withBundleAnalyzer from '@next/bundle-analyzer';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

const analyzeBundle = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  experimental: {
    optimizeCss: true, // Enable CSS optimization
    optimizePackageImports: ["gsap", "three", "framer-motion"],
    workerThreads: true, // Enable worker threads for builds
    nextScriptWorkers: true, // Offload script execution to web workers
    optimizeServerReact: true, // Optimize React server components
    scrollRestoration: true,
  },

  webpack: (config, { isServer }) => {
    // Split chunks more aggressively
    config.optimization.splitChunks = {
      chunks: 'all',
      maxSize: 244 * 1024, // 244KB max chunk size
      minSize: 20 * 1024, // 20KB min chunk size
      cacheGroups: {
        heavy: {
          test: /[\\/]node_modules[\\/](three|gsap|framer-motion)[\\/]/,
          name: 'heavy-vendors',
          chunks: 'all',
          priority: 20,
        },
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
          priority: 10,
          reuseExistingChunk: true,
        },
      },
    };

    if (process.env.ANALYZE) {
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          reportFilename: isServer ? '../analyze/server.html' : './analyze/client.html',
        })
      );
    }

    return config;
  },

    // Add compression for generated files
  compress: true,

  // Enable SWC minification (faster than Terser)
  swcMinify: true,

  output: "standalone",
  // This enables static optimization and reduces server-side execution
  poweredByHeader: false,
  async redirects() {
    return [];
  },
  async rewrites() {
    return [];
  },

  headers: async () => [
    {
      source: '/_next/static/:path*',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable',
        },
      ],
    },
  ],
};
export default analyzeBundle(nextConfig);
