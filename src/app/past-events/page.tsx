'use client';

import { useEffect } from "react";
import Image from "next/image";
import 'scroll-carousel/dist/scroll.carousel.min.css';


const events = [
  {
    title: "Women's Week Collab",
    description:
      "A negotiation simulation based on diplomat Madeline Branch’s experiences gave students hands-on practice and concluded with a discussion on her career and women in international policy.",
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
    <div className="bg-white min-h-screen px-6 py-20">
      <header className="text-center mb-12">
        <h1 className="page-title">Past Events</h1>
      </header>

        <div className="space-y-12">
            {events.map((event, idx) => (
                <div
                    key={idx}
                    className="w-[80%] p-5 mx-auto border border-black bg-white rounded-2xl shadow-lg ring-2 ring-black overflow-hidden cursor-pointer"
                >
                    <h2 className="text-2xl font-semibold text-black mb-2">
                    {event.title}
                    </h2>
                    <p className="text-gray-700 text-base mb-4">{event.description}</p>
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

                </div>
            ))}
        </div>
    </div>
  );
}
