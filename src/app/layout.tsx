import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Harvard Undergraduate Negotiation Club",
  description: "Mastering Negotiation, Empowering Leaders",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-black">
        {/* Navigation Bar */}
        <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200 shadow-sm">
          <div className="max-w-7xl mx-auto flex justify-center items-center px-6 py-4 space-x-6">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/images/Logo.png"
                alt="Logo"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '48px', height: 'auto' }}
                unoptimized
              />
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex space-x-6 items-center text-medium font-medium">
              <Link href="/negotiation-simulations" className="text-gray-700 hover:text-green-600 transition-colors">Negotiation Simulations</Link>

              <div className="relative group">
                <span className="cursor-pointer text-gray-700 hover:text-green-600 transition-colors select-none">
                  Workshops
                </span>
                <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-lg rounded-md py-2 z-10 min-w-[12rem] border border-gray-200">
                  <Link href="/past-events" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Past Events</Link>
                  <Link href="/schedule" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Schedule</Link>
                </div>
              </div>

              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSe6x9w5dO3maWfYZUagEDEwQOPW0psdmCA0Jbz8tpm99bz-Jg/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-green-600 transition-colors"
              >
                Mentorship
              </a>
              <Link href="/about" className="text-gray-700 hover:text-green-600 transition-colors">About</Link>
              <Link href="/contact" className="text-gray-700 hover:text-green-600 transition-colors">Contact</Link>

              <a href="https://www.instagram.com/harvardundergradnegotiation/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <Image
                  src="/images/Instagram_Logo.png"
                  alt="Instagram"
                  width={20}
                  height={20}
                />
              </a>
              <a href="https://www.linkedin.com/company/harvard-negotiations/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <Image
                  src="/images/Linkedin_Logo.png"
                  alt="LinkedIn"
                  width={20}
                  height={20}
                />
              </a>
            </div>
          </div>
        </nav>

        {/* Page content */}
        <main className="pt-24 w-full">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-black text-white py-12 px-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
            <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Harvard Undergraduate Negotiation Club</p>
            <Link href="/about" className="hover:text-green-500 transition-colors">
              About
            </Link>
            <Link href="/contact" className="hover:text-green-500 transition-colors">
              Contact
            </Link>
            <a href="https://www.instagram.com/harvardundergradnegotiation/" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition-colors">
              Instagram
            </a>
            <a href="https://www.linkedin.com/company/harvard-negotiations/" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition-colors">
              LinkedIn
            </a>
          </div>
        </footer>

      </body>
    </html>
  );
}
