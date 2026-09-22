const baseURL = "https://image.tmdb.org/t/p";
const fallbackPoster = "/img/ImageNotFound.png";


export const posterUrl = (poster_path: string | null, size = "w500"): string => {

    if (!poster_path) {
        return fallbackPoster;
    }

    return `${baseURL}/${size}/${poster_path}`;
}