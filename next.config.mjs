/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "standalone",
  images: {
    domains: ["bit.ly"],
  },
  rewrites: async () => {
    return [
      {
        source: "/",
        destination: "/sign-in",
      },
    ];
  },
};

export default nextConfig;
