import Link from 'next/link'
import Image from 'next/image'

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
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Artists</h1>
          <p className="text-xl text-gray-600">Discover amazing talent from around the world</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {artists.map((artist) => (
            <Link key={artist.id} href={`/artists/${artist.id}`}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
                <div className="relative h-64">
                  <Image
                    src={artist.image}
                    alt={artist.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">{artist.name}</h2>
                  <p className="text-sm text-gray-500 mb-2">{artist.genre}</p>
                  <p className="text-gray-600">{artist.bio}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
} 