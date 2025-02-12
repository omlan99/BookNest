import axios from "axios";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
const Featured = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/").then((res) => {
      setBooks(res.data);
    });
  }, []);

  const slicedData = books.slice(0, 8);

  return (
    <div className="mt-[100px] pt-[100px]">
        <h4 className="text-4xl font-bold text-center  py-5 mb-5">Most Borrowed books</h4>
      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        autoplay = {{
            delay :2000,
            disableOnInteraction :false,
            pauseOnMouseEnter: true,
        }}
        loop = {true}
        grabCursor={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper"
      >
        {slicedData.map((data, index) => (
          <SwiperSlide  key={index}>
            <div className="overflow-hidden h-[200px] w-[120px] lg:h-[400px] lg:w-[250px] p-5" >
            <img
              className=" rounded-lg  h-full w-full object-cover"
              src={data.image}
              alt=""
            />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Featured;
