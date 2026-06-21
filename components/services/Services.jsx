"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaBrain, FaBolt, FaPenNib, FaArrowRight } from "react-icons/fa";

const services = [
  {
    title: "Fullstack Developer",
    description:
      "I build responsive, scalable, and high-performance web applications using modern frontend and backend technologies.",
    icon: <FaCode />,
  },
  {
    title: "AI Enthusiast",
    description:
      "I explore and integrate artificial intelligence tools to solve real-world problems and build smarter digital solutions.",
    icon: <FaBrain />,
  },
  {
    title: "Electrical Engineer",
    description:
      "I design, analyze, and maintain electrical systems with practical engineering knowledge and strong problem-solving skills.",
    icon: <FaBolt />,
  },
  {
    title: "Author",
    description:
      "I write educational books, technical articles, and helpful content that inspires, teaches, and adds value to readers.",
    icon: <FaPenNib />,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
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

const Services = () => {
  return (
    <section
      id="services"
      className="relative overflow-hidden  bg-[#06101f] px-6 py-24 -mt-4 text-white sm:px-10 lg:px-20"
    >
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-purple-600/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-600/20 blur-[130px]" />

      <motion.div
        className="relative z-10 mx-auto max-w-7xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.div variants={itemVariants} className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-purple-400">
            — What I Do —
          </p>

          <h2 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">
            My{" "}
            <span className="bg-linear-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Services
            </span>
          </h2>

          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-linear-to-r from-purple-500 to-cyan-400" />

          <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
            I have helped many startup businesses and companies grow through my
            services by building modern digital solutions, solving technical
            problems, and creating valuable content.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -12, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
              className="group relative rounded-3xl border border-white/10 bg-white/4 p-8 text-center shadow-2xl backdrop-blur-md"
            >
              <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-white/10 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

              <div className="relative mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-2xl border border-purple-400/30 bg-purple-500/10 text-5xl text-purple-400 shadow-lg transition duration-300 group-hover:scale-110 group-hover:text-cyan-400">
                {service.icon}
              </div>

              <h3 className="relative text-2xl font-bold leading-tight text-white">
                {service.title}
              </h3>

              <div className="relative mx-auto my-5 h-0.5 w-12 rounded-full bg-linear-to-r from-purple-500 to-cyan-400" />

              <p className="relative min-h-35 text-sm leading-7 text-gray-300">
                {service.description}
              </p>

              <a
                href="#contact"
                className="relative mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full border border-purple-400 px-6 py-3 font-semibold text-white transition duration-300 hover:border-cyan-400 hover:bg-linear-to-r hover:from-purple-600 hover:to-blue-600"
              >
                Let&apos;s Talk
                <FaArrowRight className="transition duration-300 group-hover:translate-x-1" />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Services;