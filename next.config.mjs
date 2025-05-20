import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'www.roby-art.com', // Your domain
      // Add other domains if needed (e.g., 'localhost' for development)
    ],
  },
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
