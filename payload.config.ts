import path from "path";
import { fileURLToPath } from "url";
import { buildConfig } from "payload";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { sqliteAdapter } from "@payloadcms/db-sqlite";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { s3Storage } from "@payloadcms/storage-s3";
import sharp from "sharp";

import { Users } from "./src/collections/Users";
import { Media } from "./src/collections/Media";
import { ScheduleEvents } from "./src/collections/ScheduleEvents";
import { PastEvents } from "./src/collections/PastEvents";
import { Partners } from "./src/collections/Partners";
import { NegotiationSimulations } from "./src/collections/NegotiationSimulations";
import { Home } from "./src/globals/Home";
import { About } from "./src/globals/About";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const databaseURL = process.env.DATABASE_URL;
const sqliteURL = process.env.DATABASE_URI || "file:./payload.db";
const storageBucket = process.env.S3_BUCKET;
const storageEndpoint = process.env.S3_ENDPOINT;
const storageAccessKeyId = process.env.S3_ACCESS_KEY_ID;
const storageSecretAccessKey = process.env.S3_SECRET_ACCESS_KEY;
const storageRegion = process.env.S3_REGION || "us-east-1";
const useS3Storage = Boolean(
  storageBucket && storageEndpoint && storageAccessKeyId && storageSecretAccessKey,
);
const supabasePublicStorageURL = storageEndpoint
  ? storageEndpoint.replace("/storage/v1/s3", "/storage/v1/object/public")
  : null;

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  editor: lexicalEditor(),
  collections: [Users, Media, ScheduleEvents, PastEvents, NegotiationSimulations, Partners],
  globals: [Home, About],
  plugins: [
    s3Storage({
      enabled: useS3Storage,
      bucket: storageBucket || "media",
      config: {
        credentials: {
          accessKeyId: storageAccessKeyId || "",
          secretAccessKey: storageSecretAccessKey || "",
        },
        endpoint: storageEndpoint,
        forcePathStyle: true,
        region: storageRegion,
      },
      collections: {
        media: {
          disableLocalStorage: true,
          disablePayloadAccessControl: true,
          generateFileURL: ({ filename, prefix = "" }) => {
            const objectPath = [prefix, encodeURIComponent(filename)].filter(Boolean).join("/");
            return `${supabasePublicStorageURL}/${storageBucket}/${objectPath}`;
          },
          prefix: "media",
        },
      },
    }),
  ],
  secret: process.env.PAYLOAD_SECRET || "dev-secret-change-me",
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, "src/payload-types.ts"),
  },
  db: databaseURL
    ? postgresAdapter({
        pool: {
          connectionString: databaseURL,
        },
      })
    : sqliteAdapter({
        client: {
          url: sqliteURL,
        },
      }),
});
