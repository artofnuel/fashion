"use client"

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function About() {
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
            About the Designer
          </h1>
          <p className="text-lg text-muted-foreground">
            Discover the creative vision and journey behind our unique approach to fashion design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            className="relative aspect-[3/4]"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Image
              src="https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg"
              alt="Fashion Designer"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-3xl font-montserrat font-medium mb-6">Alexandra Chen</h2>
            <p className="text-lg mb-6">
              With a background in fine arts and textile design, Alexandra brings a unique 
              perspective to editorial fashion, blending sculptural elements with wearable art.
            </p>
            <p className="text-muted-foreground mb-6">
              After graduating from Central Saint Martins in 2020, Alexandra established 
              ATELIER with a vision to create garments that challenge conventional fashion 
              boundaries. Her work has been featured in Vogue, Elle, and numerous international 
              exhibitions.
            </p>
            <p className="text-muted-foreground mb-8">
              Each collection represents a continued exploration of form, texture, and movement, 
              inspired by architectural principles and natural phenomena. Alexandra's design 
              process involves extensive material research and experimental draping techniques.
            </p>
            <blockquote className="border-l-4 border-orange-500 pl-4 italic mb-8">
              "Fashion is not just about clothing—it's a visual language that speaks to our 
              cultural moment while transcending it."
            </blockquote>
          </motion.div>
        </div>

        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-3xl font-montserrat font-medium mb-8 text-center">Our Story</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg mb-6">
              ATELIER was founded in 2021 with a clear mission: to create fashion that exists at 
              the intersection of art and wearability. What began as a small studio in Brooklyn has 
              evolved into an internationally recognized brand known for its distinctive aesthetic 
              and commitment to craftsmanship.
            </p>
            <p className="text-muted-foreground mb-6">
              Our team combines traditional techniques with innovative approaches, ensuring that 
              each piece receives the attention to detail it deserves. We work with a carefully 
              selected network of artisans who share our commitment to quality and sustainability.
            </p>
            <p className="text-muted-foreground mb-6">
              From concept sketches to final construction, each design undergoes a rigorous 
              development process. This dedication to excellence has earned us recognition within 
              the fashion industry and a loyal following of clients who appreciate our unique 
              vision.
            </p>
          </div>
        </motion.div>

        <motion.div 
          className="bg-muted/30 py-16 px-6 md:px-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-montserrat font-medium mb-8">Design Philosophy</h2>
            <p className="text-lg mb-8">
              Our approach to design centers on four key principles that guide every collection:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div className="border-t pt-6">
                <h3 className="text-xl font-medium mb-3">Artistic Expression</h3>
                <p className="text-muted-foreground">
                  We view fashion as a medium for artistic expression, creating pieces that 
                  communicate ideas and evoke emotional responses.
                </p>
              </div>
              <div className="border-t pt-6">
                <h3 className="text-xl font-medium mb-3">Material Innovation</h3>
                <p className="text-muted-foreground">
                  Our designs explore the possibilities of both traditional and unconventional 
                  materials, pushing the boundaries of texture and structure.
                </p>
              </div>
              <div className="border-t pt-6">
                <h3 className="text-xl font-medium mb-3">Sustainable Practices</h3>
                <p className="text-muted-foreground">
                  We are committed to responsible production methods, minimizing waste and 
                  environmental impact throughout our design and manufacturing process.
                </p>
              </div>
              <div className="border-t pt-6">
                <h3 className="text-xl font-medium mb-3">Timeless Relevance</h3>
                <p className="text-muted-foreground">
                  While our aesthetic is contemporary, we create pieces with longevity in mind, 
                  transcending seasonal trends.
                </p>
              </div>
            </div>
            <Link 
              href="/contact" 
              className="inline-flex items-center px-6 py-3 border border-foreground hover:bg-foreground hover:text-background transition-colors group"
            >
              Get in touch
              <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}