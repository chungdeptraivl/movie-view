"use client";

import Link from "next/link";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";

const categories = [
  "Hành động",
  "Tình cảm",
  "Hoạt hình",
  "Kinh dị",
  "Hài hước",
  "Phiêu lưu",
  "Tâm lý",
  "Viễn tưởng",
  "Cổ trang",
  "Âm nhạc",
  "Thể thao",
  "Chiến tranh",
  "Gia đình",
  "Tội phạm",
  "Võ thuật",
  "Khoa học",
];
const countries = [
  "Việt Nam",
  "Mỹ",
  "Hàn Quốc",
  "Nhật Bản",
  "Trung Quốc",
  "Thái Lan",
  "Ấn Độ",
  "Anh",
  "Pháp",
  "Úc",
  "Đài Loan",
  "Hong Kong",
];
const types = ["Phim bộ", "Phim lẻ", "Chiếu rạp"];

export default function HeaderMenu() {
  return (
    <Menubar className="bg-transparent border-0 text-gray-200 space-x-6">
      <MenubarMenu>
        <MenubarTrigger className="text-gray-200 hover:text-red-400 transition cursor-pointer">
          <Link href={`/`}>Trang chủ</Link>
        </MenubarTrigger>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger className="text-gray-200 hover:text-red-400 transition cursor-pointer">
          Thể loại
        </MenubarTrigger>
        <MenubarContent className="bg-gray-900 text-gray-200 p-4 rounded-lg w-[500px]">
          <div className="grid grid-cols-4 gap-2">
            {categories.map((cat) => (
              <MenubarItem key={cat} asChild>
                <Link
                  href={`/categories/${cat.toLowerCase().replace(/\s+/g, "-")}`}
                  className="px-3 py-2 text-sm rounded-md hover:bg-gray-800 hover:text-red-400 transition cursor-pointer"
                >
                  {cat}
                </Link>
              </MenubarItem>
            ))}
          </div>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger className="text-gray-200 hover:text-red-400 transition cursor-pointer">
          Quốc gia
        </MenubarTrigger>
        <MenubarContent className="bg-gray-900 text-gray-200 p-4 rounded-lg w-[500px]">
          <div className="grid grid-cols-4 gap-2">
            {countries.map((c) => (
              <MenubarItem key={c} asChild>
                <Link
                  href={`/countries/${c.toLowerCase().replace(/\s+/g, "-")}`}
                  className="px-3 py-2 text-sm rounded-md hover:bg-gray-800 hover:text-red-400 transition cursor-pointer"
                >
                  {c}
                </Link>
              </MenubarItem>
            ))}
          </div>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger className="text-gray-200 hover:text-red-400 transition cursor-pointer">
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
