'use client';

import { useState, type ReactNode } from 'react';
import { Movie } from '@/types/movies';
import { NavBar } from '@/components/NavBar';
import { MovieGrid } from '@/components/MovieGrid';
import { SortKey } from '@/types/sortkey';



export const MovieBrowser = ({
	movies,
	children,
}: {
	movies: Movie[];
	children: ReactNode;
}) => {
	const [query, setQuery] = useState('');
	const [ sortKey, setSortKey ] = useState<SortKey>("");

	return (
		<div className='min-h-dvh bg-linear-to-r from-indigo-900 to-zinc-900'>
			<NavBar query={query} onQueryChange={setQuery} sortKey={sortKey} setSortKey={setSortKey} />
			{children}
			<MovieGrid movies={movies} query={query} sortKey={sortKey}/>
		</div>
	);
};
