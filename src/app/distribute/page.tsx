'use client'

import { useDropzone } from 'react-dropzone'
import { CloudArrowUpIcon, CheckCircleIcon, CalendarIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { format } from "date-fns"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"

const formSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  artist: z.string().min(2, {
    message: "Artist name must be at least 2 characters.",
  }),
  genre: z.string().min(1, {
    message: "Please select a genre.",
  }),
  releaseDate: z.date({
    required_error: "Please select a release date.",
  }),
})

export default function DistributePage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      artist: "",
      genre: "",
    },
  })

  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    accept: {
      'audio/*': ['.mp3', '.wav']
    },
    maxFiles: 1
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Handle form submission (in a real app, this would connect to a backend)
    console.log('Form submitted:', { 
      ...values, 
      releaseDate: format(values.releaseDate, "yyyy-MM-dd"),
      file: acceptedFiles[0]?.name 
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-amber-900/50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-white mb-4">Distribute Your Music</h1>
          <p className="text-xl text-gray-300">
            Share your music with millions of listeners worldwide
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-black/60 backdrop-blur-sm border border-amber-500/20 rounded-lg p-8"
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Track Title</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Enter track title" 
                        className="bg-black/60 border-amber-500/30 text-white placeholder-gray-400 focus:border-amber-500 focus:ring-amber-500" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="artist"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Artist Name</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Enter artist name" 
                        className="bg-black/60 border-amber-500/30 text-white placeholder-gray-400 focus:border-amber-500 focus:ring-amber-500" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="genre"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Genre</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full bg-black/60 border-amber-500/30 text-white">
                          <SelectValue placeholder="Select a genre" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-black border-amber-500/30">
                        <SelectItem value="pop" className="text-white hover:bg-amber-900">Pop</SelectItem>
                        <SelectItem value="rock" className="text-white hover:bg-amber-900">Rock</SelectItem>
                        <SelectItem value="hiphop" className="text-white hover:bg-amber-900">Hip Hop</SelectItem>
                        <SelectItem value="electronic" className="text-white hover:bg-amber-900">Electronic</SelectItem>
                        <SelectItem value="jazz" className="text-white hover:bg-amber-900">Jazz</SelectItem>
                        <SelectItem value="classical" className="text-white hover:bg-amber-900">Classical</SelectItem>
                        <SelectItem value="other" className="text-white hover:bg-amber-900">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="releaseDate"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="text-white">Release Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full bg-black/60 border-amber-500/30 text-left font-normal",
                              !field.value && "text-gray-400"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 bg-black" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date < new Date()
                          }
                          initialFocus
                          className="bg-black text-white border-amber-500/30"
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Upload Track
                </label>
                <div
                  {...getRootProps()}
                  className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-amber-500/30 border-dashed rounded-md hover:border-amber-400 transition-colors cursor-pointer bg-black/10"
                >
                  <div className="space-y-1 text-center">
                    <input {...getInputProps()} />
                    <CloudArrowUpIcon className="mx-auto h-12 w-12 text-amber-400" />
                    <div className="flex text-sm text-gray-300">
                      <p className="pl-1">
                        {acceptedFiles.length > 0 ? (
                          <span className="text-amber-400 flex items-center">
                            <CheckCircleIcon className="h-5 w-5 mr-1" />
                            {acceptedFiles[0].name}
                          </span>
                        ) : (
                          'Drag and drop your track, or click to select'
                        )}
                      </p>
                    </div>
                    <p className="text-xs text-gray-400">MP3 or WAV up to 50MB</p>
                  </div>
                </div>
              </div>

              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white transition-all duration-200"
              >
                Submit Track
              </Button>
            </form>
          </Form>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 bg-gradient-to-br from-black/80 to-black border border-amber-500/20 rounded-lg p-8"
        >
          <h2 className="text-2xl font-bold text-white mb-4">Distribution Process</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-gradient-to-r from-amber-600 to-yellow-600 text-white">
                  1
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-white">Upload Your Track</h3>
                <p className="mt-1 text-gray-300">
                  Submit your music in high-quality format (MP3 or WAV)
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-gradient-to-r from-amber-600 to-yellow-600 text-white">
                  2
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-white">Review Process</h3>
                <p className="mt-1 text-gray-300">
                  Our team will review your submission within 2-3 business days
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-gradient-to-r from-amber-600 to-yellow-600 text-white">
                  3
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-white">Distribution</h3>
                <p className="mt-1 text-gray-300">
                  Once approved, your music will be distributed to major streaming platforms
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 