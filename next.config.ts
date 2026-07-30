import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Any straggling literal /hotels/... URL (cached HTML, external inbound
  // links) 301s to the R2 CDN now that the files no longer ship in the
  // deploy. next/image goes through lib/image-loader.js and never hits this.
  async redirects() {
    // Same prod fallback as lib/image-loader.js so straggling /hotels/... URLs
    // 301 to the R2 CDN even when NEXT_PUBLIC_IMAGE_CDN is unset on the host.
    const CDN =
      process.env.NEXT_PUBLIC_IMAGE_CDN || "https://citybreak.samnogroup.com";
    return [{ source: "/hotels/:path*", destination: `${CDN}/hotels/:path*`, permanent: true }];
  },
  images: {
    // Custom loader serves hotel photos from the Cloudflare R2 CDN (see
    // lib/image-loader.js + NEXT_PUBLIC_IMAGE_CDN). Pexels/Unsplash hero
    // images pass through the loader untouched, no remotePatterns needed.
    loader: "custom",
    loaderFile: "./lib/image-loader.js",
  },
};

export default nextConfig;
