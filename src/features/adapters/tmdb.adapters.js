import { TMDB_PATHS } from "../../core/datasources/remote/tmdb/tmdbApi";


export const tmdbMoviesTvAdapter = (response) => {

    const {results} = response;

    return results.map((item) => ({
        id: item.id,
        title: item.title || item.name,
        poster: `${TMDB_PATHS.images.poster.url}${TMDB_PATHS.images.poster.sizes.original}${item.poster_path}`,
        backdrop: `${TMDB_PATHS.images.backdrop.url}${TMDB_PATHS.images.backdrop.sizes.original}${item.backdrop_path}`,
        description: item.overview,
        rating: item.vote_average,
        video: item.video,
        }))
};