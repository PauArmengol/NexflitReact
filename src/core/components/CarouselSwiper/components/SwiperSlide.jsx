import './SwiperSlide.css'

const SwiperSlide = ({children, ...props}) => {

    return (

            <div className='swiper-slide'>
                <swiper-slide {...props}>
                    <div className='slide-content'>
                        {children}
                    </div>
                </swiper-slide>
            </div>

    )
}

export default SwiperSlide