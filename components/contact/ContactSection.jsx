"use client";

import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="w-full bg-[#050816] px-6 py-24 text-white md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* Availability Banner */}
        <div className="mb-16 overflow-hidden rounded-3xl border border-cyan-400/30 bg-linear-to-r from-cyan-400/15 via-white/5 to-purple-500/15 p-8 text-center shadow-2xl">
          <h3 className="text-2xl font-bold md:text-4xl">
            Available for Projects, Freelance & Collaboration
          </h3>
          <p className="mx-auto mt-4 max-w-3xl text-slate-300">
            I am open to web development projects, AI-related tasks, electrical
            engineering support, business websites, and long-term collaboration.
          </p>
        </div>

        {/* Header */}
        <div className="mb-14 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Contact Me
          </p>

          <h2 className="text-3xl font-bold md:text-5xl">
            Let’s Build Something Great Together
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-300 md:text-lg">
            Have a project, job opportunity, collaboration idea, or freelance
            work? Send me a message and I will respond as soon as possible.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Contact Info */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur">
            <h3 className="text-2xl font-bold">Contact Information</h3>
            <p className="mt-3 text-slate-300">
              Reach me directly through any of the channels below.
            </p>

            <div className="mt-8 space-y-5">
              <a
                href="mailto:your-email@gmail.com"
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#050816]/60 p-4 transition hover:border-cyan-400/50"
              >
                <span className="rounded-full bg-cyan-400/10 p-3 text-cyan-400">
                  <FaEnvelope />
                </span>
                <div>
                  <p className="text-sm text-slate-400">Email</p>
                  <p className="font-semibold">your-email@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+234XXXXXXXXXX"
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#050816]/60 p-4 transition hover:border-cyan-400/50"
              >
                <span className="rounded-full bg-cyan-400/10 p-3 text-cyan-400">
                  <FaPhoneAlt />
                </span>
                <div>
                  <p className="text-sm text-slate-400">Phone</p>
                  <p className="font-semibold">+234 XXX XXX XXXX</p>
                </div>
              </a>

              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#050816]/60 p-4">
                <span className="rounded-full bg-cyan-400/10 p-3 text-cyan-400">
                  <FaMapMarkerAlt />
                </span>
                <div>
                  <p className="text-sm text-slate-400">Location</p>
                  <p className="font-semibold">Enugu, Nigeria</p>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="mt-10">
              <p className="mb-4 font-semibold">Connect with me</p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  className="rounded-full border border-white/10 bg-white/5 p-4 text-xl transition hover:border-cyan-400 hover:text-cyan-400"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="https://github.com"
                  target="_blank"
                  className="rounded-full border border-white/10 bg-white/5 p-4 text-xl transition hover:border-cyan-400 hover:text-cyan-400"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://facebook.com"
                  target="_blank"
                  className="rounded-full border border-white/10 bg-white/5 p-4 text-xl transition hover:border-cyan-400 hover:text-cyan-400"
                >
                  <FaFacebook />
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  className="rounded-full border border-white/10 bg-white/5 p-4 text-xl transition hover:border-cyan-400 hover:text-cyan-400"
                >
                  <FaInstagram />
                </a>

                <a
                  href="https://wa.me/234XXXXXXXXXX"
                  target="_blank"
                  className="rounded-full border border-white/10 bg-white/5 p-4 text-xl transition hover:border-cyan-400 hover:text-cyan-400"
                >
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur">
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-2xl border border-white/10 bg-[#050816]/70 px-5 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-2xl border border-white/10 bg-[#050816]/70 px-5 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400"
                />
              </div>
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-sm text-slate-300">
                Subject
              </label>
              <input
                type="text"
                placeholder="Project inquiry, job offer, collaboration..."
                className="w-full rounded-2xl border border-white/10 bg-[#050816]/70 px-5 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400"
              />
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-sm text-slate-300">
                Message
              </label>
              <textarea
                rows="6"
                placeholder="Tell me about your project..."
                className="w-full resize-none rounded-2xl border border-white/10 bg-[#050816]/70 px-5 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="mt-8 w-full rounded-full bg-cyan-400 px-8 py-4 font-bold text-[#050816] transition hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/30"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}