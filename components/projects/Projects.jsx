"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "E-Commerce Website",
    description:
      `A full-stack e-commerce platform built with Next.js 
      and Supabase, featuring product management, secure Paystack payments,
       and an admin dashboard for managing inventory. Product images are 
       optimized before upload to improve performance and user experience.
     **NOTE:** This project is hosted on free-tier services. Some features
 may require a few moments to reactivate during portfolio review due to free-tier server inactivity.
`,
    image: "/ecommerce.jpg",
    liveUrl: "https://e-commerce-next-js-mu-five.vercel.app/",
    codeUrl: "https://github.com/franklin-oks/E-commerceNext.Js.git",
    technologies: ["Next.js", "Tailwind CSS", "Supabase", "Paystack"],
  },
  {
    title: "Real Estate Platform",
    description:
      "A property listing website for land and housing investment with video inspection, property details, and contact features.",
    image: "/projects/realestate.jpg",
    liveUrl: "https://example.com",
    codeUrl: "https://github.com/yourusername/realestate",
    technologies: ["React", "Next.js", "Supabase", "YouTube API"],
  },
  {
    title: "AI Chatbot",
    description:
      "An AI-powered chatbot that answers user questions, supports smart conversations, and helps users get instant information.",
    image: "/projects/ai-chatbot.jpg",
    liveUrl: "https://example.com",
    codeUrl: "https://github.com/yourusername/ai-chatbot",
    technologies: ["React", "Node.js", "Express.js", "OpenAI API"],
  },
  {
    title: "Portfolio Website",
    description:
      "A responsive personal portfolio website showcasing services, technical skills, projects, and contact information.",
    image: "/projects/portfolio.jpg",
    liveUrl: "https://example.com",
    codeUrl: "https://github.com/yourusername/portfolio",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 45,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const Projects = () => {
  return (
    <section
      id="projects"
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
            — My Work —
          </p>

          <h2 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">
            Featured{" "}
            <span className="bg-linear-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-linear-to-r from-purple-500 to-cyan-400" />

          <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
            Here are some of the projects I have worked on, showcasing my
            ability to build responsive, functional, and user-friendly digital
            solutions.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-8 md:grid-cols-2 xl:grid-cols-3"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/4 shadow-2xl backdrop-blur-md"
            >
              <div className="relative h-64 overflow-hidden">
                <a href={project.liveUrl} target="_blank" rel="noreferrer">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                </a>

                <a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-black/70 text-xl text-white backdrop-blur-md transition hover:bg-purple-600 lg:hidden"
                  aria-label="View code on GitHub"
                >
                  <FaGithub />
                </a>

                <div className="absolute inset-0 hidden items-center justify-center gap-4 bg-black/70 opacity-0 backdrop-blur-sm transition duration-500 group-hover:opacity-100 lg:flex">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-purple-600 to-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:scale-105"
                  >
                    Live Preview
                    <FaExternalLinkAlt />
                  </a>

                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:scale-105 hover:border-purple-400"
                  >
                    Code
                    <FaGithub />
                  </a>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-7">
                <a href={project.liveUrl} target="_blank" rel="noreferrer">
                  <h3 className="mb-4 text-2xl font-bold text-blue-400 transition hover:text-cyan-400">
                    {project.title}
                  </h3>
                </a>

                <p className="mb-8 text-sm leading-7 text-gray-300">
                  {project.description}
                </p>

                <div className="mt-auto flex flex-wrap gap-3 border-t border-white/10 pt-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="rounded-full border border-purple-400/20 bg-purple-500/10 px-4 py-2 text-xs font-semibold text-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;