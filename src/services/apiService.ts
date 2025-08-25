import { axiosClient } from "./axiosClient";

export interface Movie {
  id: string;
  name: string;
  slug: string;
  poster_url: string;
  thumb_url: string;
  year: number;
  episode_current: string;
}

class MovieService {
  async getMoviesByType(apiPath: string, page = 1, limit = 30): Promise<Movie[]> {
    try {
     const res = await axiosClient.get(`${apiPath}?page=${page}&limit=${limit}`);
      const items = res.data.data.items || [];

      return items.map((item: any) => ({
        id: item._id || item.id,
        name: item.name,
        slug: item.slug,
        poster_url: item.poster_url
          ? `https://phimapi.com/image.php?url=https://phimimg.com/${item.poster_url}`
          : "/no-image.jpg",
        thumb_url: item.thumb_url
          ? `https://phimapi.com/image.php?url=https://phimimg.com/${item.thumb_url}`
          : "/no-image.jpg",
        year: item.year,
        episode_current: item.episode_current,
      }));
    } catch (error) {
      console.error("❌ Error fetching movies:", error);
      return [];
    }
  }
}

export const movieService = new MovieService();
