export function getSupabasePublicMediaURL({ filename, prefix = "" }: { filename?: string | null; prefix?: string | null }) {
  if (!filename) {
    return null;
  }

  const storageEndpoint = process.env.S3_ENDPOINT;
  const storageBucket = process.env.S3_BUCKET;

  if (!storageEndpoint || !storageBucket) {
    return null;
  }

  const publicBaseURL = storageEndpoint.replace("/storage/v1/s3", "/storage/v1/object/public");
  const objectPath = [prefix, encodeURIComponent(filename)].filter(Boolean).join("/");

  return `${publicBaseURL}/${storageBucket}/${objectPath}`;
}
