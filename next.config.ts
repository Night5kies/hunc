import type { NextConfig } from "next";
import { withPayload } from "@payloadcms/next/withPayload";

const remotePatterns: NonNullable<NextConfig["images"]>["remotePatterns"] = [
  {
    protocol: "https",
    hostname: "**.supabase.co",
  },
];

if (process.env.S3_ENDPOINT) {
  const endpoint = new URL(process.env.S3_ENDPOINT);
  remotePatterns.push({
    protocol: endpoint.protocol.replace(":", "") as "http" | "https",
    hostname: endpoint.hostname,
    port: endpoint.port || undefined,
    pathname: "/**",
  });
}

const nextConfig: NextConfig = {
  images: {
    remotePatterns,
  },
};

export default withPayload(nextConfig);
