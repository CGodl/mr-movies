import { Movie } from '@/types/movies';
import { MovieCard } from './Card/MovieCard';

export const MovieGrid = ({
	movies,
	query,
}: {
	movies: Movie[];
	query: string;
}) => {
	const q = query.trim().toLowerCase();
	const filteredMovies = q
		? movies.filter((movie) => movie.title.toLowerCase().startsWith(q))
		: movies;

	return (
		<ul className="grid grid-cols-2 gap-4 p-2 sm:grid-cols-3 lg:grid-cols-6">
			{filteredMovies.map((movie: Movie) => (
				<li key={movie.id}>
					<MovieCard movie={movie} />
				</li>
			))}
		</ul>
	);
};
