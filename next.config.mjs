/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // active tailwind ssr
    optimizeCss: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: 'preodemo.gumlet.io',
        protocol: 'https',
      },
    ],
  },
};

export default nextConfig;
