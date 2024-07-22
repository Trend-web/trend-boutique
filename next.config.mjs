/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/',
            destination: '/main',
            permanent: false,
          },
        ];
      },
      images: {
        domains: ['drive.google.com'],
      },
};


export default nextConfig;
