"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Movie } from "@/types/movies";
import { posterUrl } from "@/lib/posterUrl";

export const MovieCard = ({movie}: {movie: Movie}) => {
    const imgSrc = posterUrl(movie.poster_path);

    return (
        <motion.article
            className="relative aspect-2/3 w-full overflow-hidden rounded-3xl bg-linear-to-t"
            whileHover={{ scale: 1.06, zIndex: 10 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
        >
            <Image 
                src={imgSrc}
                alt={`${movie.title} poster`}
                fill
                className="object-cover"
            />
            <div className="pointer-events-none absolute inset-0 z-10 bg-linear-to-t from-black to-transparent backdrop-blur-md mask-t-from-20% mask-t-to-55%" />
            <div className="relative z-20 flex h-full flex-col justify-end p-6 text-white">
                <h3 className="text-xl font-bold">{movie.title}</h3>
                <p>Rating: {movie.vote_average.toFixed(1)}</p>
                <p>Release Date: {movie.release_date}</p>
            </div>
        </motion.article>
    )
};
