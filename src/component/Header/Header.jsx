import image from "../../assets/phone.jpg";
import image2 from "../../assets/phone5.png";
import image3 from "../../assets/phone3.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import "./Header.css";

// import required modules
import { Navigation } from "swiper/modules";
const Header = () => {
  return (
    <section>
      {" "}
      <Swiper
        rewind={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="w-full lg:h-[550px]">
            <img src={image3} alt="" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full lg:h-[550px]">
            <img src={image2} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full lg:h-[550px]">
            <img src={image} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Header;

//  <div className="container ">
//    <img width={""} height={""} src={image} alt="" className="w-full lg:h-[550px] h-full lg:h-[550px] " />
//  </div>;
