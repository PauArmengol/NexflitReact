import { useState } from "react";
import { CarouselSwiper } from "../CarouselSwiper/CarouselSwiper"
import SwiperSlide from "../CarouselSwiper/components/SwiperSlide"
import CarouselTitle from "../CarouselTitle/CarouselTitle"
//import './CarouselSection.css'
import { GoPlay } from "react-icons/go"
import { GrAddCircle } from "react-icons/gr";
import { SlLike } from "react-icons/sl";

const CarouselSection = ({ title, data }) => {

    const [activeSlide, setActiveSlide] = useState(null);

    const handleSlideEnter = (index) => {
    setActiveSlide(index);
    };

    const handleSlideLeave = () => {
        setActiveSlide(null);
    };

    return (
        <>
        
            <CarouselTitle>{title}</CarouselTitle>

            <CarouselSwiper>
                
                { data?.map((e) => (
                        <SwiperSlide 
                            key={e.id}
                            /* onMouseEnter={() => handleSlideEnter(e)}
                            onMouseLeave={handleSlideLeave} */
                            >
                            <div
                                className={`slide-content ${activeSlide === e ? 'active' : ''}`}
                                style={{
                                    aspectRatio: '16/9', 
                                    backgroundImage: `url(${e.backdrop})`,
                                    backgroundSize: 'contain',
                                    backgroundRepeat:' no-repeat',
                                    backgroundPosition: 'center',
                                    width: "250px",  
                                }}
                            >
                                 <h4>{e.title}</h4>
                                 
                                {/* <div className="description">
                                    <p>descripcion pelicula</p>
                                    <GoPlay className="description-icon"/>
                                    <GrAddCircle className="description-icon"/>
                                    <SlLike className="description-icon"/>
                                    
                                </div> */}
                                
                            </div>                            

                        </SwiperSlide>
                ))}

            </CarouselSwiper>
            
        </>
    )
}

export default CarouselSection

