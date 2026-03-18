import type { GlobalConfig } from "payload";

export const Home: GlobalConfig = {
  slug: "home",
  label: "Home Page",
  fields: [
    {
      name: "heroTitle",
      type: "text",
      required: true,
      defaultValue: "Harvard Undergraduate Negotiation Club",
    },
    {
      name: "heroSubtitle",
      type: "text",
      required: true,
      defaultValue: "Mastering Negotiation, Empowering Leaders",
    },
    {
      name: "mission",
      type: "textarea",
    },
    {
      name: "ourWork",
      type: "textarea",
    },
    {
      name: "currentInitiatives",
      type: "textarea",
    },
    {
      name: "currentInitiativesHeading",
      type: "text",
      defaultValue: "Current Initiatives",
    },
    {
      name: "initiatives",
      type: "array",
      labels: {
        singular: "Initiative",
        plural: "Initiatives",
      },
      fields: [
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
      ],
    },
  ],
};
