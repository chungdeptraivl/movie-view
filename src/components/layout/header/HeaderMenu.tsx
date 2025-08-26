"use client";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { fetchCategory, fetchCountries, Prop } from "@/services/hederService";
import Link from "next/link";
import { useEffect, useState } from "react";
const types = ["Phim bộ", "Phim lẻ", "Chiếu rạp"];

export default function HeaderMenu() {
  const [categories, setCategories] = useState<Prop[]>([]);
  const [countries, setCountries] = useState<Prop[]>([]);

  useEffect(() => {
    fetchCategory()
      .then((data) => {
        setCategories(data);
      })
      .catch((err) => console.error("Lỗi load thể loại:", err));

    fetchCountries()
      .then((data) => {
        setCountries(data);
      })
      .catch((err) => console.error("Lỗi load quốc gia:", err));
  }, []);

  return (
    <Menubar className="bg-transparent border-0 text-gray-200 space-x-6">
      <MenubarMenu>
        <MenubarTrigger className="text-gray-200 hover:text-red-400 transition cursor-pointer text-lg font-semibold">
          <Link href={`/`}>Trang chủ</Link>
        </MenubarTrigger>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger className="text-gray-200 hover:text-red-400 transition cursor-pointer text-lg font-semibold">
          Thể loại
        </MenubarTrigger>
        <MenubarContent className="bg-gray-900 text-gray-200 p-4 rounded-lg w-[500px]">
          <div className="grid grid-cols-4 gap-2">
            {categories.map((cat) => (
              <MenubarItem key={String(cat.id)} asChild>
                <Link
                  href={`/categories/${cat.slug}`}
                  className="px-3 py-2 text-sm rounded-md hover:bg-gray-800 hover:text-red-400 transition cursor-pointer"
                >
                  {cat.name}
                </Link>
              </MenubarItem>
            ))}
          </div>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger className="text-gray-200 hover:text-red-400 transition cursor-pointer text-lg font-semibold">
          Quốc gia
        </MenubarTrigger>
        <MenubarContent className="bg-gray-900 text-gray-200 p-4 rounded-lg w-[500px]">
          <div className="grid grid-cols-4 gap-2">
            {countries.map((c) => (
              <MenubarItem key={c.id} asChild>
                <Link
                  href={`/countries/${c.slug}`}
                  className="px-3 py-2 text-sm rounded-md hover:bg-gray-800 hover:text-red-400 transition cursor-pointer"
                >
                  {c.name}
                </Link>
              </MenubarItem>
            ))}
          </div>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger className="text-gray-200 hover:text-red-400 transition cursor-pointer text-lg font-semibold">
          Phim
        </MenubarTrigger>
        <MenubarContent className="bg-gray-900 text-gray-200 p-4 rounded-lg w-[160px]">
          <div className="grid grid-cols-1 gap-2">
            {types.map((t) => (
              <MenubarItem key={t} asChild>
                <Link
                  href={`/types/${t.toLowerCase().replace(/\s+/g, "-")}`}
                  className="px-3 py-2 text-sm rounded-md hover:bg-gray-800 hover:text-red-400 transition cursor-pointer"
                >
                  {t}
                </Link>
              </MenubarItem>
            ))}
          </div>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
