'use client'

import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
})

export default function ContactPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Handle form submission (in a real app, this would connect to a backend)
    console.log('Form submitted:', values)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-amber-900/50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-xl text-gray-300">
            Have questions? We&apos;re here to help.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-black/60 backdrop-blur-sm border border-amber-500/20 rounded-lg p-8"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Enter your name" 
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
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Email</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Enter your email" 
                          type="email"
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
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Subject</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Enter subject" 
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
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Type your message here" 
                          className="bg-black/60 border-amber-500/30 text-white placeholder-gray-400 focus:border-amber-500 focus:ring-amber-500 min-h-[120px]" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white transition-all duration-200"
                >
                  Send Message
                </Button>
              </form>
            </Form>
          </motion.div>

          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-black/80 to-black border border-amber-500/20 rounded-lg p-8"
          >
            <h2 className="text-2xl font-bold mb-8 text-white">Get in Touch</h2>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <EnvelopeIcon className="h-6 w-6 text-amber-400" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-white">Email</h3>
                  <p className="mt-1 text-gray-300">support@poprecords.com</p>
                  <p className="text-gray-300">info@poprecords.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <PhoneIcon className="h-6 w-6 text-amber-400" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-white">Phone</h3>
                  <p className="mt-1 text-gray-300">+1 (555) 123-4567</p>
                  <p className="text-gray-300">Mon-Fri 9am to 6pm PST</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <MapPinIcon className="h-6 w-6 text-amber-400" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-white">Location</h3>
                  <p className="mt-1 text-gray-300">
                    123 Music Street<br />
                    Los Angeles, CA 90028<br />
                    United States
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-amber-500/20">
              <h3 className="text-lg font-medium mb-4 text-white">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                  Twitter
                </a>
                <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                  Facebook
                </a>
                <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                  Instagram
                </a>
                <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 