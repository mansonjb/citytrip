// Custom next/image loader: rewrites local /hotels/... paths to the
// Cloudflare R2 public CDN (NEXT_PUBLIC_IMAGE_CDN, custom domain on the
// perfectcitybreak R2 bucket). Bypasses Vercel image optimization entirely
// (the CDN serves the pre-compressed files directly) so public/hotels can be
// dropped from the deploy. External absolute URLs (Pexels, Unsplash) pass
// through untouched.
module.exports = function imageLoader({ src, width }) {
  if (/^https?:\/\//.test(src)) return src;
  const CDN = process.env.NEXT_PUBLIC_IMAGE_CDN || "";
  if (CDN && src.startsWith("/hotels/")) {
    // R2 has no on-the-fly resize (unlike Supabase's transform API): width is
    // forwarded only to satisfy next/image's loader contract (silences the
    // "does not implement width" warning) and is otherwise ignored by the CDN.
    return `${CDN}${src}?w=${width}`;
  }
  return src;
};
