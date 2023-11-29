import './SwiperSlide.css'

const SwiperSlide = ({children, ...props}) => {

    return (

        <div className='container'>

            <div className='swiper-slide'>
                <swiper-slide  
                    {...props}
                    style={{
                        width: '100%',
                        height: "auto",
                        display: "block"
                    }}
                >
                            {children}
                </swiper-slide>
            </div>

        </div>
    )
}

export default SwiperSlide