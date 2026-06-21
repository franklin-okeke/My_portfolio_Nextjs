"use client";

import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/2348103919717"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat me on WhatsApp"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        duration: 0.5,
        delay: 1,
      }}
      className="fixed bottom-6 right-6 z-999 flex items-center gap-3"
    >
      {/* Text Bubble */}
      <motion.div
        animate={{
          x: [0, -6, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="hidden rounded-full border border-green-400/20 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-xl md:flex"
      >
        Chat Me Up 👋
      </motion.div>

      {/* WhatsApp Icon */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
        }}
        className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl shadow-green-500/40"
      >
        <FaWhatsapp size={34} />
      </motion.div>
    </motion.a>
  );
}