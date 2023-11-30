import { useRef } from 'react';
import { register } from 'swiper/element/bundle';
register();
import 'swiper/swiper-bundle.css';


export const CarouselSwiper = ({ children }) => {

  const swiperElRef = useRef(null);
 
  return (
      <div className='swiper-container'>
          <swiper-container
              ref={swiperElRef}   
              slides-per-view="5"
              navigation="true"  
          >
              { children }   
          </swiper-container>
      </div>
  );
};
