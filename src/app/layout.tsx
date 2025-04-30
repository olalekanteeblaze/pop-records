import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Navigation from "@/components/Navigation";

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
        <Navigation />
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
