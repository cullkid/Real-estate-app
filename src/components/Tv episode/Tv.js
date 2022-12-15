import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import episode1 from "../../images/episode-img1.svg";
import episode2 from "../../images/episode-img2.svg";
import episode3 from "../../images/episode-img3.svg";
import { Link } from "react-router-dom";

const Tv = () => {
  return (
    <div className="h-[500px]">
      <div className="w-[360px] md:w-[1000px] mx-auto mt-[60px]">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <Link className="cursor-pointer">
            {" "}
            <SwiperSlide>
              <img
                className="object-fill w-full h-96"
                src={episode1}
                alt="img slide 1"
              />
            </SwiperSlide>
          </Link>
          <Link>
            <SwiperSlide>
              <img
                className="object-fill w-full h-96"
                src={episode2}
                alt="img slide 2"
              />
            </SwiperSlide>
          </Link>
          <Link>
            <SwiperSlide>
              <img
                className="object-fill w-full h-96"
                src={episode3}
                alt="img slide 3"
              />
            </SwiperSlide>
          </Link>
        </Swiper>
      </div>
    </div>
  );
};

export default Tv;
