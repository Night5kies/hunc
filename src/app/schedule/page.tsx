import Link from "next/link";
export default function Schedule() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="max-w-xl text-center pb-30">
        <h1 className="text-4xl font-semibold text-blac k mb-4">Coming Soon</h1>
        <p className="text-lg text-gray-700 mb-6">
          This page is still being finalized and will be added shortly.
        </p>
        <Link href="/" passHref>
          <div className="inline-block px-6 py-2 border-2 border-green-800 text-green-800 font-medium rounded-full hover:bg-green-800 hover:text-white transition cursor-pointer">
            Return Home
          </div>
        </Link>   
      </div>
    </div>
  );
}
