"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Mavrovo News",
    description: "A comprehensive news portal built with WordPress, delivering the latest updates for the Mavrovo region.",
    tags: ["WordPress", "PHP", "MySQL", "News Portal"],
    // github removed
    demo: "https://mavrovonews.com",
    image: "/mavrovo-news.png", 
  },
  {
    id: 2,
    title: "Slovego",
    description: "Built and refined the user interface for Slovego, ensuring responsiveness and cross-browser compatibility.",
    tags: ["Frontend", "HTML/CSS", "JavaScript", "Responsive Design"],
    demo: "https://www.slovego.com/",
    image: "/slovego.png",
  },
  {
    id: 3,
    title: "Danish Limousine",
    description: "Worked on the frontend to improve layout, navigation, and visual consistency for a premium limousine service.",
    tags: ["Frontend", "UI/UX", "JavaScript", "Optimization"],
    demo: "https://danishlimousine.com/",
    image: "/dl.png",
  },
  {
    id: 4,
    title: "Kristal Nočisto Booking System",
    description: "Full booking system developed from idea to production with dynamic pricing, real-time availability, and comprehensive admin control.",
    tags: ["PHP", "MySQL", "Custom Logic", "Dynamic Pricing", "Admin Dashboard"],
    demo: "https://kristalnocisto.page.gd/?i=1",
    image: "/booking-system.png",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-gray-50 dark:bg-black">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl text-center mb-12">
            Featured Projects
          </h2>
          <div className={projects.length === 1 ? "flex justify-center" : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"}>
            {projects.map((project) => (
              <div
                key={project.id}
                className={`bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col ${projects.length === 1 ? 'w-full max-w-3xl' : ''}`}
              >
                <div className={`${projects.length === 1 ? 'h-80' : 'h-48'} bg-gray-200 dark:bg-gray-700 flex items-center justify-center relative overflow-hidden group`}>
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    {/* Conditionally render GitHub link if it exists */}
                    {(project as any).github && (
                      <Link
                        href={(project as any).github}
                        target="_blank"
                        className="p-2 bg-white rounded-full text-gray-900 hover:text-blue-600 transition-colors"
                      >
                        <Github size={20} />
                      </Link>
                    )}
                    <Link
                      href={project.demo}
                      target="_blank"
                      className="p-2 bg-white rounded-full text-gray-900 hover:text-blue-600 transition-colors"
                    >
                      <ExternalLink size={20} />
                    </Link>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs font-medium rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
