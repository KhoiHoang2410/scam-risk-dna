import type { NextConfig } from "next"

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
]

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }]
  },
  async redirects() {
    return [
      { source: "/results/:slug", destination: "/r/:slug", permanent: true },
      { source: "/archetypes/:slug", destination: "/r/:slug", permanent: true },
      { source: "/tips", destination: "/#rules", permanent: true },
      { source: "/resume", destination: "/", permanent: true },
    ]
  },
}

export default nextConfig
