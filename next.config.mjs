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
      "images.taboola.com",
      "tpc.googlesyndication.com",
    ],
  },
};

export default nextConfig;
