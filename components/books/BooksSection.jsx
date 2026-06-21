"use client";

import Image from "next/image";
import { FaAmazon } from "react-icons/fa";

const books = [
  {
    title: "The Wealth Blueprint",
    caption: "A practical guide to financial freedom, smart investing, and building lasting wealth.",
    image: "/the wealth blueprint main.png",
    amazonLink: "https://amazon.com",
  },
  {
    title: "AI Income Opportunities",
    caption: "Discover modern ways young people can use AI tools to create income and build digital skills.",
    image: "/books/ai-income.jpg",
    amazonLink: "https://amazon.com",
  },
];

export default function BooksSection() {
  return (
    <section
      id="books"
      className="w-full bg-[#050816] px-6 py-24 text-white md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            My Books
          </p>

          <h2 className="text-3xl font-bold md:text-5xl">
            Books Written to Educate, Inspire & Build Wealth
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-300 md:text-lg">
            Explore my published books designed to help readers understand
            finance, technology, wealth creation, and modern digital
            opportunities.
          </p>
        </div>

        {/* Books Grid */}
        <div className="grid gap-10 md:grid-cols-2">
          {books.map((book, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-cyan-400/50 hover:bg-white/10"
            >
              <div className="grid gap-8 md:grid-cols-[220px_1fr] md:items-center">
                {/* Book Image */}
                <a
                  href={book.amazonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative mx-auto block h-80 w-55 overflow-hidden rounded-2xl shadow-xl shadow-black/40"
                >
                  <Image
                    src={book.image}
                    alt={book.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />
                </a>

                {/* Book Content */}
                <div>
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
                    <FaAmazon className="text-lg" />
                    Available on Amazon
                  </div>

                  <h3 className="text-2xl font-bold md:text-3xl">
                    {book.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-300">
                    {book.caption}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-4">
                    <a
                      href={book.amazonLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 rounded-full bg-cyan-400 px-6 py-3 font-semibold text-[#050816] transition hover:bg-cyan-300"
                    >
                      <FaAmazon className="text-xl" />
                      Buy on Amazon
                    </a>

                    <a
                      href={book.amazonLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-300"
                    >
                      View Book
                    </a>
                  </div>
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl transition group-hover:bg-cyan-400/30" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}