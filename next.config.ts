import type { NextConfig } from "next";

// Security headers applied to every response. HSTS is already set by Vercel,
// so we don't duplicate it here.
const securityHeaders = [
  // Stop browsers from MIME-sniffing responses away from the declared type.
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Send only the origin (not the full URL) on cross-origin navigations.
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Refuse to be embedded in any iframe — clickjacking defence. Modern browsers
  // also honour CSP `frame-ancestors`, but X-Frame-Options is universally
  // supported and zero-cost.
  { key: "X-Frame-Options", value: "DENY" },
  // Lock down browser features we never need.
  {
    key: "Permissions-Policy",
    value:
      "camera=(), microphone=(), geolocation=(), gyroscope=(), magnetometer=(), payment=(), usb=(), interest-cohort=()",
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
