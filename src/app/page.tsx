import Link from 'next/link'
import { ArrowRightIcon, MusicalNoteIcon, GlobeAltIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Share Your Music With The World
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Distribute your music to all major streaming platforms and reach millions of listeners worldwide
            </p>
            <Link
              href="/distribute"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-gray-100"
            >
              Start Distribution
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Why Choose Pop Records?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="mx-auto h-12 w-12 text-black mb-4">
                <MusicalNoteIcon />
              </div>
              <h3 className="text-xl font-semibold mb-2">Professional Distribution</h3>
              <p className="text-gray-600">
                Get your music on all major streaming platforms including Spotify, Apple Music, and more
              </p>
            </div>
            <div className="text-center p-6">
              <div className="mx-auto h-12 w-12 text-black mb-4">
                <GlobeAltIcon />
              </div>
              <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
              <p className="text-gray-600">
                Reach millions of listeners worldwide and grow your fanbase internationally
              </p>
            </div>
            <div className="text-center p-6">
              <div className="mx-auto h-12 w-12 text-black mb-4">
                <CurrencyDollarIcon />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fair Royalties</h3>
              <p className="text-gray-600">
                Keep 100% of your rights and earn competitive royalties from your streams
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Share Your Music?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of artists who trust Pop Records with their music distribution
            </p>
            <Link
              href="/distribute"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-gray-100"
            >
              Get Started
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
