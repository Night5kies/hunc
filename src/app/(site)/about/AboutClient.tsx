"use client";

import { useState } from "react";
import Image from "next/image";
import { LazyMotion, domAnimation, motion, easeOut } from "framer-motion";
import { ResponsiveContainer, ResponsiveSection, ResponsiveCard } from "@/components";

type Member = {
  name: string;
  title: string;
  bio: string;
  image: {
    url: string;
    alt: string;
  };
};

export type AboutPageData = {
  introTitle: string;
  introDescription: string;
  sections: Array<{
    title: string;
    members: Member[];
  }>;
  facultyAdvisor: {
    sectionTitle: string;
    name: string;
    bio: string;
    image?: {
      url: string;
      alt: string;
    };
  } | null;
};

export default function AboutClient({ data }: { data: AboutPageData }) {
  const [activeBio, setActiveBio] = useState<Member | null>(null);

  const viewProps = {
    initial: { scale: 0.5, opacity: 0 },
    whileInView: { scale: 1, opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: easeOut },
  };

  return (
    <LazyMotion features={domAnimation}>
      <ResponsiveSection background="white" padding="lg">
        <ResponsiveContainer maxWidth="4xl">
          <motion.div className="text-center mb-16 md:mb-20" {...viewProps}>
            <motion.h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 border-b-4 border-green-600 inline-block" {...viewProps}>
              {data.introTitle}
            </motion.h1>
            <motion.p className="text-base sm:text-lg text-gray-600 leading-relaxed" {...viewProps}>
              {data.introDescription}
            </motion.p>
          </motion.div>
        </ResponsiveContainer>

        {data.sections.map((section) => (
          <ResponsiveContainer key={section.title} maxWidth="7xl">
            <motion.div className="mb-16 text-center" {...viewProps}>
              <motion.h2 className="text-3xl sm:text-4xl font-bold mb-8 md:mb-10 border-b-2 border-green-600 inline-block" {...viewProps}>
                {section.title}
              </motion.h2>

              <motion.div className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-10 max-w-6xl mx-auto" {...viewProps}>
                {section.members.map((member) => (
                  <motion.article
                    key={member.name}
                    role="button"
                    tabIndex={0}
                    onClick={() => setActiveBio(member)}
                    className="group bg-white rounded-2xl shadow-xl ring-2 ring-gray-400 hover:ring-black transform transition duration-300 hover:scale-105 overflow-hidden cursor-pointer w-56 sm:w-64 md:w-72 flex-shrink-0"
                    {...viewProps}
                  >
                    <div className="relative h-48 sm:h-56 md:h-64 w-full">
                      <Image src={member.image.url} alt={member.image.alt} fill className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-40 group-hover:opacity-60 transition-opacity" />
                      <h2 className="absolute bottom-4 left-4 right-4 text-lg sm:text-xl md:text-2xl font-semibold text-white drop-shadow-lg leading-tight">
                        {member.name}
                      </h2>
                    </div>

                    <div className="p-4 border-t border-gray-100 text-center">
                      <p className="text-sm font-medium text-gray-700">{member.title}</p>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            </motion.div>
          </ResponsiveContainer>
        ))}

        {data.facultyAdvisor && (
          <ResponsiveSection background="gray" padding="lg">
            <motion.div {...viewProps}>
              <ResponsiveContainer maxWidth="4xl">
                <ResponsiveCard variant="filled" className="relative overflow-visible">
                  <div className="relative pl-4">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 border-b-2 border-green-600 inline-block">
                      {data.facultyAdvisor.sectionTitle}
                    </h2>
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      {data.facultyAdvisor.image && (
                        <Image
                          src={data.facultyAdvisor.image.url}
                          alt={data.facultyAdvisor.image.alt}
                          width={200}
                          height={200}
                          className="rounded-lg shadow-md"
                        />
                      )}
                      <div>
                        <p className="text-xl font-semibold text-gray-900 mb-2">{data.facultyAdvisor.name}</p>
                        <p className="text-base sm:text-lg text-gray-600 leading-relaxed">{data.facultyAdvisor.bio}</p>
                      </div>
                    </div>
                  </div>
                </ResponsiveCard>
              </ResponsiveContainer>
            </motion.div>
          </ResponsiveSection>
        )}

        {activeBio && (
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-md backdrop-saturate-150 flex items-center justify-center z-50 p-4"
            onClick={() => setActiveBio(null)}
          >
            <motion.div
              className="bg-white min-h-[30%] ring-2 ring-gray-500 rounded-2xl p-4 md:p-6 max-w-4xl w-full relative flex flex-col md:flex-row gap-4 md:gap-6 max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
              {...viewProps}
            >
              <motion.button
                onClick={() => setActiveBio(null)}
                className="absolute top-2 right-4 text-2xl md:text-3xl hover:text-gray-600 cursor-pointer z-10"
                {...viewProps}
              >
                &times;
              </motion.button>

              <motion.div className="w-full md:w-1/3 relative h-48 md:h-64 rounded-lg overflow-hidden" {...viewProps}>
                <Image src={activeBio.image.url} alt={activeBio.image.alt} fill className="object-cover" />
              </motion.div>

              <motion.div className="w-full md:w-2/3" {...viewProps}>
                <motion.h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 border-b-2 border-green-600 inline-block" {...viewProps}>
                  {activeBio.name}
                </motion.h3>
                <motion.p className="text-xl sm:text-2xl font-semibold mb-3 text-green-600" {...viewProps}>
                  {activeBio.title}
                </motion.p>
                <motion.p className="text-base sm:text-lg text-gray-600 leading-relaxed" {...viewProps}>
                  {activeBio.bio}
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </ResponsiveSection>
    </LazyMotion>
  );
}
