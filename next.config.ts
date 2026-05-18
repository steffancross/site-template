import { initOpenNextCloudflareForDev } from '@opennextjs/cloudflare';
import type { NextConfig } from 'next';

initOpenNextCloudflareForDev();

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  trailingSlash: false,
};

export default nextConfig;
