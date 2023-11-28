import './SwiperSlide.css'

const SwiperSlide = ({children, ...props}) => {

    return (

        <div className='swiper-slide'>

            <swiper-slide  {...props}>
            
                    {children}
                    
                
                
            </swiper-slide>

        </div>
    )
}

export default SwiperSlide