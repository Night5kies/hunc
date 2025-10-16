'use client';

import { LazyMotion, domAnimation, m } from 'framer-motion';
import { ResponsiveContainer, ResponsiveSection, ResponsiveCard } from '@/components';

interface Event {
  date: string;
  time?: string;
  title: string;
  type: 'session' | 'deadline' | 'social' | 'simulation' | 'speaker';
  location?: string;
  description?: string;
}

const events: Record<string, Event[]> = {
  'September': [
    {
      date: 'Sept 18',
      time: 'Thursday Night',
      title: "Negotiation Terminologies with Hailee",
      type: 'session',
    },
    {
      date: 'Sept 19',
      title: 'Board Application Due',
      type: 'deadline',
    },
    {
      date: 'Sept 25',
      time: '8:00 PM',
      title: 'Game Night Social',
      type: 'social',
      location: "Hailee's Room",
      description: 'Join us for Secret Hitler, Monopoly, and Avalon!'
    },
  ],
  'October': [
    {
      date: 'Oct 9',
      title: 'First Simulation with Rita',
      type: 'simulation',
    },
    {
      date: 'Oct 15',
      time: '6:00 PM',
      title: 'River Widening Simulation',
      type: 'simulation',
      description: 'In collaboration with IOP Global Affairs'
    },
    {
      date: 'Oct 23',
      title: 'Simulation with George',
      type: 'simulation',
    },
  ],
  'November': [
    {
      date: 'Nov 6',
      title: 'Core Principles Workshop & Social',
      type: 'session',
      description: 'Emma and George present "Separate the People from the Problem" and "Insist on Objective Criteria". Followed by Wine, Apple Cider, and Cheeseboard social with an Art Museum Auction simulation by Alice.'
    },
    {
      date: 'Nov 13',
      title: 'Speaker Event',
      type: 'speaker',
      description: "Special guest speaker: Emma's father"
    },
    {
      date: 'Nov 20',
      title: 'Advanced Principles Workshop',
      type: 'session',
      description: 'Rita and Alice present "Focus on Interests, Not Positions" and "Invent Options for Mutual Gain"'
    },
  ],
};

const typeColors = {
  session: 'bg-green-100 text-green-800',
  deadline: 'bg-red-100 text-red-800',
  social: 'bg-blue-100 text-blue-800',
  simulation: 'bg-purple-100 text-purple-800',
  speaker: 'bg-yellow-100 text-yellow-800',
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Schedule() {
  return (
    <LazyMotion features={domAnimation}>
      <ResponsiveSection background="white" padding="lg" className="min-h-screen relative">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-white" />
        
        <ResponsiveContainer maxWidth="4xl" className="relative">
          <m.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 border-b-4 border-green-600 inline-block">
              Fall 2025 Schedule
            </h1>
          </m.div>

          <div className="space-y-12">
            {Object.entries(events).map(([month, monthEvents], monthIndex) => (
              <m.section
                key={month}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                transition={{ staggerChildren: 0.1, delayChildren: monthIndex * 0.1 }}
                className="space-y-6"
              >
                <m.h2 
                  variants={cardVariants}
                  className="text-2xl md:text-3xl font-semibold text-gray-800 border-l-4 border-green-600 pl-4"
                >
                  {month}
                </m.h2>
                
                <div className="grid gap-4 md:gap-6">
                  {monthEvents.map((event, index) => (
                    <m.div key={`${event.date}-${index}`} variants={cardVariants}>
                      <ResponsiveCard
                        variant="default"
                        className="transform transition hover:scale-[1.02] hover:shadow-lg"
                      >
                        <div className="flex flex-col md:flex-row md:items-center gap-4">
                          <div className="flex-shrink-0 md:w-48">
                            <div className="text-lg font-semibold text-gray-900">
                              {event.date}
                              {event.time && (
                                <div className="text-sm font-normal text-gray-600">
                                  {event.time}
                                </div>
                              )}
                            </div>
                          </div>
                          
                          <div className="flex-grow">
                            <div className="flex flex-col md:flex-row md:items-center gap-2">
                              <h3 className="text-xl font-medium text-gray-900">
                                {event.title}
                              </h3>
                              <span className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${typeColors[event.type]}`}>
                                {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                              </span>
                            </div>
                            
                            {(event.location || event.description) && (
                              <div className="mt-2 text-gray-600">
                                {event.location && (
                                  <p className="text-sm font-medium">
                                    📍 {event.location}
                                  </p>
                                )}
                                {event.description && (
                                  <p className="text-sm mt-1">
                                    {event.description}
                                  </p>
                                )}
                              </div>
                            )}
                          </div>
                        </div>
                      </ResponsiveCard>
                    </m.div>
                  ))}
                </div>
              </m.section>
            ))}
          </div>

          {/* Future Events Section */}
          <m.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-16 pt-12 border-t-2 border-green-100"
          >
            <m.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6 flex items-center gap-3"
            >
              <span className="text-green-600">✧</span>
              Initiatives in Development
              <span className="text-green-600">✧</span>
            </m.h2>

            <div className="grid gap-4 md:gap-6">
              <ResponsiveCard
                variant="default"
                className="border-2 border-green-100 bg-gradient-to-r from-green-50/50 to-white"
              >
                <div className="flex flex-col gap-6">
                  <div className="space-y-4">
                    {[
                      {
                        title: "Intellectual Vitality Proposal",
                        description: "Developing a comprehensive proposal to enhance intellectual discourse through negotiation practice."
                      },
                      {
                        title: "Center of Ethics Collaboration",
                        description: "Upcoming partnership focusing on 'Navigating Difficult Conversations' - exploring the intersection of ethics and negotiation."
                      }
                    ].map((initiative, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <span className="text-green-600 mt-1">▹</span>
                        <div>
                          <h3 className="text-lg font-medium text-gray-900">
                            {initiative.title}
                          </h3>
                          <p className="text-sm text-gray-600 mt-1">
                            {initiative.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ResponsiveCard>
            </div>
          </m.div>
        </ResponsiveContainer>
      </ResponsiveSection>
    </LazyMotion>
  );
}
