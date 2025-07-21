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
      "https://images.taboola.com",
      "https://c.ndtvimg.com/",
      "https://tpc.googlesyndication.com/simgad/16376712540458270881",
    ],
  },
};

export default nextConfig;
