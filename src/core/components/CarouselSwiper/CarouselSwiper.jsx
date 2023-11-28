import { useEffect, useRef } from 'react';
import './CarouselSwiper.css'
import { register } from 'swiper/element/bundle';
register();

export const CarouselSwiper = ({ children }) => {

  const swiperElRef = useRef(null);
  
  return (
    
      <div className='swiper-container'>

          <swiper-container
              ref={swiperElRef}
              loop
              slides-per-view="5"
              navigation="true"
          >
              { children }
          </swiper-container>

      </div>
  );
};
