import axios from 'axios'

// centralizacion del uso de la API
export const TMDB_API = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: import.meta.env.VITE_APP_TMDB_API_KEY,
    }
});

export const TMDB_PATHS = {
    movies: {
        popular: '/movie/popular',
        upcoming: '/movie/upcoming',
        top_rated: '/movie/top_rated',
        now_playing: '/movie/now_playing',
    },
    tv: {
        popular: '/tv/popular',
        top_rated: '/tv/top_rated',
    },
    images: {
        poster: {
            sizes: {
                w92: '/w92',
                w154: '/w154',
                w185: '/w185',
                w342: '/w342',
                w500: '/w500',
                w780: '/w780',
                original: '/original',
            },
            url: `https://image.tmdb.org/t/p`,
        },
        backdrop: {
            sizes: {
                w300: '/w300',
                w780: '/w780',
                w1280: '/w1280',
                original: '/original',
            },
                url: `https://image.tmdb.org/t/p`
        },
    }
}