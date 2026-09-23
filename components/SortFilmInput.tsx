import { SortKey } from "@/types/sortkey";

const sortKeySelection = [
    {value: 'release_date', title: "Release Date"},
    {value: 'title', title: "Title"},
    {value: 'rating', title: 'Rating'}
]



export const SortFilmInput = ({sortKey, setSortKey}: {sortKey: SortKey, setSortKey: (value: SortKey) => void}) => {

    return (
        <select
            value={sortKey}
            onChange={(e) => setSortKey(e.target.value as SortKey)}
            className="w-full max-w-xs rounded-md border border-neutral-300 bg-transparent px-3 py-2 dark:border-neutral-700"

        >
            <option disabled value="">Sort By</option>
            {
                sortKeySelection.map((field) => {
                    return <option key={field.value} value={field.value}>{field.title}</option>
                })
            }
        </select>
    )
}