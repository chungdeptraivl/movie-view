import SearchPage from "@/app/search/SearchClient";
import { Suspense } from "react";
import { Loader2 } from "lucide-react";
export { generateMetadata } from "./metadata";

export default function Page() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen grid place-items-center bg-black text-white">
          <Loader2 className="h-10 w-10 animate-spin text-red-500" />
        </main>
      }
    >
      <SearchPage />
    </Suspense>
  );
}
