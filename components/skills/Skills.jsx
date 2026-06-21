"use client";

import React from "react";
import { motion } from "framer-motion";

const fullstackSkills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Firebase",
  "Supabase",
  "Git",
  "GitHub",
  "REST API",
  "Responsive Design",
];

const aiSkills = [
  "Artificial Intelligence",
  "Data Annotation",
  "Natural Language Processing",
  "Computer Vision",
  "Prompt Engineering",
  "Vibe Engineering",
  "AI Tools",
  "Machine Learning Basics",
  "Image Processing",
  "Voice Recognition",
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const skillVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#050b1f] px-6 py-24 text-white sm:px-10 lg:px-20"
    >
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-purple-600/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-600/20 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-purple-400">
            — My Expertise —
          </p>

          <h2 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">
            Skills /{" "}
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Technical Competence
            </span>
          </h2>

          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400" />

          <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
            A blend of fullstack development, AI knowledge, and modern technical
            skills for building smart and scalable digital solutions.
          </p>
        </motion.div>

        <div className="space-y-12">
          <div>
            <h3 className="mb-6 text-2xl font-bold text-white">
              Fullstack Development
            </h3>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="flex flex-wrap gap-4"
            >
              {fullstackSkills.map((skill, index) => (
                <motion.span
                  key={index}
                  variants={skillVariants}
                  whileHover={{ scale: 1.08, y: -5 }}
                  className="rounded-full border border-white/10 bg-white/[0.05] px-6 py-3 text-sm font-semibold text-gray-200 shadow-lg backdrop-blur-md transition hover:border-purple-400 hover:text-white"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </div>

          <div>
            <h3 className="mb-6 text-2xl font-bold text-white">
              AI Skills
            </h3>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="flex flex-wrap gap-4"
            >
              {aiSkills.map((skill, index) => (
                <motion.span
                  key={index}
                  variants={skillVariants}
                  whileHover={{ scale: 1.08, y: -5 }}
                  className="rounded-full border border-purple-400/20 bg-purple-500/10 px-6 py-3 text-sm font-semibold text-gray-200 shadow-lg backdrop-blur-md transition hover:border-cyan-400 hover:text-white"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;