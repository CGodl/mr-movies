import { Movie, TMDBResponse } from "@/types/movies";


export const fetchMovies = async (): Promise<Movie[]> => {
    const TMDB_BASE_URL = "https://api.themoviedb.org/3";
    const apiKey = process.env.TMDB_API_KEY;

    if (!apiKey) {
        throw new Error("Missing TMDB_API_KEY. Add it to env")
    }

    const url = new URL(`${TMDB_BASE_URL}/discover/movie`);
    url.searchParams.set("api_key", apiKey);
    url.searchParams.set("page", "1");
    url.searchParams.set("sort_by", "popularity.desc");
    url.searchParams.set("primary_release_year", "2025")

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`TMDB request failed: ${response.status}`);
    }
    const data: TMDBResponse = await response.json();

    console.log(data.results)

    return data.results;
}