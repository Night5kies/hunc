"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import "scroll-carousel/dist/scroll.carousel.min.css";
import { ResponsiveContainer, ResponsiveSection, ResponsiveCard } from "@/components";

export type PastEvent = {
  title: string;
  description: string;
  images: string[];
};

export default function PastEventsClient({ events }: { events: PastEvent[] }) {
  useEffect(() => {
    const init = async () => {
      const ScrollCarousel = (await import("scroll-carousel")).default;
      const elements = document.querySelectorAll(".my-carousel");

      elements.forEach((el) => {
        new ScrollCarousel(el, {
          speed: 6,
          smartSpeed: true,
          autoplay: true,
        });
      });
    };

    if (typeof window !== "undefined") {
      init();
    }
  }, []);

  return (
    <ResponsiveSection background="white" padding="lg">
      <ResponsiveContainer maxWidth="6xl">
        <header className="text-center mb-12">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 border-b-4 border-green-600 inline-block"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Past Events
          </motion.h1>
        </header>

        <div className="space-y-8 md:space-y-12">
          {events.map((event, idx) => (
            <motion.div
              key={`${event.title}-${idx}`}
              className="w-full max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <ResponsiveCard variant="elevated" className="border border-gray-300">
                <h2 className="text-xl sm:text-2xl font-semibold text-black mb-3">{event.title}</h2>
                <p className="text-gray-700 text-base sm:text-lg mb-6">{event.description}</p>
                <div className="my-carousel" data-scroll-carousel>
                  {event.images.map((src, imageIdx) => (
                    <div key={`${src}-${imageIdx}`} className="my-slide">
                      <Image
                        src={src}
                        alt={`${event.title} image ${imageIdx + 1}`}
                        width={300}
                        height={400}
                        className="rounded-lg object-cover h-[400px] w-auto"
                      />
                    </div>
                  ))}
                </div>
              </ResponsiveCard>
            </motion.div>
          ))}
        </div>
      </ResponsiveContainer>
    </ResponsiveSection>
  );
}
