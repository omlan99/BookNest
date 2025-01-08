import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css"
import 'swiper/css/pagination'
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
// import './styles.css'
const Slider = () => {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                modules={[Pagination, Autoplay, Navigation]}
                autoplay = {{
                    delay :2000,
                    disableOnInteraction :false,
                }}
                pagination={
                    {
                        clickable:true,
                    }
                }
                navigation={true}
                className='mySwiper'
            >
                <SwiperSlide>slider 1</SwiperSlide>
                <SwiperSlide>Slider 2</SwiperSlide>
                <SwiperSlide>Slider 3</SwiperSlide>
                <SwiperSlide>Slider 4</SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;