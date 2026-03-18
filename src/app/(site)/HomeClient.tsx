"use client";

import Image from "next/image";
import { LazyMotion, domAnimation, motion } from "framer-motion";
import { ResponsiveContainer, ResponsiveSection, ResponsiveCard, NewsletterForm } from "@/components";
import HeroRotator from "@/components/HeroRotator";

export type HomePageData = {
  heroTitle: string;
  heroSubtitle: string;
  mission: string;
  ourWork: string;
  currentInitiativesHeading: string;
  initiatives: Array<{
    title: string;
    description: string;
  }>;
  partners: Array<{
    name: string;
    logoUrl: string;
    website?: string;
  }>;
};

export default function HomeClient({ data }: { data: HomePageData }) {
  const cardContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.14 } },
  };

  const cardItem = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <LazyMotion features={domAnimation}>
      <div className="min-h-screen bg-white text-white font-sans overflow-x-hidden">
        <header className="relative h-screen bg-black">
          <Image
            src="/images/Harvard_University_Widener_Library.jpg"
            alt="Harvard Widener Library"
            fill
            className="absolute inset-0 object-cover object-center opacity-20"
            unoptimized
          />
          <ResponsiveContainer className="relative z-10 flex flex-col items-center justify-center text-center h-full">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight">
                {data.heroTitle}
              </h1>
              <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-300 font-light">{data.heroSubtitle}</p>
              <HeroRotator />
            </motion.div>
          </ResponsiveContainer>
        </header>

        <div className="bg-white">
          <ResponsiveSection background="white" padding="md">
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <ResponsiveContainer maxWidth="5xl">
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  variants={cardContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <motion.div variants={cardItem}>
                    <ResponsiveCard variant="default" className="relative overflow-visible" padding="md">
                      <div className="absolute left-0 top-0 h-full w-2 bg-green-600 rounded-l-lg" aria-hidden="true" />
                      <div className="relative pl-4">
                        <h3 className="text-2xl sm:text-3xl font-semibold mb-3 border-b-2 border-green-600 inline-block">
                          Mission
                        </h3>
                        <p className="text-base sm:text-lg text-gray-600 leading-relaxed">{data.mission}</p>
                      </div>
                    </ResponsiveCard>
                  </motion.div>

                  <motion.div variants={cardItem}>
                    <ResponsiveCard variant="default" className="relative overflow-visible" padding="md">
                      <div className="absolute left-0 top-0 h-full w-2 bg-green-600 rounded-l-lg" aria-hidden="true" />
                      <div className="relative pl-4">
                        <h3 className="text-2xl sm:text-3xl font-semibold mb-3 border-b-2 border-green-600 inline-block">
                          Our Work
                        </h3>
                        <p className="text-base sm:text-lg text-gray-600 leading-relaxed">{data.ourWork}</p>
                      </div>
                    </ResponsiveCard>
                  </motion.div>
                </motion.div>
              </ResponsiveContainer>
            </motion.div>
          </ResponsiveSection>

          <ResponsiveSection background="white" padding="sm">
            <ResponsiveContainer maxWidth="2xl">
              <div className="w-full max-w-md mx-auto">
                <Image
                  src="/images/handshake.jpg"
                  alt="Handshake"
                  width={500}
                  height={500}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </ResponsiveContainer>
          </ResponsiveSection>

          <motion.section
            className="py-8 px-6 bg-white text-black relative"
            initial={{ x: "100%", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative ml-[15%] w-[70%]  p-8 rounded-lg overflow-visible">
              <div className="absolute left-0 top-0 h-full w-2 bg-green-600 rounded-l-lg" aria-hidden="true" />
              <div className="relative pl-4">
                <h2 className="subtitle">{data.currentInitiativesHeading || "Current Initiatives"}</h2>
                {data.initiatives.length > 0 ? (
                  data.initiatives.map((initiative, index) => (
                    <div key={`${initiative.title}-${index}`}>
                      <h3 className="bold-text ml-8">{initiative.title}</h3>
                      <p className="text-lg-paragraph">{initiative.description}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-lg-paragraph">Current initiatives are being updated. Check back soon.</p>
                )}
              </div>
            </div>
          </motion.section>

          <ResponsiveSection background="gray" padding="lg">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <ResponsiveContainer maxWidth="6xl">
                <div className="text-center mb-12">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 border-b-4 border-green-600 inline-block">
                    Our Partners
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto mt-4">
                    We collaborate with leading institutions to provide our members with unparalleled opportunities in
                    negotiation education and practice.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                  {data.partners.map((partner, i) => (
                    <motion.div
                      key={`${partner.name}-${i}`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 h-full flex flex-col items-center justify-center group">
                        <div className="relative w-full h-32 md:h-40 mb-4">
                          <Image
                            src={partner.logoUrl}
                            alt={partner.name}
                            fill
                            className="object-contain transition-transform duration-300 group-hover:scale-105"
                            unoptimized
                          />
                        </div>
                        {partner.website ? (
                          <a
                            href={partner.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-gray-600 text-center font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          >
                            {partner.name}
                          </a>
                        ) : (
                          <p className="text-sm text-gray-600 text-center font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {partner.name}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </ResponsiveContainer>
            </motion.div>
          </ResponsiveSection>

          <ResponsiveSection background="white" padding="md">
            <ResponsiveContainer maxWidth="2xl">
              <div className="text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 border-b-4 border-green-600 inline-block">
                  Stay Connected
                </h2>
                <NewsletterForm />
              </div>
            </ResponsiveContainer>
          </ResponsiveSection>
        </div>
      </div>
    </LazyMotion>
  );
}
