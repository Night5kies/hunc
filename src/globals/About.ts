import type { GlobalConfig } from "payload";

export const About: GlobalConfig = {
  slug: "about",
  label: "About Page",
  fields: [
    {
      name: "introTitle",
      type: "text",
      required: true,
      defaultValue: "About the Harvard Undergraduate Negotiation Club",
    },
    {
      name: "introDescription",
      type: "textarea",
      required: true,
      defaultValue:
        "The Harvard Undergraduate Negotiation Club (HUNC) is dedicated to fostering the next generation of strategic thinkers, communicators, and leaders.",
    },
    {
      name: "sections",
      type: "array",
      labels: {
        singular: "Section",
        plural: "Sections",
      },
      fields: [
        {
          name: "title",
          type: "text",
          required: true,
        },
        {
          name: "members",
          type: "array",
          labels: {
            singular: "Member",
            plural: "Members",
          },
          fields: [
            {
              name: "name",
              type: "text",
              required: true,
            },
            {
              name: "title",
              type: "text",
              required: true,
            },
            {
              name: "bio",
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
        },
      ],
    },
    {
      name: "facultyAdvisor",
      type: "group",
      fields: [
        {
          name: "sectionTitle",
          type: "text",
          required: true,
          defaultValue: "Faculty Advisor",
        },
        {
          name: "name",
          type: "text",
          required: true,
        },
        {
          name: "bio",
          type: "textarea",
          required: true,
        },
        {
          name: "image",
          type: "relationship",
          relationTo: "media",
        },
      ],
    },
  ],
};
