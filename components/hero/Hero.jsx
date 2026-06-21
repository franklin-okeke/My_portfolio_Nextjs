"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import { HiArrowRight, HiDownload, HiMail } from "react-icons/hi";
import logo from "@/public/logo.jpg"


const roles = [
  "Fullstack Developer",
  "AI Enthusiast",
  "AI Developer",
  "Electrical Engineer",
  "Author",
];

const socials = [
  { icon: <FaFacebookF />, href: "https://facebook.com", label: "Facebook" },
  { icon: <FaLinkedinIn />, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: <FaInstagram />, href: "https://instagram.com", label: "Instagram" },
  { icon: <FaGithub />, href: "https://github.com", label: "GitHub" },
];

const Hero =()=> {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#06101f] px-5 pt-28 text-white sm:px-8 lg:px-12 xl:px-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.35),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(6,182,212,0.2),transparent_35%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-size[70px_70px] opacity-20" />

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-12 lg:grid-cols-2">
        {/* Right Image - appears first on mobile */}
        <motion.div
          initial={{ opacity: 0, x: -70, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative order-1 flex justify-center lg:order-2"
        >
          <div className="absolute h-72 w-72  rounded-full bg-cyan-500/30 blur-3xl md:h-96 md:w-96" />

          <div className="relative lg:-mt-60">
            <div className="absolute -inset-4 rounded-full bg-linear-to-tr from-cyan-500/30 via-blue-500/20 to-purple-500/30 blur-2xl" />

            <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-xl">
              <Image
                src={logo}
                alt="Franklin Okeke"
                width={560}
                height={680}
                priority
                className="h-105 w-full object-cover object-top sm:h-130 md:h-162.5 lg:h-162.5"
              />
            </div>

            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -left-4 top-16 hidden rounded-2xl border border-cyan-400/30 bg-[#081120]/80 px-5 py-4 shadow-xl backdrop-blur-xl md:block"
            >
              <p className="text-sm font-semibold text-cyan-300">
                Fullstack Developer
              </p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -right-4 bottom-24 hidden rounded-2xl border border-purple-400/30 bg-[#081120]/80 px-5 py-4 shadow-xl backdrop-blur-xl md:block"
            >
              <p className="text-sm font-semibold text-purple-300">
                AI Developer
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Left Text */}
        <motion.div
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="order-2 lg:order-1"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
            <span className="h-2 w-2 rounded-full bg-cyan-400" />
            Welcome to my digital space
          </div>

          <h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
            Hello, I&apos;m{" "}
            <span className="bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Franklin Okeke
            </span>
          </h1>

          <div className="mt-6 flex h-12 items-center gap-3 text-2xl font-bold sm:text-3xl">

            <AnimatePresence mode="wait">
              <motion.span
                key={roles[roleIndex]}
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -35 }}
                transition={{ duration: 0.45 }}
                className="bg-linear-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent"
              >
                {roles[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </div>

          <div className="mt-6 h-px w-full max-w-xl bg-linear-to-r from-cyan-400 via-blue-500 to-transparent" />

          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            I am a passionate{" "}
            <span className="font-semibold text-cyan-300">
              Fullstack Developer
            </span>
            ,{" "}
            <span className="font-semibold text-blue-300">
              AI Enthusiast
            </span>
            , Electrical Engineer, and Author with competence in{" "}
            <span className="font-semibold text-cyan-300">NLP</span>,{" "}
            <span className="font-semibold text-cyan-300">
              Computer Vision
            </span>
            , and modern web technologies. I love building intelligent digital
            products, solving real-world problems, and creating useful content
            that educates and inspires people. with over years of
             professional experience, I’ve delivered value to startups and businesses using industry-standard tools, helping them to 
            grow thier customers and audience.
          </p>

          <p className="mt-5 max-w-2xl rounded-2xl border border-white/10 bg-white/5 p-5 leading-8 text-slate-300 backdrop-blur-lg">
            I&apos;m open to job opportunities, project collaborations, and
            freelance gigs where I can contribute, learn, and grow. If you have
            a good opportunity that matches my skills and experience, don&apos;t
            hesitate to contact me.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-cyan-500 to-blue-600 px-7 py-3 font-semibold text-white shadow-lg shadow-cyan-500/25 transition hover:scale-105"
            >
              Contact Me <HiMail />
            </a>

            <a
              href="/cv/Franklin_Okeke_CV.pdf"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 px-7 py-3 font-semibold text-white transition hover:border-cyan-300 hover:bg-cyan-400/10"
            >
              View My CV <HiDownload />
            </a>
          </div>

          <div className="mt-9">
            <p className="mb-4 text-sm text-slate-400">Let&apos;s connect</p>

            <div className="flex flex-wrap items-center gap-4">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/10 text-lg text-slate-200 transition hover:-translate-y-1 hover:border-cyan-400 hover:bg-cyan-500 hover:text-slate-950"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#services"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center text-sm text-slate-400 lg:flex"
      >
        <span>Scroll Down</span>
        <HiArrowRight className="mt-2 rotate-90 text-xl text-cyan-400" />
      </motion.a>
    </section>
  );
}

export default Hero