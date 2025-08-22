"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

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

export default function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:text-red-400"
        >
          <Menu className="w-6 h-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="bg-gray-900 text-white p-6">
        <SheetHeader className="hidden">
          <SheetTitle></SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col space-y-4">
          <Link href="/" className="hover:text-red-400">
            Trang chủ
          </Link>
          <div>
            <p className="text-red-400 font-semibold">Thể loại</p>
            <div className="grid grid-cols-2 gap-2 mt-2">
              {categories.map((cat) => (
                <Link
                  key={cat}
                  href={`/categories/${cat.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-sm hover:text-red-400"
                >
                  {cat}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-red-400 font-semibold">Quốc gia</p>
            <div className="grid grid-cols-2 gap-2 mt-2">
              {countries.map((c) => (
                <Link
                  key={c}
                  href={`/countries/${c.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-sm hover:text-red-400"
                >
                  {c}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-red-400 font-semibold">Phim</p>
            <div className="flex flex-col gap-2 mt-2">
              {types.map((t) => (
                <Link
                  key={t}
                  href={`/types/${t.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-sm hover:text-red-400"
                >
                  {t}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
