import Image from 'next/image'
import { MusicalNoteIcon } from '@heroicons/react/24/outline'

// Mock data (in a real app, this would come from an API/database)
const artists = [
  {
    id: 1,
    name: 'Sarah Johnson',
    genre: 'Pop/R&B',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&h=400&auto=format&fit=crop',
    bio: 'Rising star with a unique blend of pop and R&B',
    location: 'Los Angeles, CA',
    followers: '250K',
    topTracks: [
      { id: 1, title: 'Summer Nights', plays: '1.2M' },
      { id: 2, title: 'Heartbeat', plays: '980K' },
      { id: 3, title: 'Dancing in the Rain', plays: '750K' },
    ],
  },
  {
    id: 2,
    name: 'The Midnight Crew',
    genre: 'Rock',
    image: 'https://images.unsplash.com/photo-1501612780327-45045538702b?q=80&w=400&h=400&auto=format&fit=crop',
    bio: 'High-energy rock band known for explosive performances',
    location: 'Chicago, IL',
    followers: '180K',
    topTracks: [
      { id: 1, title: 'Night Drive', plays: '2.1M' },
      { id: 2, title: 'Electric Dreams', plays: '1.5M' },
      { id: 3, title: 'City Lights', plays: '900K' },
    ],
  },
  {
    id: 3,
    name: 'DJ Pulse',
    genre: 'Electronic',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=400&h=400&auto=format&fit=crop',
    bio: 'Electronic music producer pushing boundaries',
    location: 'Berlin, Germany',
    followers: '420K',
    topTracks: [
      { id: 1, title: 'Neon Pulse', plays: '3.5M' },
      { id: 2, title: 'Digital Love', plays: '2.8M' },
      { id: 3, title: 'Synthwave', plays: '1.9M' },
    ],
  },
  {
    id: 4,
    name: 'Luna Ray',
    genre: 'Indie Folk',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&h=400&auto=format&fit=crop',
    bio: 'Soulful indie folk artist with heartfelt lyrics',
    location: 'Portland, OR',
    followers: '150K',
    topTracks: [
      { id: 1, title: 'Mountain Song', plays: '950K' },
      { id: 2, title: 'Autumn Leaves', plays: '820K' },
      { id: 3, title: 'Whispers', plays: '680K' },
    ],
  },
]

export default function ArtistPage({ params }: { params: { id: string } }) {
  const artist = artists.find((a) => a.id === parseInt(params.id))

  if (!artist) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-2xl text-gray-600">Artist not found</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <div className="relative h-96 w-full md:w-96">
                <Image
                  src={artist.image}
                  alt={artist.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                {artist.genre}
              </div>
              <h1 className="mt-2 text-3xl font-bold text-gray-900">{artist.name}</h1>
              <p className="mt-4 text-gray-600">{artist.bio}</p>
              <div className="mt-6 flex items-center">
                <div className="text-gray-600">
                  <span className="font-semibold">{artist.followers}</span> followers
                </div>
                <span className="mx-4 text-gray-300">|</span>
                <div className="text-gray-600">{artist.location}</div>
              </div>
            </div>
          </div>

          <div className="px-8 py-6 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Top Tracks</h2>
            <div className="space-y-4">
              {artist.topTracks.map((track) => (
                <div
                  key={track.id}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center">
                    <MusicalNoteIcon className="h-6 w-6 text-gray-400 mr-3" />
                    <span className="text-gray-900 font-medium">{track.title}</span>
                  </div>
                  <div className="text-gray-600">{track.plays} plays</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 