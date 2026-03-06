import type { CollectionConfig } from "payload";

export const ScheduleEvents: CollectionConfig = {
  slug: "schedule-events",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["month", "dateLabel", "title", "type", "image", "published"],
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
      name: "month",
      type: "select",
      required: true,
      options: [
        { label: "September", value: "September" },
        { label: "October", value: "October" },
        { label: "November", value: "November" },
        { label: "December", value: "December" },
      ],
    },
    {
      name: "sortOrder",
      type: "number",
      required: true,
      defaultValue: 100,
      admin: {
        description: "Lower values appear first.",
      },
    },
    {
      name: "dateLabel",
      type: "text",
      required: true,
    },
    {
      name: "time",
      type: "text",
    },
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "type",
      type: "select",
      required: true,
      options: [
        { label: "Session", value: "session" },
        { label: "Deadline", value: "deadline" },
        { label: "Social", value: "social" },
        { label: "Simulation", value: "simulation" },
        { label: "Speaker", value: "speaker" },
      ],
    },
    {
      name: "location",
      type: "text",
    },
    {
      name: "description",
      type: "textarea",
    },
    {
      name: "image",
      type: "relationship",
      relationTo: "media",
    },
  ],
};
