import Link from "next/link";
import Image from "next/image";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-black px-6 pt-36 pb-16">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="page-title">
          Contact Us
        </h1>

        <div className="space-y-6  rounded-2xl p-8 pt-5 ">
          <p className="text-lg-paragraph">
            Have questions, ideas, or want to collaborate? We’d love to hear from you.
          </p>

          <div className="space-y-3">
            <div>
              <h2 className="text-sm font-semibold text-green-800 uppercase tracking-wide mb-1">
                Email
              </h2>
              <a
                href="mailto:harvardundergradnegotiation@gmail.com"
                className="text-lg-paragraph hover:underline"
              >
                harvardundergradnegotiation@gmail.com
              </a>
            </div>

            <div>
              <h2 className="text-sm font-semibold text-green-800 uppercase tracking-wide mb-1">
                Instagram
              </h2>
              <a
                href="https://instagram.com/harvardundergradnegotiation"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg-paragraph hover:underline"
              >
                @harvardundergradnegotiation
              </a>
            </div>
          </div>

          <div>
              <h2 className="text-sm font-semibold text-green-800 uppercase tracking-wide mb-1">
                GroupMe
              </h2>
              <a
                href="https://groupme.com/join_group/106017721/NEWHyg4X"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg-paragraph hover:underline"
              >
              <div className="flex items-center justify-center pt-2">
                <Image src="/images/groupmeQRCode.jpg" alt="GroupMe" width={200} height={200}/>
              </div>
              </a>
            </div>

          <div className="pt-6 text-center">
            <Link
              href="/"
              className="inline-block px-6 py-2 border-2 border-green-800 text-green-800 font-medium rounded-full hover:bg-green-800 hover:text-white transition"
            >
              Return Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
