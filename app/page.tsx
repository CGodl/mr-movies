import { MovieCard } from "@/components/Card/MovieCard";
import { MovieGrid } from "@/components/MovieGrid";

import { fetchMovies } from "@/data/fetchMovies";
import { Movie } from "@/types/movies";

export default async function HomePage() {
  const movies = await fetchMovies();
  return (
    <main>
      <h1 className="text-5xl">Mr. Movies 2025</h1>
      <p>The best website to find movies focused on 2025 and 2025 only</p>
      <MovieGrid movies={movies} />
    </main>
  );
}
