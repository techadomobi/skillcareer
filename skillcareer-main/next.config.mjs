/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
    
     
      {
        protocol: 'https',
        hostname: 'click.creditsdeal.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;