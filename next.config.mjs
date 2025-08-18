// Bundle analyzer import
import bundleAnalyzer from "@next/bundle-analyzer";
import webpack from "webpack"; // Import webpack for ES modules

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
  openAnalyzer: true,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    implementation: "sass-embedded",
  },
  images: {
    // Updated to use remotePatterns instead of deprecated domains
    remotePatterns: [
      {
        protocol: "https",
        hostname: "c.ndtvimg.com",
      },
      {
        protocol: "https",
        hostname: "www.ndtv.com",
      },
      {
        protocol: "https",
        hostname: "ndtv.com",
      },
      {
        protocol: "https",
        hostname: "i.ndtvimg.com",
      },
      {
        protocol: "https",
        hostname: "drop.ndtv.com",
      },
      {
        protocol: "https",
        hostname: "images.taboola.com",
      },
      {
        protocol: "https",
        hostname: "tpc.googlesyndication.com",
      },
      {
        protocol: "https",
        hostname: "cmsapi.ndtv.net.in",
      },
      {
        protocol: "https",
        hostname: "ndtv-health.vercel.app",
      },
    ],
    // Add image optimization
    formats: ["image/webp", "image/avif"],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Performance optimizations
  experimental: {
    optimizePackageImports: ["react-icons", "lodash"],
    // Re-enabled CSS optimization now that issues are resolved
    optimizeCss: true,
    optimizeServerReact: true,
    serverMinification: true,
  },

  // Move turbo config to turbopack (new stable location)
  turbopack: {
    rules: {
      "*.svg": ["@svgr/webpack"],
    },
  },

  // Add compression
  compress: true,

  // Webpack configuration for better bundle splitting
  webpack: (config, { dev, isServer }) => {
    // Optimize bundle size in production
    if (!dev && !isServer) {
      // Advanced bundle splitting for React-DOM optimization
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: "all",
          minSize: 20000,
          maxSize: 200000, // Reduce max size for better splitting
          cacheGroups: {
            // React और React-DOM को separate chunks में split करें
            react: {
              test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
              name: "react-vendor",
              chunks: "all",
              priority: 50,
              enforce: true,
            },

            // Next.js framework को separate करें
            nextjs: {
              test: /[\\/]node_modules[\\/]next[\\/]/,
              name: "nextjs-vendor",
              chunks: "all",
              priority: 45,
              enforce: true,
            },

            // React Icons को separate करें (बहुत बड़ा हो सकता है)
            reactIcons: {
              test: /[\\/]node_modules[\\/]react-icons[\\/]/,
              name: "react-icons-vendor",
              chunks: "all",
              priority: 40,
              enforce: true,
            },

            // CSS libraries को separate करें
            styles: {
              test: /[\\/]node_modules[\\/].*\.(css|scss|sass)$/,
              name: "styles-vendor",
              chunks: "all",
              priority: 30,
              enforce: true,
            },

            // Taboola components को separate करें (screenshot में बड़े दिख रहे थे)
            taboola: {
              test: /[\\/]src[\\/]components[\\/].*[Tt]aboola.*\.jsx?$/,
              name: "taboola-components",
              chunks: "all",
              priority: 25,
              enforce: true,
            },

            // Other vendor libraries
            vendor: {
              test: /[\\/]node_modules[\\/](?!(react|react-dom|next|react-icons))/,
              name: "vendor",
              chunks: "all",
              priority: 20,
              enforce: true,
            },

            // Common components
            common: {
              name: "common",
              chunks: "all",
              minChunks: 2,
              priority: 10,
              reuseExistingChunk: true,
              enforce: true,
            },
          },
        },

        // Additional optimizations
        usedExports: true,
        sideEffects: false,

        // Better minimization
        minimizer: [...config.optimization.minimizer],
      };

      // Tree shaking for React और better aliases
      config.resolve.alias = {
        ...config.resolve.alias,
        // Add aliases for better tree shaking
        "@components": "/src/components",
        "@utils": "/src/Utils",
        "@styles": "/src/Styles",
      };

      // Module concatenation
      config.optimization.concatenateModules = true;

      // Add ignore patterns for unused modules (fixed for ES modules)
      config.plugins.push(
        new webpack.IgnorePlugin({
          resourceRegExp: /^\.\/locale$/,
          contextRegExp: /moment$/,
        })
      );
    }

    return config;
  },

  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
    // Add more compiler optimizations
    reactRemoveProperties: process.env.NODE_ENV === "production",
    styledComponents: true,
  },

  // Output configuration
  output: "standalone",

  // Experimental features for size reduction
  modularizeImports: {
    "react-icons": {
      transform: "react-icons/{{member}}",
    },
    lodash: {
      transform: "lodash/{{member}}",
    },
  },

  // Add headers for better caching
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  // Add redirects for performance
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "/api/:path*",
      },
    ];
  },
};

// Export with bundle analyzer wrapper
export default withBundleAnalyzer(nextConfig);
