"use client";

import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-16 bg-gray-50 dark:bg-black">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl text-center mb-12">
            About Me
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300">
              <p>
                I am a passionate software engineer with experience in building modern web applications.
                I love learning new technologies and solving complex problems.
              </p>
              <p>
                My expertise includes JavaScript, TypeScript, React, Next.js, and Node.js.
                I strive to write clean, maintainable, and efficient code.
              </p>
              <div className="pt-4">
                <a 
                  href="/Resume.pdf" 
                  download 
                  className="inline-flex items-center px-6 py-3 text-base font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  <FileText className="w-5 h-5 mr-2" />
                  Download Resume
                </a>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {["HTML", "CSS", "SASS", "JavaScript", "TypeScript", "PHP", "Laravel", "React", "Next.js", "Node.js", "Bootstrap", "Tailwind CSS", "Git", "Databases"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full dark:bg-blue-900 dark:text-blue-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
