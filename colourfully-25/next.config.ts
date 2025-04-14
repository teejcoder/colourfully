import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    CLOUD_NAME: process.env.CLOUD_NAME,
    CLOUD_API_KEY: process.env.CLOUD_API_KEY,
    CLOUD_API_SECRET: process.env.CLOUD_API_SECRET,
    MS_COMPUTER_VISION_SUBSCRIPTION_KEY: process.env.MS_COMPUTER_VISION_SUBSCRIPTION_KEY,
    MS_COMPUTER_VISION_ENDPOINT: process.env.MS_COMPUTER_VISION_ENDPOINT,
  },
};

export default nextConfig;
