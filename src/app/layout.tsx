import type { Metadata } from "next";
import "./globals.css";
import { ResponsiveNavigation } from "@/components";

export const metadata: Metadata = {
  title: "Harvard Undergraduate Negotiation Club",
  description: "Mastering Negotiation, Empowering Leaders",
  icons: { icon: [{ url: '/icon.png?v=2' }] } 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-black">
        <ResponsiveNavigation />

        {/* Page content */}
        <main className="pt-16 md:pt-24 w-full">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-black text-white py-8 md:py-12 px-4 md:px-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
            <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Harvard Undergraduate Negotiation Club</p>
            <a href="/about" className="hover:text-green-500 transition-colors">
              About
            </a>
            <a href="/contact" className="hover:text-green-500 transition-colors">
              Contact
            </a>
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
