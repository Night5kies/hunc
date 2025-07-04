'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { LazyMotion, domAnimation, motion } from 'framer-motion';

export default function Home() {
  return (
    // Wrap everything in LazyMotion so scroll/viewport features load
    <LazyMotion features={domAnimation}>
      <div className="min-h-screen bg-white text-white font-sans overflow-x-hidden">

        {/* Hero Section */}
        <header className="relative h-screen bg-black">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: "url('/images/Harvard_University_Widener_Library.jpg')" }}
          ></div>
          <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-0">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight w-full">
                Harvard Undergraduate Negotiation Club
              </h1>
              <p className="mt-4 text-lg md:text-xl w-full text-gray-300 font-light">
                Mastering Negotiation, Empowering Leaders
              </p>
            </motion.div>
          </div>
        </header>


        <div className="bg-white">
          {/* Mission Section */}
          <motion.section
            className="py-15 px-6 bg-white text-black relative"
            initial={{ x: '100%', opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="relative ml-[15%] w-[70%] bg-gray-100 p-8 rounded-lg overflow-visible">
              <div
                className="absolute left-0 top-0 h-full w-2 bg-green-600 rounded-l-lg"
                aria-hidden="true"
              />
              <div className="relative pl-4">
                <h2 className="subtitle">
                  Mission
                </h2>
                <p className='text-lg-paragraph'>
                  At the Harvard Undergraduate Negotiation Club, we believe negotiation is a fundamental
                  skill that extends beyond the boardroom—shaping careers, relationships, and leadership.
                  Our mission is to cultivate a generation of confident and strategic negotiators by providing
                  hands-on training, immersive experiences, and access to expert insights.
                </p>
              </div>
            </div>  
          </motion.section>

          {/* Our Work Section */}
          <motion.section
            className="py-15 px-6 bg-gray-100 text-black"
            initial={{ x: '-100%', opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="relative mr-[15%] ml-auto w-[70%] bg-white p-8 rounded-lg overflow-visible text-right">
              <div
                className="absolute right-0 top-0 h-full w-2 bg-green-600 rounded-r-lg"
                aria-hidden="true"
              />
              <div className="relative pr-4">
                <h2 className="subtitle">
                  Our Work
                </h2>
                <p className="text-lg-paragraph">
                  Through interactive workshops and realistic negotiation simulations, we offer students the
                  opportunity to apply theory to practice. Members role-play real-world scenarios, strengthening
                  their ability to communicate, think strategically, and lead effectively in a collaborative setting.
                </p>
              </div>
            </div>
          </motion.section>


          <div style={{ width: '30%', margin: '0 auto' }}>
                <Image
                  src="/images/Handshake.jpg"       // static import so Next.js knows the intrinsic size
                  alt="Handshake"
                  width={500}
                  height={500}
                  style={{
                    width: '100%',      // fill that 50%-wide container
                    height: 'auto',     // keep the original aspect ratio
                    display: 'block',   // ensure no extra inline spacing
                  }}
                />
              </div>

          <motion.section
            className="py-15 px-6 bg-white text-black relative"
            initial={{ x: '100%', opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="relative ml-[15%] w-[70%] bg-gray-100 p-8 rounded-lg overflow-visible">
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
          <motion.section
            className="py-15 px-6 bg-white text-black relative"
            initial={{ x: '100%', opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="relative mr-[15%] ml-auto w-[70%] bg-white p-8 rounded-lg overflow-visible text-right">
              <div
                className="absolute right-0 top-0 h-full w-2 bg-green-600 rounded-r-lg"
                aria-hidden="true"
              />

              <div className="relative pr-4">
                <h2 className="text-3xl md:text-4xl font-semibold mb-4 border-b-2 border-green-600 inline-block">
                  Our Partners
                </h2>

                <div className="flex w-full mt-6">
                  {['HLS_PON.png', 'FAS_HCWC.png', 'HKS_CPL.png', 'NTF.jpg'].map((src, i) => (
                    <div key={i} className="flex-1 mx-2 p-4 bg-white rounded-lg shadow">
                      <div className="relative w-full h-48">
                        <Image
                          src={`/images/${src}`}
                          alt={`Partner ${i + 1}`}
                          fill
                          className="object-contain"
                          unoptimized
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>
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