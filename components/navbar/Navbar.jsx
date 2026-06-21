
"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";

const navLinks = [
  { name: "Home", href: "/#home" },
  { name: "Services", href: "/#services" },
  { name: "Skills", href: "/#skills" },
  { name: "Projects", href: "/#projects" },
  { name: "Books", href: "/#books" },
  { name: "Blog", href: "/blog" },
];

const socials = [
  { icon: <FaFacebookF />, href: "https://facebook.com", label: "Facebook" },
  { icon: <FaLinkedinIn />, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: <FaInstagram />, href: "https://instagram.com", label: "Instagram" },
  { icon: <FaGithub />, href: "https://github.com", label: "GitHub" },
];

const Navbar =() => {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#081120]/90 backdrop-blur-xl"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link href="/#home" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br from-cyan-500 via-blue-500 to-indigo-600 text-xl font-extrabold text-white shadow-lg shadow-cyan-500/30">
            F
          </div>

          <span className="text-lg font-bold tracking-wide text-white">
            Franklin Okeke
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 transition hover:text-cyan-400"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <Link
          href="/#contact"
          className="hidden rounded-full bg-cyan-500 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/25 transition hover:bg-cyan-400 lg:inline-flex"
        >
          Contact Me
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="inline-flex text-3xl text-white md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -20, height: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="overflow-hidden border-t border-white/10 bg-[#081120]/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-4 px-5 py-6">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.06 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-base font-medium text-slate-200 transition hover:bg-white/10 hover:text-cyan-400"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <div className="mt-4 border-t border-white/10 pt-5">
                <p className="mb-4 text-sm text-slate-400">
                  Connect with me
                </p>

                <div className="flex items-center gap-4">
                  {socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="rounded-full bg-slate-800 p-3 text-lg text-slate-300 transition hover:bg-cyan-500 hover:text-slate-950"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              <Link
                href="/#contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-cyan-500 px-6 py-3 text-center font-semibold text-slate-950 shadow-lg shadow-cyan-500/25 transition hover:bg-cyan-400"
              >
                Contact Me
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Navbar