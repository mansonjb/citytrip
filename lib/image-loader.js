// Custom next/image loader: rewrites local /hotels/... paths to the
// Cloudflare R2 public CDN (NEXT_PUBLIC_IMAGE_CDN, custom domain on the
// perfectcitybreak R2 bucket). Bypasses Vercel image optimization entirely
// (the CDN serves the pre-compressed files directly) so public/hotels can be
// dropped from the deploy. External absolute URLs (Pexels, Unsplash) pass
// through untouched.
// Fall back to the production R2 CDN domain, NOT an empty string: if
// NEXT_PUBLIC_IMAGE_CDN is missing on the host (e.g. not set on Vercel), hotel
// photos must still resolve to the R2 CDN rather than 404 against /hotels/...
// paths that no longer ship in the deploy.
const CDN_FALLBACK = "https://citybreak.samnogroup.com";
module.exports = function imageLoader({ src, width }) {
  if (/^https?:\/\//.test(src)) return src;
  const CDN = process.env.NEXT_PUBLIC_IMAGE_CDN || CDN_FALLBACK;
  if (CDN && src.startsWith("/hotels/")) {
    // R2 has no on-the-fly resize (unlike Supabase's transform API): width is
    // forwarded only to satisfy next/image's loader contract (silences the
    // "does not implement width" warning) and is otherwise ignored by the CDN.
    return `${CDN}${src}?w=${width}`;
  }
  return src;
};
