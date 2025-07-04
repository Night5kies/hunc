"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { LazyMotion, domAnimation, m } from 'framer-motion';

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
      <div className="min-h-screen bg-[url('/images/leavesbgl.png')] bg-cover bg-center h-full w-full text-black">
        <main className="max-w-6xl mx-auto px-6 py-12">
          <header className="text-center mb-12">
            <m.h1
              className="page-title"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              Past Events
            </m.h1>
          </header>

          <m.div
            className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
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
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50 backdrop-blur-sm" onClick={closeModal}>
              <div className="bg-white ring-2 ring-gray-500 rounded-2xl overflow-hidden max-w-4xl w-full mx-4 relative" onClick={(e) => e.stopPropagation()}>
                <button
                  onClick={closeModal}
                  className="absolute top-1 right-4 text-3xl hover:text-gray-600 cursor-pointer"
                >
                  &times;
                </button>
                <div className="flex flex-col sm:flex-row">
                  <div className="sm:w-1/2 p-6 flex items-center justify-center">
                    <Image
                      src={selectedEvent.imageUrl}
                      alt={selectedEvent.title}
                      className="max-h-140 rounded-lg"
                    />
                  </div>
                  <div className="sm:w-1/2 p-6 flex flex-col justify-center">
                    <h2 className="text-2xl font-semibold mb-4">
                      {selectedEvent.title}
                    </h2>
                    <p className="text-lg-paragraph">
                      {selectedEvent.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </LazyMotion>
  );
}
