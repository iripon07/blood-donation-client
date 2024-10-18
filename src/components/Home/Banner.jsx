import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Banner1 from "../../assets/Banner1.jpg";
import Banner2 from "../../assets/Banner2.png";
import Banner3 from "../../assets/Banner3.jpg";
import "./banner.css"


const Banner = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        loop={true}
        centeredSlides={true}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div >
            <img className="w-full md:h-[600px]" src={Banner1} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div >
            <img className="w-full md:h-[600px] h-full" src={Banner2} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div>
            <img className="w-full md:h-[600px] h-full" src={Banner3} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
