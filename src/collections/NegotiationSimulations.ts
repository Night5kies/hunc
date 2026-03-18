import type { CollectionConfig } from "payload";

export const NegotiationSimulations: CollectionConfig = {
  slug: "negotiation-simulations",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "sortOrder", "published"],
  },
  versions: {
    drafts: true,
  },
  fields: [
    {
      name: "published",
      type: "checkbox",
      defaultValue: true,
      required: true,
    },
    {
      name: "sortOrder",
      type: "number",
      required: true,
      defaultValue: 100,
    },
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "textarea",
      required: true,
    },
    {
      name: "image",
      type: "relationship",
      relationTo: "media",
      required: true,
    },
  ],
};
