// SERVICIOS = LLAMADA A LA API

import { TMDB_API, TMDB_PATHS } from "../../../core/datasources/remote/tmdb/tmdbApi"
import { tmdbMoviesTvAdapter } from "../../adapters/tmdb.adapters";

export const getPopularMovies = async () => {
    const { data } = await TMDB_API.get(
        TMDB_PATHS.movies.popular
    );
    return tmdbMoviesTvAdapter(data);
};

export const getTopRatedMovies = async () => {
    const { data } = await TMDB_API.get(
        TMDB_PATHS.movies.top_rated
    );
    return tmdbMoviesTvAdapter(data);
};

export const getUpcomingMovies = async () => {
    const { data } = await TMDB_API.get(
        TMDB_PATHS.movies.upcoming
    );
    return tmdbMoviesTvAdapter(data);
};

export const getNowPlayingMovies = async () => {
    const { data } = await TMDB_API.get(
        TMDB_PATHS.movies.now_playing
    );
    return tmdbMoviesTvAdapter(data);
}



