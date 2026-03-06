import type { CollectionConfig } from "payload";

export const Partners: CollectionConfig = {
  slug: "partners",
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "sortOrder"],
  },
  versions: {
    drafts: true,
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "logo",
      type: "relationship",
      relationTo: "media",
      required: true,
    },
    {
      name: "website",
      type: "text",
    },
    {
      name: "sortOrder",
      type: "number",
      required: true,
      defaultValue: 100,
    },
  ],
};
