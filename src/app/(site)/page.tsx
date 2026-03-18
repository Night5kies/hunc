import { getPayloadClient } from "@/lib/payload";
import HomeClient, { type HomePageData } from "./HomeClient";

type InitiativeRaw = {
  title?: string | null;
  description?: string | null;
};

type PartnerLogoRaw = {
  url?: string | null;
};

type PartnerRaw = {
  name?: string | null;
  website?: string | null;
  logo?: PartnerLogoRaw | string | number | null;
};

const fallbackData: HomePageData = {
  heroTitle: "Harvard Undergraduate Negotiation Club",
  heroSubtitle: "Mastering Negotiation, Empowering Leaders",
  mission:
    "We believe negotiation is a foundational skill that shapes careers, relationships, and leadership. We cultivate confident, strategic negotiators through hands-on training and expert insight.",
  ourWork:
    "Through interactive workshops and realistic negotiation simulations, we offer students the opportunity to apply theory from the Harvard Principled Negotiation Method to practice.",
  currentInitiativesHeading: "Current Initiatives",
  initiatives: [],
  partners: [],
};

export default async function HomePage() {
  try {
    const payload = await getPayloadClient();
    const home = await payload.findGlobal({
      slug: "home",
      depth: 0,
    });
    const partnersResult = await payload.find({
      collection: "partners",
      where: {
        _status: {
          equals: "published",
        },
      },
      sort: "sortOrder",
      limit: 50,
      depth: 1,
    });

    const data: HomePageData = {
      heroTitle: home.heroTitle || fallbackData.heroTitle,
      heroSubtitle: home.heroSubtitle || fallbackData.heroSubtitle,
      mission: home.mission || fallbackData.mission,
      ourWork: home.ourWork || fallbackData.ourWork,
      currentInitiativesHeading: home.currentInitiativesHeading || "Current Initiatives",
      initiatives: ((home.initiatives || []) as InitiativeRaw[])
        .filter((initiative) => Boolean(initiative.title && initiative.description))
        .map((initiative) => ({
          title: initiative.title as string,
          description: initiative.description as string,
        })),
      partners: (partnersResult.docs as PartnerRaw[])
        .map((partner) => {
          const logo =
            partner.logo && typeof partner.logo === "object" && "url" in partner.logo && partner.logo.url
              ? partner.logo.url
              : null;

          if (!partner.name || !logo) {
            return null;
          }

          return {
            name: partner.name,
            logoUrl: logo,
            website: partner.website || undefined,
          };
        })
        .filter((partner): partner is NonNullable<typeof partner> => Boolean(partner)),
    };

    return <HomeClient data={data} />;
  } catch {
    return <HomeClient data={fallbackData} />;
  }
}
