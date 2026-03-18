import type { CollectionAfterReadHook, CollectionConfig } from "payload";

import { getSupabasePublicMediaURL } from "../lib/getSupabasePublicMediaURL";

const syncSupabaseThumbnailURL: CollectionAfterReadHook = ({ doc }) => {
  const prefix = typeof doc?.prefix === "string" ? doc.prefix : "media";
  const thumbnailFilename = typeof doc?.sizes?.thumbnail?.filename === "string"
    ? doc.sizes.thumbnail.filename
    : null;

  const thumbnailURL = getSupabasePublicMediaURL({
    filename: thumbnailFilename,
    prefix,
  });

  if (thumbnailURL) {
    if (doc.sizes?.thumbnail) {
      doc.sizes.thumbnail.url = thumbnailURL;
    }

    doc.thumbnailURL = thumbnailURL;
  }

  return doc;
};

export const Media: CollectionConfig = {
  slug: "media",
  access: {
    read: () => true,
    create: ({ req }) => Boolean(req.user),
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },
  hooks: {
    afterRead: [syncSupabaseThumbnailURL],
  },
  upload: {
    staticDir: "media",
    imageSizes: [
      {
        name: "thumbnail",
        width: 400,
        height: 300,
        position: "centre",
      },
    ],
    adminThumbnail: "thumbnail",
    mimeTypes: ["image/*"],
  },
  fields: [
    {
      name: "alt",
      type: "text",
      required: true,
    },
  ],
};
