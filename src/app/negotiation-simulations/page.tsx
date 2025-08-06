"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { ResponsiveContainer, ResponsiveSection, ResponsiveCard } from '@/components';

type eventData = {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
};

const events = [
  {
    id: 1,
    title: 'Women in Diplomacy: The Art of Negotiation',
    imageUrl: '/images/negotiation_simulations/women_in_diplomacy.jpg',
    description: "During Women's Week, the Harvard Undergraduate Negotiation Club co-hosted an interactive diplomatic negotiation simulation with Harvard Undergraduate Women in Foreign Policy and Harvard Kennedy School’s Women in Defense, Diplomacy, and Development. Students engaged in a custom-designed simulation inspired by the real-world experiences of featured speaker Madeline Branch, a former U.S. State Department officer. The event offered hands-on experience with crisis management, foreign assistance, and press strategy, followed by a discussion in which Branch reflected on her diplomatic career and the role of women in international policy.",
  },
  {
    id: 2,
    title: 'River Widening',
    imageUrl: '/images/negotiation_simulations/river_widening.png',
    description: "An interactive simulation focused on a proposed river-widening project, where students represented a range of stakeholders with competing interests. Participants engaged in high-stakes negotiations involving environmental concerns, economic development, and community impact. The event offered a hands-on opportunity to navigate complex public policy challenges and build practical negotiation skills in a dynamic, multi-party setting.",
  },
  // ...more events
];

export default function NegotiationSimulations() {
  const [selectedEvent, setSelectedEvent] = useState<eventData | null>(null);

  const openModal = (event: eventData) => setSelectedEvent(event);
  const closeModal = () => setSelectedEvent(null);

  return (
    <LazyMotion features={domAnimation}>
      <ResponsiveSection background="white" padding="lg" className="min-h-screen bg-[url('/images/leavesbgl.png')] bg-cover bg-center">
        <ResponsiveContainer maxWidth="6xl">
          <header className="text-center mb-12">
            <m.h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 border-b-4 border-green-600 inline-block"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              Past Events
            </m.h1>
          </header>

          <m.div
            className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.2, duration: 0.8, ease: 'easeOut' }}
          >
            {[...events].sort((a, b) => b.id - a.id).map((event) => (
              <m.article
                key={event.id}
                role="button"
                tabIndex={0}
                onClick={() => openModal(event)}
                className="group bg-white rounded-2xl shadow-lg ring-2 ring-gray-500 hover:ring-black transform transition duration-300 hover:scale-105 overflow-hidden cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={event.imageUrl}
                    alt={event.title}
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-40 group-hover:opacity-60 transition-opacity" />
                  <h2 className="absolute bottom-4 left-4 text-2xl font-semibold text-white drop-shadow-lg">
                    {event.title}
                  </h2>
                </div>
                <div className="p-6 border-t border-gray-100">
                  <p className="text-lg-paragraph line-clamp-7">
                    {event.description}
                  </p>
                </div>
              </m.article>
            ))}
          </m.div>

          {selectedEvent && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4" onClick={closeModal}>
              <div className="bg-white ring-2 ring-gray-500 rounded-2xl overflow-hidden max-w-4xl w-full relative max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
                <button
                  onClick={closeModal}
                  className="absolute top-2 right-4 text-2xl md:text-3xl hover:text-gray-600 cursor-pointer z-10"
                >
                  &times;
                </button>
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-1/2 p-4 md:p-6 flex items-center justify-center">
                    <Image
                      src={selectedEvent.imageUrl}
                      alt={selectedEvent.title}
                      width={400}
                      height={300}
                      className="w-full h-auto max-h-80 rounded-lg object-cover"
                    />
                  </div>
                  <div className="w-full md:w-1/2 p-4 md:p-6 flex flex-col justify-center">
                    <h2 className="text-xl sm:text-2xl font-semibold mb-4">
                      {selectedEvent.title}
                    </h2>
                    <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                      {selectedEvent.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </ResponsiveContainer>
      </ResponsiveSection>
    </LazyMotion>
  );
}
