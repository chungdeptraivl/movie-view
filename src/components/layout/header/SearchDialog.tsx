"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Film, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const movies = [
  { id: 1, title: "Avengers: Endgame", slug: "avengers-endgame" },
  { id: 2, title: "Spider-Man: No Way Home", slug: "spiderman-no-way-home" },
  { id: 3, title: "The Batman", slug: "the-batman" },
  { id: 4, title: "Doctor Strange 2", slug: "doctor-strange-2" },
];
const suggestions = [
  { id: 5, title: "Avengers: Infinity War", slug: "avengers-infinity-war" },
  { id: 6, title: "Spider-Man: Homecoming", slug: "spiderman-homecoming" },
  { id: 7, title: "The Dark Knight", slug: "the-dark-knight" },
  { id: 8, title: "Doctor Strange", slug: "doctor-strange" },
  { id: 9, title: "Iron Man", slug: "iron-man" },
];

export default function SearchDialog() {
  const [search, setSearch] = useState("");
  const filtered = movies.filter((m) =>
    m.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:text-red-400 cursor-pointer"
        >
          <Search className="w-6 h-6" />
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-2xl w-full mt-[-15vh] p-4 md:p-6 bg-gray-900 text-white rounded-2xl shadow-2xl border border-gray-700">
        <DialogTitle className="text-xl font-semibold mb-4 text-red-400">
          Tìm kiếm phim
        </DialogTitle>

        <div className="relative md:mb-4">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input
            autoFocus
            placeholder="Nhập tên phim..."
            className="w-full bg-gray-900 border-gray-700 text-white placeholder-gray-400 text-lg pl-12 pr-4 py-3 h-12 rounded-xl"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="mt-2 max-h-72 overflow-y-auto">
          {search.trim() === "" ? (
            <>
              <p className="text-sm text-gray-400 mb-2">Gợi ý cho bạn</p>
              <ul className="grid grid-cols-1 gap-2">
                {suggestions.map((movie) => (
                  <li key={movie.id}>
                    <Link
                      href={`/movies/${movie.slug}`}
                      className="flex items-center gap-2 px-3 py-3 rounded-lg bg-gray-800/40 hover:bg-gray-800 hover:text-red-400 transition cursor-pointer"
                    >
                      <Film className="w-4 h-4 text-red-400" />
                      <span>{movie.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          ) : filtered.length > 0 ? (
            <ul className="space-y-2">
              {filtered.map((movie) => (
                <li key={movie.id}>
                  <Link
                    href={`/movies/${movie.slug}`}
                    className="flex items-center gap-2 px-3 py-3 rounded-lg hover:bg-gray-800 hover:text-red-400 transition cursor-pointer"
                  >
                    <Film className="w-4 h-4 text-red-400" />
                    <span>{movie.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <div className="flex flex-col items-center justify-center py-6 text-gray-500">
              <XCircle className="w-8 h-8 mb-2 text-gray-600" />
              <p>Không tìm thấy phim nào</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
