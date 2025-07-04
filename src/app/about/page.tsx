'use client';

import { useState } from 'react';
import Image from 'next/image';
import { LazyMotion, domAnimation, motion, easeOut } from 'framer-motion';

export default function AboutPage() {
  type Member = {
    name: string;
    title: string;
    img: string;
    bio: string;
  };

  const [activeBio, setActiveBio] = useState<Member | null>(null);

  const sections = [
    {
      title: 'Exec',
      members: [
        {
          name: 'Hailee Youn',
          title: 'President',
          img: '/images/board/hailee.jpeg',
          bio: `Hailee Youn is a junior from Long Island, New York, studying Government and Economics. She competes on the Radcliffe Varsity Lightweight Rowing team and previously served as President of the Harvard-Radcliffe Asian American Association. Hailee’s favorite spot in Harvard Square is the Grolier Poetry Book Shop, which is the oldest all-poetry shop in the country!`,
        },
        {
          name: 'Alice Liang',
          title: 'President',
          img: '/images/board/alice.jpeg',
          bio: `Alice Liang is a sophomore in Mather House from Shanghai, China, concentrating in Government with a secondary in Theater, Dance & Media and pursuing a citation in Spanish. Beyond her involvement with HUNC, she is active in Harvard Undergraduate Women in Foreign Policy and the Harvard Curling Club. Alice has a passion for modern dance, physical theater, and exploring global theater traditions, and she enjoys playing table tennis in her free time.`,
        },
      ],
    },
    {
      title: 'Strategy',
      members: [
        {
          name: 'Emma Lucas',
          title: 'Strategy Chair',
          img: '/images/board/emma.jpeg',
          bio: `Emma Lucas is a second-year student at the College in the Social Studies and History of Science programs, along with a secondary in Comparative Literature. Having grown up in Austria, the US, and the UK, her passion for geography and geopolitics has followed her throughout her life. In addition to the strategy team, she is involved with the Undergraduate Architectural Society (HAUS) and the Science, Technology, and Society (STS) Fellowship at the Harvard Kennedy School.`,
        },
        {
          name: 'Heorhii Ambartsumov',
          title: 'Strategy Chair',
          img: '/images/board/heorhii.jpeg',
          bio: `Heorhii Ambartsumov is a sophomore studying physics and proudly residing in Lowell House. He is from Kyiv, Ukraine, but has been living in Toronto for the past two years. He spends most of his free time reading books and occasionally dreams about launching a startup.`,
        },
        {
          name: 'Rita Palácio',
          title: 'Strategy Chair',
          img: '/images/board/rita.jpeg',
          bio: `Rita Palácio is a sophomore in Mather House studying Government and Philosophy. She is from Portugal, and, outside of class, Rita can be found editing articles for the Harvard Undergraduate Law Review, singing karaoke with her PAFee in Weld, or playing the saxophone in the Jazz Combo Initiative.`,
        },
      ],
    },
    {
      title: 'Operations',
      members: [
        {
          name: 'Yahya Handulle',
          title: 'Member Affairs Chair',
          img: '/images/board/yahya.jpeg',
          bio: `Yahya Handulle is a sophomore in Quincy House, concentrating in Computer Science with a secondary in Earth and Planetary Sciences. Originally from London, he serves as Secretary for the Black Men's Forum and is involved in the Harvard Islamic Society, SWAN (Service With A Name), the PBHA, and FIP, Harvard's pre-orientation program for international students. He is passionate about social mobility, technology, and public service. In his free time, he enjoys Brazilian Jiu-Jitsu, traveling, and the outdoors.`,
        },
        {
          name: 'Maggie Peng',
          title: 'Finance Chair',
          img: '/images/board/maggie.jpeg',
          bio: `Maggie Peng is a junior in Adams from the New York suburbs studying Applied Math & Biology. On campus, she is involved in the Charles River Growth Fund, Harvard Undergraduate Capital Partners, and HSA Finance. She is a proud member of Blank Street Regulars, studies to house music, and loves art museums.`,
        },
        {
          name: 'Kevin McLeod',
          title: 'Tech Chair',
          img: '/images/board/kevin.jpeg',
          bio: `Kevin McLeod is a sophomore in Mather studying computer science and physics. His hometown is Albany, NY and the main things he likes to do are sports and music. For sports, he is part of the ultimate frisbee team at Harvard. For music, he can play multiple instruments and is part of the Harvard Asian American Dance Troupe. Some hobbies include: watching shows, trying new foods/restaurants, and cooking.`,
        },
        {
          name: 'Mollie Cheng',
          title: 'Communications Chair',
          img: '/images/board/mollie.jpeg',
          bio: `Mollie Cheng is a junior in Currier House concentrating in Economics with a secondary in Neuroscience and citation in Japanese. Originally from Taiwan, she is involved in the Taiwanese Cultural Society alongside various pre-professional and pre-law organizations on campus. In her free time, she enjoys painting and making pottery at the Harvard Ceramics studio.`,
        },
        {
          name: 'Sylvie Spitz',
          title: 'Communications Chair',
          img: '/images/board/sylvie.jpeg',
          bio: `Sylvie Spitz is a junior from Newton, Massachusetts. At Harvard, she studies psychology with an interest in social psychology and is a coxswain for the Radcliffe Varsity Lightweight Crew team. Previously, she has been part of the Alumni Relations Committee for Undergraduate Women in Harvard Athletics, as well as the Women in Business Marketing Committee. Outside of academics and athletics, Sylvie enjoys running, cooking, and spending time with friends.`,
        },
      ],
    },
  ];

  // Reusable “in-view” animation props
  const viewProps = {
    initial: { scale: 0.5, opacity: 0 },
    whileInView: { scale: 1, opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: easeOut },
  };

  return (
    <LazyMotion features={domAnimation}>
      {/* Outermost wrapper */}
      <motion.div
        className="bg-white text-black pt-36 pb-16 px-4"
        
      >
        {/* Page Intro */}
        <motion.div className="max-w-4xl mx-auto text-center mb-20" {...viewProps}>
          <motion.h1 className="page-title" {...viewProps}>
            About the Harvard Undergraduate Negotiation Club
          </motion.h1>
          <motion.p className="text-lg-paragraph" {...viewProps}>
            The Harvard Undergraduate Negotiation Club (HUNC) is dedicated to fostering the next
            generation of strategic thinkers, communicators, and leaders. Through simulations,
            workshops, and mentorship opportunities, HUNC equips students with practical negotiation
            skills and cultivates a community of individuals passionate about leadership,
            diplomacy, and collaborative problem-solving.
          </motion.p>
        </motion.div>

        {/* Board Member Sections */}
        {sections.map((section) => (
          <motion.div key={section.title} className="max-w-7xl mx-auto mb-16" {...viewProps}>
            <motion.h2 className="text-4xl font-bold mb-10 text-center" {...viewProps}>
              {section.title}
            </motion.h2>

            <motion.div className="flex flex-wrap justify-center gap-10" {...viewProps}>
              {[...section.members].map((member) => (
                <motion.article
                  key={member.name}
                  role="button"
                  tabIndex={0}
                  onClick={() => setActiveBio(member)}
                  className="w-72 group bg-white rounded-2xl shadow-xl ring-2 ring-gray-400 hover:ring-black transform transition duration-300 hover:scale-105 overflow-hidden cursor-pointer"
                  {...viewProps}
                >
                  <div className="relative h-64 w-full">
                    <Image
                      src={member.img}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-40 group-hover:opacity-60 transition-opacity" />
                    {/* Title overlay */}
                    <h2 className="absolute bottom-4 left-4 text-2xl font-semibold text-white drop-shadow-lg">
                      {member.name}
                    </h2>
                  </div>

                  <div className="p-3 border-t border-gray-100">
                    <p className="text-sm italic text-gray-600">{member.title}</p>
                  </div>
                </motion.article>
              ))}
            </motion.div>

          </motion.div>
        ))}

        {/* Faculty Advisor Section */}
        <motion.section
          className="py-15 px-6 text-black relative"
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="relative ml-[15%] w-[70%] bg-gray-100 p-8 rounded-lg overflow-visible">
            <div className="relative pl-4">
              <h2 className="subtitle">
                Faculty Advisor
              </h2>
              <Image
                src="/images/brian.jpg"
                alt="Brian Mandell"
                width={200}
                height={200}
              />
              <p className="text-lg-paragraph">
                Brian Mandell is the Mohamad Kamal Senior Lecturer in Negotiation and Public Policy,
                Vice Chair for Executive Education for the Program on Negotiation at Harvard Law
                School, and the Faculty Chair of the Negotiation and Conflict Resolution Collaboratory
                at the Harvard Kennedy School. His teaching and research emphasize third-party
                facilitation and consensus building in domestic and international protracted policy
                disputes. He is recognized for his ability to distill complicated theories into
                accessible insights, earning a reputation for his intellectually rigorous courses.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Active Bio Modal */}
        {activeBio && (
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-md backdrop-saturate-150 flex items-center justify-center z-50"
            onClick={() => setActiveBio(null)}
          >
            <motion.div
              className="bg-white min-h-[30%] ring-2 ring-gray-500 rounded-2xl p-6  max-w-4xl w-full relative flex flex-col md:flex-row gap-6"
              onClick={(e) => e.stopPropagation()}
              {...viewProps}
            >
              <motion.button
                onClick={() => setActiveBio(null)}
                className="absolute top-1 right-4 text-3xl hover:text-gray-600 cursor-pointer"
                {...viewProps}
              >
                &times;
              </motion.button>

              <motion.div className="w-full md:w-1/3 relative h-64 rounded-lg overflow-hidden" {...viewProps}>
                <Image src={activeBio.img} alt={activeBio.name} fill className="object-cover" />
              </motion.div>

              <motion.div className="w-full md:w-2/3" {...viewProps}>
                <motion.h3 className="subtitle" {...viewProps}>
                  {activeBio.name}
                </motion.h3>
                <motion.p className="bold-text" {...viewProps}>
                  {activeBio.title}
                </motion.p>
                <motion.p className="text-lg-paragraph" {...viewProps}>
                  {activeBio.bio}
                </motion.p>
              </motion.div>
            </motion.div> 
          </motion.div>
        )}
      </motion.div>
    </LazyMotion>
  );
}


