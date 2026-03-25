import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.public.blob.vercel-storage.com', // Wildcard for all Vercel Blob stores
      },
    ],
    domains: [
      'www.roby-art.com', // Your domain
      // Add other domains if needed (e.g., 'localhost' for development)
    ],
  },
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
