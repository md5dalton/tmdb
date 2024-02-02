/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'image.tmdb.org',
            // port: '',
            // pathname: '/my-bucket/**',
          },
          {
            protocol: 'https',
            hostname: 'media.themoviedb.org',
          },
        ],
      },
};

export default nextConfig;
