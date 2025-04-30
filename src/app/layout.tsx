import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pop Records - Music Distribution Platform",
  description: "Distribute your music worldwide with Pop Records",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="absolute top-0 left-0 right-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <Link href="/" className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  Pop Records
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link href="/" className="text-white/90 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-200">
                    Home
                  </Link>
                  <Link href="/artists" className="text-white/90 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-200">
                    Artists
                  </Link>
                  <Link href="/distribute" className="text-white/90 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-200">
                    Distribute
                  </Link>
                  <Link href="/about" className="text-white/90 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-200">
                    About
                  </Link>
                  <Link href="/contact" className="text-white/90 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-200">
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <main>{children}</main>
        <footer className="bg-gradient-to-b from-black to-purple-900/50 text-white py-8 border-t border-purple-500/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Pop Records</h3>
                <p className="text-gray-300">Your music, worldwide.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
                  <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
                  <li><Link href="/distribute" className="text-gray-300 hover:text-white transition-colors">Distribution</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact</h3>
                <p className="text-gray-300">Email: info@poprecords.com</p>
                <p className="text-gray-300">Phone: (555) 123-4567</p>
              </div>
            </div>
            <div className="mt-8 border-t border-purple-500/20 pt-8 text-center">
              <p className="text-gray-300">&copy; {new Date().getFullYear()} Pop Records. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
