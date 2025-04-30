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
        <nav className="bg-black text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <Link href="/" className="text-xl font-bold">
                  Pop Records
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link href="/" className="hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
                    Home
                  </Link>
                  <Link href="/artists" className="hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
                    Artists
                  </Link>
                  <Link href="/distribute" className="hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
                    Distribute
                  </Link>
                  <Link href="/about" className="hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
                    About
                  </Link>
                  <Link href="/contact" className="hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <main>{children}</main>
        <footer className="bg-black text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Pop Records</h3>
                <p className="text-gray-300">Your music, worldwide.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><Link href="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
                  <li><Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
                  <li><Link href="/distribute" className="text-gray-300 hover:text-white">Distribution</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact</h3>
                <p className="text-gray-300">Email: info@poprecords.com</p>
                <p className="text-gray-300">Phone: (555) 123-4567</p>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-800 pt-8 text-center">
              <p className="text-gray-300">&copy; {new Date().getFullYear()} Pop Records. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
