'use client';

import React from 'react';
import Image from 'next/image';
import { LazyMotion, domAnimation, motion } from 'framer-motion';
import { ResponsiveContainer, ResponsiveSection, ResponsiveCard } from '@/components';
import HeroRotator from '@/components/HeroRotator';

export default function Home() {
  const cardContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.14 } },
  };

  const cardItem = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    // Wrap everything in LazyMotion so scroll/viewport features load
    <LazyMotion features={domAnimation}>
      <div className="min-h-screen bg-white text-white font-sans overflow-x-hidden">

        {/* Hero Section */}
        <header className="relative h-screen bg-black">
          {/* use Next/Image fill with object-cover so the photo always scales proportionally to cover the header */}
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
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight">
                Harvard Undergraduate Negotiation Club
              </h1>
              <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-300 font-light">
                Mastering Negotiation, Empowering Leaders
              </p>
              <HeroRotator />
            </motion.div>
          </ResponsiveContainer>
        </header>


        <div className="bg-white">
          <ResponsiveSection background="white" padding="md">
            <motion.div
              initial={{ x: '100%', opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <ResponsiveContainer maxWidth="5xl">
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-3 gap-6"
                  variants={cardContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  {/* Mission Card */}
                  <motion.div variants={cardItem}>
                    <ResponsiveCard variant="default" className="relative overflow-visible" padding="md">
                      <div
                        className="absolute left-0 top-0 h-full w-2 bg-green-600 rounded-l-lg"
                        aria-hidden="true"
                      />
                      <div className="relative pl-4">
                        <h3 className="text-2xl sm:text-3xl font-semibold mb-3 border-b-2 border-green-600 inline-block">
                          Mission
                        </h3>
                        <p className='text-base sm:text-lg text-gray-600 leading-relaxed'>
                          We believe negotiation is a foundational skill that shapes careers, relationships, and leadership. We cultivate confident, strategic negotiators through hands-on training and expert insight.
                        </p>
                      </div>
                    </ResponsiveCard>
                  </motion.div>

                  {/* Our Work Card */}
                  <motion.div variants={cardItem}>
                    <ResponsiveCard variant="default" className="relative overflow-visible" padding="md">
                      <div
                        className="absolute left-0 top-0 h-full w-2 bg-green-600 rounded-l-lg"
                        aria-hidden="true"
                      />
                      <div className="relative pl-4">
                        <h3 className="text-2xl sm:text-3xl font-semibold mb-3 border-b-2 border-green-600 inline-block">
                          Our Work
                        </h3>
                        <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                          Through interactive workshops and realistic negotiation simulations, we offer students the opportunity to apply theory from the Harvard Principled Negotiation Method to practice.
                        </p>
                      </div>
                    </ResponsiveCard>
                  </motion.div>

                  {/* Current Initiatives Card */}
                  <motion.div variants={cardItem}>
                    <ResponsiveCard variant="elevated" className="relative overflow-visible" padding="md">
                      <div
                        className="absolute left-0 top-0 h-full w-2 bg-green-600 rounded-l-lg"
                        aria-hidden="true"
                      />
                      <div className="relative pl-4">
                        <h3 className="text-2xl sm:text-3xl font-semibold mb-3 border-b-2 border-green-600 inline-block">
                          Current Initiatives
                        </h3>
                        <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                          We&apos;re building internship partnerships and advocating for undergraduate negotiation curriculum. Recent wins include promising internship conversations and a planned General Education course for Fall 2026.
                        </p>
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
            initial={{ x: '100%', opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="relative ml-[15%] w-[70%]  p-8 rounded-lg overflow-visible">
              <div
                className="absolute left-0 top-0 h-full w-2 bg-green-600 rounded-l-lg"
                aria-hidden="true"
              />
              <div className="relative pl-4">
                <h2 className="subtitle">
                  Current Initiatives
                </h2>
                <h3 className="bold-text ml-8">
                  New Internship Collaborations
                </h3>
                <p className="text-lg-paragraph">
                  We&apos;ve been working to find internships opportunities for our members that complete our negotiation training program throughout the semester. Currently, we are in promising conversations with a Harvard Law School-based program and UK-based negotiation consulting firm to take on interns from our club startin next semester!
                </p>
                <h3 className="bold-text ml-8">
                  Negotiation Curriculum Coming to the College!
                </h3>
                <p className="text-lg-paragraph">
                  We recently communicated with the College Academic Dean to advocate for negotiation education at the undergraduate level. We&apos;re excited to share that a General Education course on Negotiation is confirmed for Fall 2026! The Dean has added this to her priority list, and we’re continuing conversations about collaboration opportunities in third spaces around the College.

                </p>
                
              </div>
            </div>
          </motion.section>


          {/* Partners Section */}
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
                    We collaborate with leading institutions to provide our members with unparalleled opportunities in negotiation education and practice.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                  {[
                    { src: 'HLS_PON.png', name: 'Harvard Law School Program on Negotiation' },
                    { src: 'FAS_HCWC.png', name: 'Harvard College Writing Center' },
                    { src: 'HKS_CPL.png', name: 'Harvard Kennedy School Center for Public Leadership' },
                    { src: 'NTF.jpg', name: 'Negotiation Task Force' }
                  ].map((partner, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 h-full flex flex-col items-center justify-center group">
                        <div className="relative w-full h-32 md:h-40 mb-4">
                          <Image
                            src={`/images/${partner.src}`}
                            alt={partner.name}
                            fill
                            className="object-contain transition-transform duration-300 group-hover:scale-105"
                            unoptimized
                          />
                        </div>
                        <p className="text-sm text-gray-600 text-center font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {partner.name}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </ResponsiveContainer>
            </motion.div>
          </ResponsiveSection>
        </div>





        

      </div>
    </LazyMotion>
  );
}





{/* 
  Things to add


  Club Updates
We're officially registered for next semester!
Our registration form has been approved, and we’re confirmed to participate in the Student Organizations Fair on September 5th. Mark your calendars!

New Faculty Advisor: Professor Brian Mandell
We are thrilled to announce that Professor Brian Mandell from the Harvard Kennedy School will be joining us as our faculty advisor. Professor Mandell has taught negotiation for over 30 years at HKS and is a widely respected expert in the field. Fun fact: he taught Dr. Arvid Bell, our former advisor, who will now continue supporting us in a consulting role.

Negotiation Curriculum Coming to the College!
We recently communicated with the College Academic Dean to advocate for negotiation education at the undergraduate level. We're excited to share that a General Education course on Negotiation is confirmed for Fall 2026! The Dean has added this to her priority list, and we’re continuing conversations about collaboration opportunities in third spaces around the College.

New Internship Collaborations in the Works
We’ve also had promising conversations with two potential partners:

A Harvard Law School-based program

A UK-based negotiation consulting firm that works directly with clients
Both are interested in taking interns from our club starting next semester—we’re working on finalizing these opportunities, so stay tuned!


  
  */}