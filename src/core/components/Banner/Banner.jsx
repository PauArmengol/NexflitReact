import useSWR from 'swr'
import { TMDB_API, TMDB_PATHS } from '../../datasources/remote/tmdb/tmdbApi'
import './Banner.css'
import { FaPlay } from "react-icons/fa";
import { LiaInfoCircleSolid } from "react-icons/lia";
import { SlVolumeOff } from "react-icons/sl";

const Banner = () => {

    const {
        data: moviesData,
        error: moviesError
    } = useSWR(TMDB_PATHS.movies.now_playing, async (path) => {
        const response = await TMDB_API.get(path);
        return response.data;
    });

    if(moviesError) {
        console.log("Error fetching movies data:", moviesError);

    }

    const randomMovie = moviesData?.results[Math.floor(Math.random()*moviesData.results.length)];

    if(!randomMovie) {
        return <div>No movie found</div>;
    }

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
      }

    return (

        <header
                className='banner'
                    style={{
                        backgroundSize: "cover",
                        backgroundImage: `url("${TMDB_PATHS.images.backdrop.url}${TMDB_PATHS.images.backdrop.sizes.w1280}${randomMovie?.backdrop_path || ''}")`,
                        backgroundPosition: "center center",
                    }}>
                <div className='banner-content'>
                    <h1 className='banner-title'>
                        {randomMovie?.title || randomMovie?.name || randomMovie?.original_name}
                    </h1> 
                    <div className='banner-buttons'>
                    <button className='banner-button-play'>
                        <FaPlay className='icon-play'/>Play</button>
                    <button className='banner-button-mylist'>
                        <LiaInfoCircleSolid className='icon-info'/>More Info</button>
                    </div>
                    <h1 className='banner-description'>
                        {truncate(randomMovie?.overview, 150)} 
                    </h1>
                </div>
                <div className='description-right'>
                    <div>
                     <SlVolumeOff className='icon-volume'  />
                    </div>
                    <div className='age'>
                        <p className='icon-age'>16+</p>
                    </div>
                </div>
                
                {/* <div className='banner--fadeBottom'></div> */}
        </header>

    )
}

export default Banner