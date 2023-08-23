/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'build',
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "**",
          },
        ],
      },
    headers: async () => {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY', // Prevent content from being displayed in a frame
          },
        ],
      },
    ];
  },
}

module.exports = nextConfig
