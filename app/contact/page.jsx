"use client"

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Check, Send, MapPin, Phone, Mail } from 'lucide-react'

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
    }, 1500)
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-montserrat font-medium mb-6">
            Get in Touch
          </h1>
          <p className="text-lg text-muted-foreground">
            We'd love to hear from you. Whether you have a question about our designs, 
            collaboration opportunities, or anything else, our team is here to help.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-montserrat font-medium mb-6">Contact Information</h2>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start">
                <MapPin className="mt-1 mr-4 text-orange-500" size={20} />
                <div>
                  <h3 className="font-medium">Studio Address</h3>
                  <p className="text-muted-foreground">
                    123 Design District<br />
                    Brooklyn, NY 11201<br />
                    United States
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="mt-1 mr-4 text-orange-500" size={20} />
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-muted-foreground">
                    +1 (212) 555-7890<br />
                    Monday to Friday, 10am to 6pm EST
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="mt-1 mr-4 text-orange-500" size={20} />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-muted-foreground">
                    info@atelier-fashion.com<br />
                    press@atelier-fashion.com
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-muted/30 p-6 mb-6">
              <h3 className="font-medium mb-2">Appointment Requests</h3>
              <p className="text-muted-foreground text-sm mb-4">
                For private viewings of our collection or custom design consultations, 
                please send an appointment request with your preferred date and time.
              </p>
              <Link 
                href="mailto:appointments@atelier-fashion.com" 
                className="text-sm font-medium hover:text-orange-500 transition-colors"
              >
                appointments@atelier-fashion.com
              </Link>
            </div>
            
            <div>
              <h3 className="font-medium mb-3">Opening Hours</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monday - Friday</span>
                  <span>10:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Saturday</span>
                  <span>12:00 PM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-2xl font-montserrat font-medium mb-6">Send a Message</h2>
            
            {isSubmitted ? (
              <motion.div 
                className="bg-muted/30 p-8 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-500 mb-6">
                  <Check size={32} />
                </div>
                <h3 className="text-xl font-medium mb-2">Thank You!</h3>
                <p className="text-muted-foreground mb-6">
                  Your message has been received. We'll get back to you as soon as possible.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)} 
                  className="text-sm font-medium hover:text-orange-500 transition-colors"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border focus:border-foreground focus:outline-none transition-colors bg-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border focus:border-foreground focus:outline-none transition-colors bg-transparent"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border focus:border-foreground focus:outline-none transition-colors bg-transparent"
                    placeholder="Message subject"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-border focus:border-foreground focus:outline-none transition-colors bg-transparent resize-none"
                    placeholder="Your message"
                  />
                </div>
                
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center px-6 py-3 bg-foreground text-background hover:bg-orange-500 disabled:opacity-70 disabled:hover:bg-foreground transition-colors"
                  >
                    {isSubmitting ? (
                      <>Sending...</>
                    ) : (
                      <>
                        Send Message
                        <Send size={16} className="ml-2" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}