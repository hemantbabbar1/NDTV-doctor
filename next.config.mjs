/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    implementation: "sass-embedded",
  },
  images: {
    domains: [
      "c.ndtvimg.com",
      "www.ndtv.com",
      "ndtv.com",
      "i.ndtvimg.com",
      "drop.ndtv.com",
      "https://drop.ndtv.com/test/hk-ndtv/data/api/live-feed.json",
    ],
  },
};

export default nextConfig;
