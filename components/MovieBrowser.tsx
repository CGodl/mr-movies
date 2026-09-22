'use client';

import { useState, type ReactNode } from 'react';
import { Movie } from '@/types/movies';
import { NavBar } from '@/components/NavBar';
import { MovieGrid } from '@/components/MovieGrid';

export const MovieBrowser = ({
	movies,
	children,
}: {
	movies: Movie[];
	children: ReactNode;
}) => {
	const [query, setQuery] = useState('');

	return (
		<>
			<NavBar query={query} onQueryChange={setQuery} />
			{children}
			<MovieGrid movies={movies} query={query} />
		</>
	);
};
