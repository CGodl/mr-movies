import { MovieBrowser } from "@/components/MovieBrowser";
import { fetchMovies } from "@/data/fetchMovies";

export default async function HomePage() {
  const movies = await fetchMovies();
  return (
    <main>
      <MovieBrowser movies={movies}>
        <p className="px-6 font-semibold font-md">The best website to find movies focused on 2025 and 2025 only</p>
      </MovieBrowser>
    </main>
  );
};
