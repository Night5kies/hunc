'use client';

import { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import 'scroll-carousel/dist/scroll.carousel.min.css';
import { ResponsiveContainer, ResponsiveSection, ResponsiveCard } from '@/components';


const events = [ // Need at least 3 images per event for the scroll carousel to work properly
  {
    title: "Women's Week Collab",
    description:
      "A negotiation simulation based on diplomat Madeline Branch's experiences gave students hands-on practice and concluded with a discussion on her career and women in international policy.",
    images: [
      "/images/past_events/2025/women's week collab/womens-week-1.jpg",
      "/images/past_events/2025/women's week collab/womens-week-2.jpg",
      "/images/past_events/2025/women's week collab/womens-week-3.jpg",
      "/images/past_events/2025/women's week collab/womens-week-4.jpg",
      "/images/past_events/2025/women's week collab/womens-week-5.jpg",
      "/images/past_events/2025/women's week collab/womens-week-6.jpg",
    ],
  },
  {
    title: "Visitas 2025",
    description: "Welcome class of 2029!!!",
    images: [
      "/images/past_events/2025/visitas/visitas-1.jpg",
      "/images/past_events/2025/visitas/visitas-2.jpg",
      "/images/past_events/2025/visitas/visitas-3.jpg",
    ],
  },
  {
    title: "HUNC Info Session",
    description: "Food, drinks, an introduction to HUNC, and more!",
    images: [
      "/images/past_events/2025/info session/info-1.jpg",
      "/images/past_events/2025/info session/info-2.jpg",
      "/images/past_events/2025/info session/info-3.jpg",
    ],
  },
];

export default function PastEvents() {
    useEffect(() => {
        const init = async () => {
            const ScrollCarousel = (await import('scroll-carousel')).default;
            const elements = document.querySelectorAll('.my-carousel');

            elements.forEach((el) => {
                new ScrollCarousel(el, {
                    speed: 6,
                    smartSpeed: true,
                    autoplay: true,
                });
            });
        };

        if (typeof window !== 'undefined') {
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
                        key={idx}
                        className="w-full max-w-4xl mx-auto"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: idx * 0.2 }}
                    >
                        <ResponsiveCard variant="elevated" className="border border-gray-300">
                            <h2 className="text-xl sm:text-2xl font-semibold text-black mb-3">
                                {event.title}
                            </h2>
                            <p className="text-gray-700 text-base sm:text-lg mb-6">{event.description}</p>
                        <div className="my-carousel" data-scroll-carousel>
                            {event.images.map((src, i) => (
                                <div key={i} className="my-slide">
                                    <Image
                                        src={src}
                                        alt={`Event ${idx + 1} - Image ${i + 1}`}
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
