/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  // This enables static optimization and reduces server-side execution
  poweredByHeader: false,
};

export default nextConfig;
