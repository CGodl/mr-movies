import { Clapperboard } from 'lucide-react';

type NavBarProps = {
	query: string;
	onQueryChange: (value: string) => void;
};

export const NavBar = ({ query, onQueryChange }: NavBarProps) => {
	return (
		<nav className="flex items-center justify-between gap-4 px-6 py-4">
			<div className="flex shrink-0 items-center gap-2">
                <Clapperboard />
				<p className="text-2xl font-semibold">Mr. Movies</p>
			</div>
            <div>
                <input
                    type="text"
                    value={query}
                    placeholder="Search by title"
                    aria-label="Search for films"
                    onChange={(event) => onQueryChange(event.target.value)}
                    className="w-full max-w-xs rounded-md border border-neutral-300 bg-transparent px-3 py-2 dark:border-neutral-700"
                />
            </div>
		</nav>
	);
};
