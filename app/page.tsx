import { fetchMovies } from "@/data/fetchMovies";
import { Movie } from "@/types/movies";

export default async function HomePage() {
  const movies = await fetchMovies();
  return (
    <main>
      <h1>Mr. Movies 2025</h1>
      <p>The best website to find movies focused on 2025 and 2025 only</p>
      <ul>
        {movies.map((movie: Movie) => (
          <li key={movie.id}>
            {movie.title}
          </li>
        ))}
      </ul>
    </main>
  );
}
