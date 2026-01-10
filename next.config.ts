import type { NextConfig } from "next"
// import withBundleAnalyzer from "@next/bundle-analyzer"

// const withAnalyzer = withBundleAnalyzer({ enabled: process.env.ANALYZE === "true" })
const nextConfig: NextConfig = {
  experimental: { viewTransition: true },
  allowedDevOrigins: ["localhost:3000"],

  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https" as const,
        hostname: "images.pexels.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  
  // Add headers for PDF files
  async headers() {
    return [
      {
        source: '/resume.pdf',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/pdf',
          },
          {
            key: 'Content-Disposition',
            value: 'attachment; filename="Radha_Gupta_Resume.pdf"',
          },
        ],
      },
    ]
  },
}

// export default withAnalyzer(nextConfig)

export default nextConfig
