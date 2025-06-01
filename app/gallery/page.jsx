"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const categories = ["All", "Editorial", "Runway", "Commercial", "Concept"];

const galleryItems = [
  {
    id: 1,
    title: "Structural Elegance",
    category: "Editorial",
    image: "https://images.pexels.com/photos/5559986/pexels-photo-5559986.jpeg",
    size: "large",
  },
  {
    id: 2,
    title: "Urban Minimalism",
    category: "Editorial",
    image: "https://images.pexels.com/photos/2703181/pexels-photo-2703181.jpeg",
    size: "medium",
  },
  // {
  //   id: 3,
  //   title: "Contrast Study",
  //   category: "Concept",
  //   image:
  //     "https://unsplash.com/photos/woman-in-yellow-tracksuit-standing-on-basketball-court-side-nimElTcTNyY",
  //   size: "medium",
  // },
  {
    id: 4,
    title: "Seasonal Transition",
    category: "Runway",
    image: "https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg",
    size: "small",
  },
  {
    id: 5,
    title: "Textural Exploration",
    category: "Concept",
    image: "https://images.pexels.com/photos/8386547/pexels-photo-8386547.jpeg",
    size: "medium",
  },
  {
    id: 6,
    title: "Monochrome Series",
    category: "Editorial",
    image: "https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg",
    size: "large",
  },
  {
    id: 7,
    title: "Contemporary Silhouette",
    category: "Runway",
    image: "https://images.pexels.com/photos/3693779/pexels-photo-3693779.jpeg",
    size: "medium",
  },
  {
    id: 8,
    title: "Geometric Focus",
    category: "Commercial",
    image: "https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg",
    size: "small",
  },
  {
    id: 9,
    title: "Material Study",
    category: "Concept",
    image: "https://images.pexels.com/photos/5384423/pexels-photo-5384423.jpeg",
    size: "medium",
  },
  {
    id: 10,
    title: "Tonal Balance",
    category: "Commercial",
    image: "https://images.pexels.com/photos/5119529/pexels-photo-5119529.jpeg",
    size: "large",
  },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredItem, setHoveredItem] = useState(null);

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

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
            Our Collection
          </h1>
          <p className="text-lg text-muted-foreground">
            Explore our curated selection of editorial fashion pieces, each
            representing a unique vision and creative exploration.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-6 py-2 text-sm transition-colors ${
                activeCategory === category
                  ? "bg-foreground text-background"
                  : "border border-border hover:border-foreground"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => {
            // Calculate aspect ratio based on size
            let aspectRatio = "aspect-square";
            if (item.size === "large") {
              aspectRatio = "aspect-[3/4]";
            } else if (item.size === "medium") {
              aspectRatio = "aspect-[4/5]";
            }

            // Adjust column span for large items on desktop
            const colSpan = item.size === "large" ? "lg:col-span-2" : "";

            return (
              <motion.div
                key={item.id}
                className={`relative ${colSpan} ${aspectRatio} overflow-hidden cursor-pointer`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700"
                  style={{
                    transform:
                      hoveredItem === item.id ? "scale(1.05)" : "scale(1)",
                  }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/60 flex items-end p-6 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div>
                    <h3 className="text-white text-xl font-medium">
                      {item.title}
                    </h3>
                    <p className="text-white/70 text-sm mt-1">
                      {item.category}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
