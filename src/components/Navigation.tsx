"use client";

import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

function MobileNav({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void }) {
  return (
    <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} fixed inset-0 z-50 bg-black/95`}>
      <div className="p-4">
        <button
          onClick={() => setIsOpen(false)}
          className="mb-4 text-white hover:text-gray-300"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>
        <div className="flex flex-col space-y-4">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="text-white/90 hover:text-white px-3 py-2 text-lg font-medium"
          >
            Home
          </Link>
          <Link
            href="/artists"
            onClick={() => setIsOpen(false)}
            className="text-white/90 hover:text-white px-3 py-2 text-lg font-medium"
          >
            Artists
          </Link>
          <Link
            href="/distribute"
            onClick={() => setIsOpen(false)}
            className="text-white/90 hover:text-white px-3 py-2 text-lg font-medium"
          >
            Distribute
          </Link>
          <Link
            href="/about"
            onClick={() => setIsOpen(false)}
            className="text-white/90 hover:text-white px-3 py-2 text-lg font-medium"
          >
            About
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="text-white/90 hover:text-white px-3 py-2 text-lg font-medium"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
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
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="text-white hover:text-gray-300"
              >
                <Bars3Icon className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>
      
      <MobileNav isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />
    </>
  );
} 