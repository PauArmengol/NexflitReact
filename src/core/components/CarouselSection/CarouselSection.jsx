import { CarouselSwiper } from "../CarouselSwiper/CarouselSwiper"
import SwiperSlide from "../CarouselSwiper/components/SwiperSlide"
import CarouselTitle from "../CarouselTitle/CarouselTitle"


const CarouselSection = ({ title, data }) => {

    return (
        <>
        
            <CarouselTitle>{title}</CarouselTitle>

            <CarouselSwiper>
                
                { data?.map((e) => (

                        <SwiperSlide key={e.id}>
                            <div
                                style={{
                                    aspectRatio: '16/9',
                                    backgroundImage: `url(${e.backdrop})`,
                                    backgroundSize: 'contain',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center',
                                }} 
                            >
                                <h3>{e.title}</h3>
                            </div>

                        </SwiperSlide>
                ))}
            </CarouselSwiper>
        </>
    )
}

export default CarouselSection

