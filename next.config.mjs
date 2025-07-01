// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'flipr-assignm.onrender.com/',
//         pathname: '/storage/**',
//       },
//     ],
//   },
// }

// export default nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'flipr-assignm.onrender.com',
        pathname: '/storage/**', // if all images are under /storage
      },
    ],
  },
};

export default nextConfig;
