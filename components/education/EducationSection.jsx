"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

const timeline = [
  {
    type: "Education",
    icon: <FaGraduationCap />,
    title: "Enugu State University of Science and Technology",
    shortName: "ESUT",
    role: "Bachelor of Engineering in Electrical and Electronics Engineering",
    date: "2015 - 2020",
    image: "/esut2.jpg",
    description:
      "Built a strong foundation in electrical systems, electronics, engineering design, problem solving, and technical innovation.",
  },
  {
    type: "Education",
    icon: <FaGraduationCap />,
    title: "Aptech Computer Education, Enugu",
    shortName: "Aptech",
    role: "Diploma & Advanced Diploma in Software Engineering",
    date: "2021 - 2021",
    image: "/education/aptech.jpg",
    description:
      "Gained practical software development skills including HTML, CSS, JavaScript, frontend development, databases, and application development.",
  },
  {
    type: "Internship",
    icon: <FaBriefcase />,
    title: "Samba Research Institute, Enugu",
    shortName: "Samba Research",
    role: "Frontend Developer Intern",
    date: "2022 - 2023",
    image: "/education/samba.jpg",
    description:
      "Worked on frontend development tasks, user interface design, responsive layouts, and practical web development projects.",
  },
  {
    type: "Internship",
    icon: <FaBriefcase />,
    title: "Turing Tech LLC",
    shortName: "Turing Tech",
    role: "Full-Stack Developer & AI Language Model Trainee",
    date: "2025 - Present",
    image: "/education/turing-tech.jpg",
    description:
      "Currently gaining hands-on experience in full-stack development, artificial intelligence, language models, prompt engineering, and modern AI-powered applications.",
  },
];

export default function EducationSection() {
  return (
    <section
      id="education"
      className="w-full bg-[#050816] px-6 py-24 text-white md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Education & Internship
          </p>

          <h2 className="text-3xl font-bold md:text-5xl">
            My Learning Journey & Professional Growth
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-300 md:text-lg">
            A timeline of my academic background, software engineering training,
            internship programs, and continuous growth in technology,
            engineering, and artificial intelligence.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-5 top-0 h-full w-0.5 bg-cyan-400/30 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-14">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className={`relative grid gap-8 md:grid-cols-2 md:items-center ${
                  index % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"
                }`}
              >
                {/* Tree Dot */}
                <div className="absolute left-0 top-8 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400 bg-[#050816] text-cyan-400 shadow-lg shadow-cyan-400/30 md:left-1/2 md:-translate-x-1/2">
                  {item.icon}
                </div>

                {/* Card */}
                <div
                  className={`ml-16 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-cyan-400/50 hover:bg-white/10 md:ml-0 ${
                    index % 2 === 0 ? "md:mr-12" : "md:ml-12"
                  }`}
                >
                  <div className="relative mb-6 h-52 overflow-hidden rounded-2xl">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

                    <span className="absolute left-4 top-4 rounded-full bg-cyan-400 px-4 py-2 text-sm font-bold text-[#050816]">
                      {item.type}
                    </span>

                    <span className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-black/40 px-4 py-2 text-sm text-white backdrop-blur">
                      {item.date}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold">{item.shortName}</h3>

                  <p className="mt-2 text-lg font-semibold text-cyan-300">
                    {item.role}
                  </p>

                  <p className="mt-2 text-sm text-slate-400">{item.title}</p>

                  <p className="mt-5 leading-7 text-slate-300">
                    {item.description}
                  </p>
                </div>

                {/* Empty Space */}
                <div className="hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}