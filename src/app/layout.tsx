import type { Metadata } from "next";
import Script from "next/script";
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
      <head>
        <Script id="mailerlite-universal" strategy="afterInteractive">
          {`
            (function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
            .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
            n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
            (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
            ml('account', '1904826');
          `}
        </Script>
      </head>
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
