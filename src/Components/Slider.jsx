import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import img1 from "../assets/library-1.jpg";
import img2 from "../assets/library-2.jpg";
import img3 from "../assets/library-3.jpg";
import { Link } from "react-scroll";

// import './styles.css'
const Slider = () => {
  return (
    <div className="flex justify-center">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        modules={[Pagination, Autoplay, Navigation]}
        autoplay = {{
            delay :2000,
            disableOnInteraction :false,
            pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
        }}
        loop = {true}
        navigation={true}
        className="mySwiper w-full "
      >
        <SwiperSlide>
          <div className="relative w-full h-[440px] ">
            <img className="w-full h-full object-cover " src={img1} alt="" />
            <div className="absolute bg-black bg-opacity-50  h-full z-20  inset-0 flex flex-col  justify-center items-center">
              <p className="  text-white text-center text-4xl font-bold max-w-[800px] p-5 ">
                {" "}
                Borrow Learn Return{" "}
              </p>
                <Link to={"category"} smooth={true} duration={500} href="" className="btn btn-primary">Show Books</Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="relative w-full h-[440px] ">
            <img className="w-full h-full object-cover " src={img2} alt="" />
            <div className="absolute ex bg-black bg-opacity-50 h-full z-20  inset-0 flex flex-col  justify-center items-center">
            <p className="   text-white text-center text-4xl font-bold max-w-[800px] p-5 ">
                {" "}
                Why buy when you can borrow{" "}
              </p>
              <Link to={"category"} href="" className="btn btn-primary">Show Books</Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="relative w-full h-[440px] ">
            <img className="w-full h-full object-cover " src={img3} alt="" />
            <div className="absolute bg-black bg-opacity-50 h-full z-20  inset-0 flex flex-col  justify-center items-center">
            <p className="  text-white text-center text-4xl font-bold max-w-[800px] p-5 ">
                {" "}
                Stories are one click away {" "}
              </p>
              <Link to={"category"} href="" className="btn btn-primary">Show Books</Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
