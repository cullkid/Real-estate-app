import React from "react";
import Properties from "../../Properties";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import lisbon from "../../../../images/lisbon-rent1.svg";
import lisbon2 from "../../../../images/lisbon-rent2.svg";
import lisbon3 from "../../../../images/lisbon-rent3.svg";
import { BsCurrencyEuro } from "react-icons/bs";
import { MdAddIcCall, MdEmail, MdDeleteOutline } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { BsBookmarkPlus } from "react-icons/bs";
import { IoMdShareAlt } from "react-icons/io";
import { Link } from "react-router-dom";
import RentLocation from "../RentLocation";

const LisbonRent = () => {
  return (
    <div className="h-[3000px]">
      <Properties />
      <div className="md:h-[750px] h-[1300px]">
        {/*grid container*/}
        <div className="h-full w-[360px] md:w-[1000px] mx-auto md:grid grid-cols-2 gap-[10px]">
          {/*carousel & grid child-1*/}
          <div>
            <div className="mt-[100px]">
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
                <SwiperSlide>
                  <img
                    className="object-fill w-full h-96"
                    src={lisbon}
                    alt="img slide 1"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="object-fill w-full h-96"
                    src={lisbon2}
                    alt="img slide 2"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="object-fill w-full h-96"
                    src={lisbon3}
                    alt="img slide 3"
                  />
                </SwiperSlide>
              </Swiper>
              <h1 className="mt-[20px] text-2xl text-pink-600 font-bold">
                T3 apartment for rent in lisbon portugal
              </h1>
              <h2 className="text-xl mt-[10px]">
                No. 8 3d Av. Antonio,{" "}
                <span className="font-bold">Damaia Lisbon.</span>{" "}
              </h2>
              {/*price container */}
              <p className="flex items-center">
                <span className="text-xl font-bold">1.800</span>{" "}
                <span>
                  <BsCurrencyEuro size={12} />
                </span>{" "}
                <span className="text-[10px]">/month</span>
              </p>
              {/*inner-grid container*/}
              <article className="flex items-center justify-between mt-[25px] border-b-[4px] pb-[30px]">
                <p>3 beds</p>
                <p>2 baths</p>
                <p>
                  85 m<sup>2</sup>{" "}
                </p>
              </article>
              {/*inner-flex container */}
              <article className="grid grid-cols-2 gap-x-[20px] mt-[30px] text-pink-600">
                <div className="md:w-[160px] w-[120px] flex items-center justify-between">
                  <Link className="flex items-center">
                    {" "}
                    <MdAddIcCall />
                    <span className="ml-[6px] text-black">Call</span>
                  </Link>
                  <Link className="flex items-center">
                    <MdEmail />
                    <span className="ml-[6px] text-black">Mail</span>
                  </Link>
                </div>
                <div className="md:w-[260px] text-white place-items-center grid grid-cols-4 gap-x-[10px]">
                  <Link className="p-[4px] bg-black rounded-full">
                    <MdDeleteOutline />
                  </Link>
                  <Link className="p-[4px] bg-black rounded-full">
                    {" "}
                    <AiOutlineLike />
                  </Link>
                  <Link className="p-[4px] bg-black rounded-full">
                    {" "}
                    <BsBookmarkPlus />
                  </Link>
                  <Link className="p-[4px] bg-black rounded-full">
                    <IoMdShareAlt />
                  </Link>
                </div>
              </article>
            </div>
            {/*carousel & grid child-2*/}
            <div className="mt-[100px]">
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
                <SwiperSlide>
                  <img
                    className="object-fill w-full h-96"
                    src={lisbon}
                    alt="img slide 1"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="object-fill w-full h-96"
                    src={lisbon2}
                    alt="img slide 2"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="object-fill w-full h-96"
                    src={lisbon3}
                    alt="img slide 3"
                  />
                </SwiperSlide>
              </Swiper>
              <h1 className="mt-[20px] text-2xl text-pink-600 font-bold">
                T3 apartment for rent in lisbon portugal
              </h1>
              <h2 className="text-xl mt-[10px]">
                No. 8 3d Av. Antonio,{" "}
                <span className="font-bold">Damaia Lisbon.</span>{" "}
              </h2>
              {/*price container */}
              <p className="flex items-center">
                <span className="text-xl font-bold">1.800</span>{" "}
                <span>
                  <BsCurrencyEuro size={12} />
                </span>{" "}
                <span className="text-[10px]">/month</span>
              </p>
              {/*inner-grid container*/}
              <article className="flex items-center justify-between mt-[25px] border-b-[4px] pb-[30px]">
                <p>3 beds</p>
                <p>2 baths</p>
                <p>
                  85 m<sup>2</sup>{" "}
                </p>
              </article>
              {/*inner-flex container */}
              <article className="grid grid-cols-2 gap-x-[20px] mt-[30px] text-pink-600">
                <div className="md:w-[160px] w-[120px] flex items-center justify-between">
                  <Link className="flex items-center">
                    {" "}
                    <MdAddIcCall />
                    <span className="ml-[6px] text-black">Call</span>
                  </Link>
                  <Link className="flex items-center">
                    <MdEmail />
                    <span className="ml-[6px] text-black">Mail</span>
                  </Link>
                </div>
                <div className="md:w-[260px] text-white place-items-center grid grid-cols-4 gap-x-[10px]">
                  <Link className="p-[4px] bg-black rounded-full">
                    <MdDeleteOutline />
                  </Link>
                  <Link className="p-[4px] bg-black rounded-full">
                    {" "}
                    <AiOutlineLike />
                  </Link>
                  <Link className="p-[4px] bg-black rounded-full">
                    {" "}
                    <BsBookmarkPlus />
                  </Link>
                  <Link className="p-[4px] bg-black rounded-full">
                    <IoMdShareAlt />
                  </Link>
                </div>
              </article>
            </div>
            {/*carousel & grid child-3*/}
            <div className="mt-[100px]">
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
                <SwiperSlide>
                  <img
                    className="object-fill w-full h-96"
                    src={lisbon}
                    alt="img slide 1"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="object-fill w-full h-96"
                    src={lisbon2}
                    alt="img slide 2"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="object-fill w-full h-96"
                    src={lisbon3}
                    alt="img slide 3"
                  />
                </SwiperSlide>
              </Swiper>
              <h1 className="mt-[20px] text-2xl text-pink-600 font-bold">
                T3 apartment for rent in lisbon portugal
              </h1>
              <h2 className="text-xl mt-[10px]">
                No. 8 3d Av. Antonio,{" "}
                <span className="font-bold">Damaia Lisbon.</span>{" "}
              </h2>
              {/*price container */}
              <p className="flex items-center">
                <span className="text-xl font-bold">1.800</span>{" "}
                <span>
                  <BsCurrencyEuro size={12} />
                </span>{" "}
                <span className="text-[10px]">/month</span>
              </p>
              {/*inner-grid container*/}
              <article className="flex items-center justify-between mt-[25px] border-b-[4px] pb-[30px]">
                <p>3 beds</p>
                <p>2 baths</p>
                <p>
                  85 m<sup>2</sup>{" "}
                </p>
              </article>
              {/*inner-flex container */}
              <article className="grid grid-cols-2 gap-x-[20px] mt-[30px] text-pink-600">
                <div className="md:w-[160px] w-[120px] flex items-center justify-between">
                  <Link className="flex items-center">
                    {" "}
                    <MdAddIcCall />
                    <span className="ml-[6px] text-black">Call</span>
                  </Link>
                  <Link className="flex items-center">
                    <MdEmail />
                    <span className="ml-[6px] text-black">Mail</span>
                  </Link>
                </div>
                <div className="md:w-[260px] text-white place-items-center grid grid-cols-4 gap-x-[10px]">
                  <Link className="p-[4px] bg-black rounded-full">
                    <MdDeleteOutline />
                  </Link>
                  <Link className="p-[4px] bg-black rounded-full">
                    {" "}
                    <AiOutlineLike />
                  </Link>
                  <Link className="p-[4px] bg-black rounded-full">
                    {" "}
                    <BsBookmarkPlus />
                  </Link>
                  <Link className="p-[4px] bg-black rounded-full">
                    <IoMdShareAlt />
                  </Link>
                </div>
              </article>
            </div>
          </div>
          {/*grid-child-4 */}
          <div className="mt-[75px]">
            <RentLocation />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LisbonRent;
