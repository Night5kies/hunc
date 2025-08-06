import Link from "next/link";
import { ResponsiveContainer, ResponsiveSection, ResponsiveCard } from '@/components';

export default function Schedule() { //TO BE UPDATED TO ACTUAL SCHEDULE
  return (
    <ResponsiveSection background="white" padding="lg">
      <ResponsiveContainer maxWidth="4xl">
        <div className="text-center">
          <ResponsiveCard variant="default" className="py-12 md:py-16 lg:py-20">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 border-b-4 border-green-600 inline-block">Coming Soon</h1>
            <p className="text-base sm:text-lg text-gray-700 mb-8">
              This page is still being finalized and will be added shortly.
            </p>
            <Link href="/" passHref>
              <div className="inline-block px-6 py-3 border-2 border-green-800 text-green-800 font-medium rounded-full hover:bg-green-800 hover:text-white transition-colors cursor-pointer">
                Return Home
              </div>
            </Link>   
          </ResponsiveCard>
        </div>
      </ResponsiveContainer>
    </ResponsiveSection>
  );
}
