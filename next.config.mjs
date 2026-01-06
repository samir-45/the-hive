const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // This will alow external domains
      },
    ],
  },
};

export default nextConfig;
