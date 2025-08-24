"use client";

import { sectionsMovieCategory } from "@/contants/mock-movies";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import Link from "next/link";

type Movie = {
  id: string | number;
  thumbnail: string;
  title: string;
  tag?: string;
  status?: string;
};

type MovieSectionProps = {
  title: string;
  movies: Movie[];
  slug: string;
};

const MovieSection = ({ title, movies, slug }: MovieSectionProps) => {
  return (
    <div className="mb-12">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">{title}</h2>
        <Link
          href={`/category/${slug}`}
          className="text-base sm:text-lg text-red-500 hover:underline font-medium"
        >
          Xem thêm
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {movies.map((movie, i) => (
          <Link key={movie.id} href={`/movie/${movie.id}`}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="relative group cursor-pointer rounded-lg overflow-hidden"
            >
              <img
                src={movie.thumbnail}
                alt={movie.title}
                className="w-full aspect-[0.7] object-cover transition-transform duration-300 group-hover:scale-110"
              />

              {movie.tag && (
                <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-0.5 rounded">
                  {movie.tag}
                </span>
              )}

              {movie.status && (
                <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-0.5 rounded">
                  {movie.status}
                </span>
              )}

              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex flex-col items-center justify-center text-center p-2">
                <h3 className="text-white font-semibold text-sm sm:text-base line-clamp-2 mb-2">
                  {movie.title}
                </h3>
                <button className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-xl text-sm font-bold transition cursor-pointer">
                  <Play size={16} /> Xem ngay
                </button>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default function MovieCategories() {
  return (
    <div className="px-4 sm:px-8 py-8">
      {sectionsMovieCategory.map((sec) => (
        <MovieSection
          key={sec.title}
          title={sec.title}
          movies={sec.movies}
          slug={sec.slug}
        />
      ))}
    </div>
  );
}
