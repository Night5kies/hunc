import type { CollectionConfig } from "payload";

export const PastEvents: CollectionConfig = {
  slug: "past-events",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "year", "sortOrder"],
  },
  versions: {
    drafts: true,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "year",
      type: "number",
      required: true,
      defaultValue: new Date().getFullYear(),
    },
    {
      name: "sortOrder",
      type: "number",
      required: true,
      defaultValue: 100,
    },
    {
      name: "description",
      type: "textarea",
      required: true,
    },
    {
      name: "images",
      type: "relationship",
      relationTo: "media",
      hasMany: true,
      required: true,
      minRows: 1,
    },
  ],
};
