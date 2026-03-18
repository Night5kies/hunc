import { getPayloadClient } from "@/lib/payload";
import AboutClient, { type AboutPageData } from "./AboutClient";

type MediaRaw = {
  url?: string | null;
  alt?: string | null;
};

type MemberRaw = {
  name?: string | null;
  title?: string | null;
  bio?: string | null;
  image?: MediaRaw | string | number | null;
};

type SectionRaw = {
  title?: string | null;
  members?: MemberRaw[] | null;
};

function WorkInProgress() {
  return (
    <section className="min-h-[60vh] px-6 py-20 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 border-b-4 border-green-600 inline-block text-black">
          About
        </h1>
        <p className="text-lg text-gray-700 mt-6">About page is a work in progress. Check back soon.</p>
      </div>
    </section>
  );
}

export default async function AboutPage() {
  try {
    const payload = await getPayloadClient();
    const about = await payload.findGlobal({
      slug: "about",
      depth: 1,
    });

    const sections = ((about.sections || []) as SectionRaw[])
      .map((section) => ({
        title: section.title || "Section",
        members: (section.members || [])
          .map((member) => {
            const image =
              member.image && typeof member.image === "object" && "url" in member.image && member.image.url
                ? {
                    url: member.image.url,
                    alt:
                      (typeof member.image.alt === "string" && member.image.alt) ||
                      `${member.name} headshot`,
                  }
                : null;

            return image && member.name && member.title && member.bio
              ? {
                  name: member.name,
                  title: member.title,
                  bio: member.bio,
                  image,
                }
              : null;
          })
          .filter((member): member is NonNullable<typeof member> => Boolean(member)),
      }))
      .filter((section) => section.members.length > 0);

    const advisorImage =
      about.facultyAdvisor?.image &&
      typeof about.facultyAdvisor.image === "object" &&
      "url" in about.facultyAdvisor.image &&
      about.facultyAdvisor.image.url
        ? {
            url: about.facultyAdvisor.image.url,
            alt:
              (typeof about.facultyAdvisor.image.alt === "string" && about.facultyAdvisor.image.alt) ||
              `${about.facultyAdvisor.name} headshot`,
          }
        : null;

    const data: AboutPageData = {
      introTitle: about.introTitle,
      introDescription: about.introDescription,
      sections,
      facultyAdvisor:
        about.facultyAdvisor?.name && about.facultyAdvisor?.bio
          ? {
              sectionTitle: about.facultyAdvisor.sectionTitle || "Faculty Advisor",
              name: about.facultyAdvisor.name,
              bio: about.facultyAdvisor.bio,
              image: advisorImage || undefined,
            }
          : null,
    };

    if (!data.introTitle || !data.introDescription) {
      return <WorkInProgress />;
    }

    return <AboutClient data={data} />;
  } catch {
    return <WorkInProgress />;
  }
}
