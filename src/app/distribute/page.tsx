'use client'

import { useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { CloudArrowUpIcon, CheckCircleIcon } from '@heroicons/react/24/outline'

export default function DistributePage() {
  const [formData, setFormData] = useState({
    title: '',
    artist: '',
    genre: '',
    releaseDate: '',
  })

  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    accept: {
      'audio/*': ['.mp3', '.wav']
    },
    maxFiles: 1
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission (in a real app, this would connect to a backend)
    console.log('Form submitted:', { ...formData, file: acceptedFiles[0]?.name })
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Distribute Your Music</h1>
          <p className="text-xl text-gray-600">
            Share your music with millions of listeners worldwide
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Track Title
              </label>
              <input
                type="text"
                id="title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>

            <div>
              <label htmlFor="artist" className="block text-sm font-medium text-gray-700">
                Artist Name
              </label>
              <input
                type="text"
                id="artist"
                value={formData.artist}
                onChange={(e) => setFormData({ ...formData, artist: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>

            <div>
              <label htmlFor="genre" className="block text-sm font-medium text-gray-700">
                Genre
              </label>
              <select
                id="genre"
                value={formData.genre}
                onChange={(e) => setFormData({ ...formData, genre: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              >
                <option value="">Select a genre</option>
                <option value="pop">Pop</option>
                <option value="rock">Rock</option>
                <option value="hiphop">Hip Hop</option>
                <option value="electronic">Electronic</option>
                <option value="jazz">Jazz</option>
                <option value="classical">Classical</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="releaseDate" className="block text-sm font-medium text-gray-700">
                Release Date
              </label>
              <input
                type="date"
                id="releaseDate"
                value={formData.releaseDate}
                onChange={(e) => setFormData({ ...formData, releaseDate: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Upload Track
              </label>
              <div
                {...getRootProps()}
                className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md hover:border-indigo-500 transition-colors cursor-pointer"
              >
                <div className="space-y-1 text-center">
                  <input {...getInputProps()} />
                  <CloudArrowUpIcon className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="flex text-sm text-gray-600">
                    <p className="pl-1">
                      {acceptedFiles.length > 0 ? (
                        <span className="text-indigo-600 flex items-center">
                          <CheckCircleIcon className="h-5 w-5 mr-1" />
                          {acceptedFiles[0].name}
                        </span>
                      ) : (
                        'Drag and drop your track, or click to select'
                      )}
                    </p>
                  </div>
                  <p className="text-xs text-gray-500">MP3 or WAV up to 50MB</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
              >
                Submit Track
              </button>
            </div>
          </form>
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Distribution Process</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-black text-white">
                  1
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Upload Your Track</h3>
                <p className="mt-1 text-gray-600">
                  Submit your music in high-quality format (MP3 or WAV)
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-black text-white">
                  2
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Review Process</h3>
                <p className="mt-1 text-gray-600">
                  Our team will review your submission within 2-3 business days
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-black text-white">
                  3
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Distribution</h3>
                <p className="mt-1 text-gray-600">
                  Once approved, your music will be distributed to major streaming platforms
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 