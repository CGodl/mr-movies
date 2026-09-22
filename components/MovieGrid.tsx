'use client'

import { Movie } from '@/types/movies';
import { MovieCard } from './Card/MovieCard';
import { useState } from 'react';

export const MovieGrid = ({ movies }: { movies: Movie[] }) => {
    const [query, setQuery] = useState("");

    const q = query.trim().toLowerCase();
    const filteredMovies = q
    ? movies.filter((movie) => movie.title.toLowerCase().startsWith(q))
    : movies;

	return (
		<>
            <label className='flex flex-col'>
                <span>Search for Films</span>
                <input 
                    type='text'
                    value={query}
                    placeholder='Search by title'
                    onChange={((e) => setQuery(e.target.value))}                
                    />
            </label>
			<ul className='grid grid-cols-2 gap-4 p-2 sm:grid-cols-3 lg:grid-cols-6'>
				{filteredMovies.map((movie: Movie) => (
					<li key={movie.id}>
						<MovieCard movie={movie} />
					</li>
				))}
			</ul>
		</>
	);
};
