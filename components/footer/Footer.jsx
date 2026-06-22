import {
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

const quickLinks = ["Home", "Services", "Skills", "Projects", "Education", "Books", "Contact"];

const socials = [
  { name: "Facebook", icon: <FaFacebookF />, link: "https://facebook.com" },
  { name: "Twitter (X)", icon: <FaXTwitter />, link: "https://x.com" },
  { name: "Instagram", icon: <FaInstagram />, link: "https://instagram.com" },
  { name: "GitHub", icon: <FaGithub />, link: "https://github.com" },
  { name: "LinkedIn", icon: <FaLinkedinIn />, link: "https://linkedin.com" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#050816] px-6 pt-20 text-white md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 border-t border-white/10 py-14 md:grid-cols-3">
          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-2xl font-bold">Quick Links</h3>
            <p className="mb-5 text-sm uppercase tracking-[0.25em] text-cyan-400">
              Navigation
            </p>

            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-slate-300 transition hover:text-cyan-400"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="mb-6 text-2xl font-bold">Follow Me</h3>

            <ul className="space-y-4">
              {socials.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-slate-300 transition hover:text-cyan-400"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg">
                      {social.icon}
                    </span>
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-2xl font-bold">Get in Touch</h3>

            <div className="space-y-5 text-slate-300">
              <a
                href="mailto:franklinokeke2016@gmail.com"
                className="flex items-start gap-4 transition hover:text-cyan-400"
              >
                <FaEnvelope className="mt-1 text-cyan-400" />
                <span>franklinokeke2016@gmail.com</span>
              </a>

              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="mt-1 text-cyan-400" />
                <span>
                  No 4, Admiralty Way, Lekki Phase 1, Lagos, Nigeria.
                </span>
              </div>

              <a
                href="tel:+2348103919717"
                className="flex items-start gap-4 transition hover:text-cyan-400"
              >
                <FaPhoneAlt className="mt-1 text-cyan-400" />
                <span>+234 810 391 9717</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 py-6 text-center text-sm text-slate-400">
          © 2026 Franklin Okeke. All rights reserved.
        </div>
      </div>
    </footer>
  );
}