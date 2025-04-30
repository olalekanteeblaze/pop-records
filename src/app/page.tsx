'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRightIcon, MusicalNoteIcon, GlobeAltIcon, CurrencyDollarIcon, SparklesIcon } from '@heroicons/react/24/outline'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import HeroSection from "@/components/HeroSection";

// Featured artists data
const featuredArtists = [
  {
    name: 'Sarah Johnson',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&h=400&auto=format&fit=crop',
    genre: 'Pop/R&B',
  },
  {
    name: 'The Midnight Crew',
    image: 'https://images.unsplash.com/photo-1501612780327-45045538702b?q=80&w=400&h=400&auto=format&fit=crop',
    genre: 'Rock',
  },
  {
    name: 'DJ Pulse',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=400&h=400&auto=format&fit=crop',
    genre: 'Electronic',
  },
]

// Success stories data
const successStories = [
  {
    artist: 'Luna Ray',
    quote: "Pop Records helped me reach listeners I never thought possible. My streams increased by 300% in just three months!",
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&h=400&auto=format&fit=crop',
  },
  {
    artist: 'The Beat Makers',
    quote: "The platform's analytics tools gave us insights that transformed our marketing strategy.",
    image: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=400&h=400&auto=format&fit=crop',
  },
  {
    artist: 'Sonic Wave',
    quote: "From indie artist to chart-topper, Pop Records made it possible.",
    image: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=400&h=400&auto=format&fit=crop',
  },
]

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Why Choose Pop Records?</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <MusicalNoteIcon />,
                title: "Professional Distribution",
                description: "Get your music on all major streaming platforms including Spotify, Apple Music, and more"
              },
              {
                icon: <GlobeAltIcon />,
                title: "Global Reach",
                description: "Reach millions of listeners worldwide and grow your fanbase internationally"
              },
              {
                icon: <CurrencyDollarIcon />,
                title: "Fair Royalties",
                description: "Keep 100% of your rights and earn competitive royalties from your streams"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="mx-auto h-12 w-12 text-black mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Artists Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Artists</h2>
            <p className="text-xl text-gray-600">Discover amazing talent on Pop Records</p>
          </motion.div>

          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {featuredArtists.map((artist, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className="relative h-64">
                        <Image
                          src={artist.image}
                          alt={artist.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-semibold">{artist.name}</h3>
                        <p className="text-gray-600">{artist.genre}</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>

      {/* Success Stories */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">Hear from artists who chose Pop Records</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={story.artist}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="relative h-12 w-12 mb-4">
                      <SparklesIcon className="text-yellow-400" />
                    </div>
                    <p className="text-gray-600 mb-4 italic">&quot;{story.quote}&quot;</p>
                    <div className="flex items-center">
                      <div className="relative h-12 w-12 rounded-full overflow-hidden">
                        <Image
                          src={story.image}
                          alt={story.artist}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="ml-4">
                        <p className="font-semibold">{story.artist}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-black text-white py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Share Your Music?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of artists who trust Pop Records with their music distribution
            </p>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="group"
            >
              <Link href="/distribute">
                Get Started
                <ArrowRightIcon className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
