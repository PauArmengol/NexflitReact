import { CarouselSwiper } from "../../core/components/CarouselSwiper/CarouselSwiper"
import SwiperSlide from "../../core/components/CarouselSwiper/components/SwiperSlide"
import Header from "../../core/components/Header/Header"
import Footer from "../../core/components/Footer/Footer"
import useSWR from "swr"
import { getNowPlayingMovies, getPopularMovies, getTopRatedMovies, getUpcomingMovies } from "./services/movies.services"
import CarouselSection from "../../core/components/CarouselSection/CarouselSection"
import { getPopularTv, getTopRatedTv } from "./services/tv.services"
import Banner from "../../core/components/Banner/Banner"

const Home = () => {

    // MOVIES
    const { 
        data : popularMovies, 
        error: popularMoviesError, 
        isLoading: popularMoviesIsLoading 
    } = useSWR('getPopularMovies', getPopularMovies);

    const { 
        data : topRatedMovies, 
        error: topRatedMoviesError, 
        isLoading: topRatedMoviesIsLoading 
    } = useSWR('getTopRatedMovies', getTopRatedMovies);

    const { 
        data : upcomingMovies, 
        error: upcomingMoviesError, 
        isLoading: upcomingMoviesIsLoading 
    } = useSWR('getUpcomingMovies', getUpcomingMovies);

    const {
        data: nowPlayingMovies,
        error: nowPlayingMoviesError,
        isLoading: nowPlayingMoviesIsLoading
    } = useSWR('getNowPlayingMovies', getNowPlayingMovies);


    // TV
    const { 
        data: popularTv, 
        error: popularTvError,
        isLoading: popularTvIsLoading
    } = useSWR('getPopularTv', getPopularTv);

    const { 
        data: topRatedTv, 
        error: topRatedTvError,
        isLoading: topRatedTvIsLoading
    } = useSWR('getTopRatedTv', getTopRatedTv);    

    return (

        <>
            <Header />

            <Banner />
        
            <CarouselSection 
                data={popularMovies}
                title={"Popular Movies"}
            />

            <CarouselSection
                data={topRatedMovies}
                title={"Top Rated Movies"}
            />
            
            <CarouselSection 
                data={upcomingMovies}
                title={"Upcoming Movies"}
            />

            <CarouselSection 
                data={nowPlayingMovies}
                title={"Now Playing"}
            />

            <CarouselSection 
                data={popularTv}
                title={"Popular TV Shows"}
            />

            <CarouselSection
                data={topRatedTv}
                title={"Top Rated TV Shows"}
            />
        
            <Footer />
        </>
    )
}

export default Home