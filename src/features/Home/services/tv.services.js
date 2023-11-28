import { TMDB_API, TMDB_PATHS } from "../../../core/datasources/remote/tmdb/tmdbApi"
import { tmdbMoviesTvAdapter } from "../../adapters/tmdb.adapters";

export const getPopularTv = async () => {
    const { data } = await TMDB_API.get(
        TMDB_PATHS.tv.popular
    );
    return tmdbMoviesTvAdapter(data);
};

export const getTopRatedTv = async () => {
    const { data } = await TMDB_API.get(
        TMDB_PATHS.tv.top_rated
    );
    return tmdbMoviesTvAdapter(data);
};

