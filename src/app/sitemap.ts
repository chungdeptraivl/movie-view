import { getAllMovies, Movie } from "@/lib/utils";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    const movies: Movie[] = await getAllMovies();
    if (!Array.isArray(movies)) return [];

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://phimngay.top";

    return movies.map((m) => ({
      url: `${siteUrl}/movies/${m.slug}`,
      lastModified: m.updatedAt ? new Date(m.updatedAt) : new Date(),
    }));
  } catch (err) {
    console.error("Sitemap fetch error:", err);
    return [];
  }
}
