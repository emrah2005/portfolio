"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    id: 1,
    role: "Full Stack Developer",
    company: "Coding Factory",
    date: "06/2024 - Present",
    description: (
      <ul className="list-disc list-outside ml-4 space-y-2">
        <li>Developed and maintained frontend features for multiple client websites using modern web technologies (HTML, CSS, JavaScript).</li>
        <li>Collaborated with designers and backend developers to build responsive and user-friendly interfaces.</li>
        <li>Worked on the frontend of <a href="https://danishlimousine.com/" target="_blank" className="text-blue-600 dark:text-blue-400 hover:underline">danishlimousine.com</a>, improving layout, navigation, and visual consistency.</li>
        <li>Built and refined the user interface for <a href="https://www.slovego.com/" target="_blank" className="text-blue-600 dark:text-blue-400 hover:underline">slovego.com</a>, ensuring responsiveness and cross-browser compatibility.</li>
        <li>Performed QA testing and bug fixing to deliver polished, production-ready pages.</li>
      </ul>
    ),
  },
  {
    id: 2,
    role: "CEO and Founder",
    company: "Mavrovo News",
    date: "2024 - Present",
    description: "Founded and currently managing Mavrovo News (mavrovonews.com), a comprehensive news portal for the Mavrovo region.",
  },
  {
    id: 3,
    role: "Freelance Developer",
    company: "Self-Employed",
    date: "2023 - Present",
    description: "Working on various freelance projects, delivering custom web solutions for clients.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-16 bg-white dark:bg-black">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl text-center mb-12">
            Experience
          </h2>
          <div className="relative border-l border-gray-200 dark:border-gray-700 ml-4 md:ml-0 md:pl-0 md:border-none md:grid md:grid-cols-1 md:gap-8">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="mb-10 ml-6 md:ml-0 md:mb-0 md:grid md:grid-cols-12 md:gap-8">
                {/* Mobile: Line and dot handled by parent relative div and ml-6 */}
                
                {/* Desktop: Alternating layout */}
                <div className="md:col-span-5 md:text-right md:pr-8 flex flex-col md:items-end">
                   <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white md:hidden">
                    {exp.role}
                  </h3>
                   <span className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 md:hidden">
                    {exp.company} | {exp.date}
                  </span>
                   {/* Desktop Left Content */}
                   <div className="hidden md:block">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.role}</h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">{exp.company}</p>
                      <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 mt-1">
                        {exp.date}
                      </time>
                   </div>
                </div>

                <div className="hidden md:flex md:col-span-2 justify-center items-center relative">
                   <div className="h-full w-px bg-gray-200 dark:bg-gray-700 absolute top-0 bottom-0 left-1/2 -translate-x-1/2"></div>
                   <div className="w-4 h-4 bg-blue-600 rounded-full relative z-10 border-4 border-white dark:border-gray-900"></div>
                </div>

                <div className="md:col-span-5 md:pl-8">
                   <div className="md:hidden absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                   {/* Mobile Content continues */}
                   <div className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 md:hidden">
                      {exp.description}
                   </div>
                   
                   {/* Desktop Right Content */}
                   <div className="hidden md:block">
                      <div className="text-base font-normal text-gray-500 dark:text-gray-400">
                        {exp.description}
                      </div>
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
