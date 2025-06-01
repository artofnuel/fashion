"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Home() {
  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    // Simulate image loading
    const timer = setTimeout(() => {
      setImageLoaded(true)
    }, 300)
    
    return () => clearTimeout(timer)
  }, [])

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="h-screen relative flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/9594972/pexels-photo-9594972.jpeg"
            alt="Fashion editorial"
            fill
            priority
            className={`object-cover transition-opacity duration-1000 ${imageLoaded ? 'opacity-40 dark:opacity-20' : 'opacity-0'}`}
            sizes="100vw"
            onLoadingComplete={() => setImageLoaded(true)}
          />
        </div>
        
        <motion.div 
          className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 mt-12 lg:mt-0"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-montserrat font-bold max-w-4xl leading-tight"
            variants={fadeIn}
          >
            Redefining<br />
            <span className="text-orange-500">editorial</span> fashion
          </motion.h1>
          
          <motion.p 
            className="mt-6 text-lg md:text-xl max-w-xl text-muted-foreground"
            variants={fadeIn}
          >
            Unique designs that blend artistry with contemporary aesthetics, 
            creating pieces that are both timeless and avant-garde.
          </motion.p>
          
          <motion.div 
            className="mt-8"
            variants={fadeIn}
          >
            <Link 
              href="/gallery" 
              className="inline-flex items-center px-6 py-3 border border-foreground bg-background hover:bg-foreground hover:text-background transition-colors group"
            >
              Explore collection
              <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-montserrat font-medium">Featured Pieces</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Highlighting our most distinctive creations that represent our design philosophy
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Structural Elegance",
                image: "https://images.pexels.com/photos/9558577/pexels-photo-9558577.jpeg",
                category: "Summer 2025"
              },
              {
                title: "Monochrome Series",
                image: "https://images.pexels.com/photos/16170/pexels-photo.jpg",
                category: "Editorial"
              },
              {
                title: "Urban Contrast",
                image: "https://images.pexels.com/photos/2850487/pexels-photo-2850487.jpeg",
                category: "Fall 2024"
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative aspect-[3/4] overflow-hidden mb-4">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <h3 className="text-xl font-medium mt-2 group-hover:text-orange-500 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.category}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link 
              href="/gallery" 
              className="inline-flex items-center text-lg hover:text-orange-500 transition-colors"
            >
              View all pieces
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-montserrat font-medium mb-6">Our Design Philosophy</h2>
              <p className="text-lg mb-6">
                Every piece tells a story of meticulous craftsmanship and artistic vision, 
                creating garments that transcend seasonal trends.
              </p>
              <p className="text-muted-foreground mb-8">
                We believe in blending traditional techniques with contemporary aesthetics, 
                creating pieces that are both timeless and boundary-pushing. Our designs 
                emphasize structural integrity while maintaining elegant fluidity.
              </p>
              <Link 
                href="/about" 
                className="inline-flex items-center px-6 py-3 border border-foreground hover:bg-foreground hover:text-background transition-colors group"
              >
                Learn more
                <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
            
            <motion.div
              className="relative aspect-square"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="https://images.pexels.com/photos/5384423/pexels-photo-5384423.jpeg"
                alt="Design philosophy"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Recent News */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-montserrat font-medium">Latest Updates</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Stay informed about our newest collections, exhibitions, and press features
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "New Collection Preview",
                date: "June 8, 2025",
                excerpt: "An exclusive first look at our upcoming Fall/Winter collection, featuring bold silhouettes and innovative materials."
              },
              {
                title: "Fashion Week Exhibition",
                date: "May 22, 2025",
                excerpt: "Join us at the International Fashion Week where we'll be showcasing our latest editorial pieces."
              },
              {
                title: "Design Collaboration Announcement",
                date: "April 15, 2025",
                excerpt: "Exciting news about our upcoming collaboration with renowned artist Miranda Chen."
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="border p-6 hover:border-orange-500 transition-colors cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <p className="text-sm text-muted-foreground mb-2">{item.date}</p>
                <h3 className="text-xl font-medium mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.excerpt}</p>
                <div className="mt-4">
                  <a href="#" className="inline-flex items-center text-sm hover:text-orange-500 transition-colors">
                    Read more
                    <ArrowRight size={14} className="ml-1" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}