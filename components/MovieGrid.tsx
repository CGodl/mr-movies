import { Movie } from '@/types/movies';
import { MovieCard } from './Card/MovieCard';
import { SortKey } from '@/types/sortkey';


export const MovieGrid = ({
	movies,
	query,
    sortKey
}: {
	movies: Movie[];
	query: string;
    sortKey: SortKey;
}) => {


	const q = query.trim().toLowerCase();
	const filteredMovies = q
		? movies.filter((movie) => movie.title.toLowerCase().startsWith(q))
		: movies;

    const sortedMovies = sortKey === "" ? filteredMovies : filteredMovies.toSorted((a, b) => {
        if (sortKey === "title") {
            return a.title.localeCompare(b.title);
        }
        if (sortKey === "rating") {
            return b.vote_average - a.vote_average;
        }

        return b.release_date.localeCompare(a.release_date);
        });

	return (
		<ul className="grid grid-cols-2 gap-4 p-2 sm:grid-cols-3 lg:grid-cols-6">
			{sortedMovies.map((movie: Movie) => (
				<li key={movie.id}>
					<MovieCard movie={movie} />
				</li>
			))}
		</ul>
	);
};
