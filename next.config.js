/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ['192.168.1.5', 'localhost', '127.0.0.1'],
  
  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  
  // Use Turbopack with empty config (disable webpack conflicts)
  turbopack: {},
  
  // Performance headers
  headers: async () => [
    {
      source: '/:path*',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable'
        }
      ]
    }
  ]
};

module.exports = nextConfig;
