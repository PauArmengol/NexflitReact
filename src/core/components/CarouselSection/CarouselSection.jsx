import { CarouselSwiper } from "../CarouselSwiper/CarouselSwiper"
import SwiperSlide from "../CarouselSwiper/components/SwiperSlide"
import CarouselTitle from "../CarouselTitle/CarouselTitle"
import './CarouselSection.css'
import { GoPlay } from "react-icons/go"
import { GrAddCircle } from "react-icons/gr";
import { SlLike } from "react-icons/sl";

const CarouselSection = ({ title, data }) => {

    return (
        <>
        
            <CarouselTitle>{title}</CarouselTitle>

            <CarouselSwiper 
                className="container"
            >
                
                { data?.map((e) => (

                        <SwiperSlide 
                            key={e.id}
                            >
                            <div
                                className="box"
                                style={{
                                    aspectRatio: '16/9',
                                    backgroundImage: `url(${e.backdrop})`,
                                    backgroundSize: 'contain',
                                    backgroundRepeat:' no-repeat',
                                    backgroundPosition: 'center',
                                    width: "250px",  
                                }}
                            >
                                <div className="description">
                                    <p>descripcion pelicula</p>
                                    <GoPlay />
                                    <GrAddCircle />
                                    <SlLike />
                                    
                                </div>
                                <h4>{e.title}</h4> 
                            </div>                            

                        </SwiperSlide>
                ))}

            </CarouselSwiper>
            
        </>
    )
}

export default CarouselSection

