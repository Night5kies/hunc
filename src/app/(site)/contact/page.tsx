import Link from "next/link";
import Image from "next/image";
import { ResponsiveContainer, ResponsiveSection, ResponsiveCard } from '@/components';

export default function ContactPage() {
  return (
    <ResponsiveSection background="white" padding="lg">
      <ResponsiveContainer maxWidth="2xl">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 border-b-4 border-green-600 inline-block">
            Contact Us
          </h1>

          <ResponsiveCard variant="default" className="space-y-6">
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Have questions, ideas, or want to collaborate? We&apos;d love to hear from you.
            </p>

            <div className="space-y-6">
              <div>
                <h2 className="text-sm font-semibold text-green-800 uppercase tracking-wide mb-2">
                  Email
                </h2>
                <a
                  href="mailto:harvardundergradnegotiation@gmail.com"
                  className="text-base sm:text-lg text-gray-600 hover:underline hover:text-green-600 transition-colors"
                >
                  harvardundergradnegotiation@gmail.com
                </a>
              </div>

              <div>
                <h2 className="text-sm font-semibold text-green-800 uppercase tracking-wide mb-2">
                  Instagram
                </h2>
                <a
                  href="https://instagram.com/harvardundergradnegotiation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base sm:text-lg text-gray-600 hover:underline hover:text-green-600 transition-colors"
                >
                  @harvardundergradnegotiation
                </a>
              </div>

              <div>
                <h2 className="text-sm font-semibold text-green-800 uppercase tracking-wide mb-2">
                  GroupMe
                </h2>
                <a
                  href="https://groupme.com/join_group/106017721/NEWHyg4X"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base sm:text-lg text-gray-600 hover:underline hover:text-green-600 transition-colors"
                >
                  <div className="flex items-center justify-center pt-2">
                    <Image 
                      src="/images/groupmeQRCode.jpg" 
                      alt="GroupMe" 
                      width={200} 
                      height={200}
                      className="rounded-lg shadow-md"
                    />
                  </div>
                </a>
              </div>
            </div>

            <div className="pt-6 text-center">
              <Link
                href="/"
                className="inline-block px-6 py-3 border-2 border-green-800 text-green-800 font-medium rounded-full hover:bg-green-800 hover:text-white transition-colors"
              >
                Return Home
              </Link>
            </div>
          </ResponsiveCard>
        </div>
      </ResponsiveContainer>
    </ResponsiveSection>
  );
}
