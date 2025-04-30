'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

// Mock data for artists (in a real app, this would come from an API/database)
const artists = [
  {
    id: 1,
    name: 'Sarah Johnson',
    genre: 'Pop/R&B',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&h=400&auto=format&fit=crop',
    bio: 'Rising star with a unique blend of pop and R&B',
  },
  {
    id: 2,
    name: 'The Midnight Crew',
    genre: 'Rock',
    image: 'https://images.unsplash.com/photo-1501612780327-45045538702b?q=80&w=400&h=400&auto=format&fit=crop',
    bio: 'High-energy rock band known for explosive performances',
  },
  {
    id: 3,
    name: 'DJ Pulse',
    genre: 'Electronic',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=400&h=400&auto=format&fit=crop',
    bio: 'Electronic music producer pushing boundaries',
  },
  {
    id: 4,
    name: 'Luna Ray',
    genre: 'Indie Folk',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&h=400&auto=format&fit=crop',
    bio: 'Soulful indie folk artist with heartfelt lyrics',
  },
]

export default function ArtistsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-purple-900/50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-white mb-4">Our Artists</h1>
          <p className="text-xl text-gray-300">Discover amazing talent from around the world</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {artists.map((artist, index) => (
            <motion.div
              key={artist.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/artists/${artist.id}`}>
                <div className="bg-purple-900/20 backdrop-blur-sm border border-purple-500/20 rounded-lg overflow-hidden transition-all duration-300 hover:bg-purple-900/30 hover:scale-105 hover:border-purple-500/40">
                  <div className="relative h-64">
                    <Image
                      src={artist.image}
                      alt={artist.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-semibold text-white mb-2">{artist.name}</h2>
                    <p className="text-sm text-purple-400 mb-2">{artist.genre}</p>
                    <p className="text-gray-300">{artist.bio}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
} 