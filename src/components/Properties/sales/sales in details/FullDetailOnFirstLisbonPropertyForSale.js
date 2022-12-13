import React from "react";
import sales from "../../../../images/sales-img.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import Enquiry from "./Enquiry";
import { FaBed, FaBath, FaHouseDamage } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { MdGarage } from "react-icons/md";

const FullDetailOnFirstLisbonPropertyForSale = () => {
  return (
    <div className="pb-[20px]">
      {/*grid container */}
      <div className="h-full w-[360px] md:w-[1000px] mx-auto md:grid grid-cols-2 gap-[10px]">
        {/*grid child-1 */}
        <article>
          {/*carousel */}
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
            className="mySwiper">
            <SwiperSlide>
              <img
                className="object-fill w-full h-96"
                src={sales}
                alt="img slide 1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="object-fill w-full h-96"
                src={sales}
                alt="img slide 2"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="object-fill w-full h-96"
                src={sales}
                alt="img slide 3"
              />
            </SwiperSlide>
          </Swiper>
          <h1 className="text-3xl">3 bedroom at lisbon portugal</h1>
          <h3 className="text-2xl text-blue-600 mt-[15px]">700, 000</h3>
          {/*inner grid container */}
          <article className="grid grid-cols-2 gap-y-[35px] mt-[45px] border-b-4 pb-[40px]">
            {/*inner grid child-1 */}
            <div className="flex flex-row  w-[55px] justify-between items-center justify-self-start">
              <FaBed />
              <p className="text-[12px]">3beds</p>
            </div>
            {/*inner grid child-2 */}
            <div className="flex flex-row  w-[60px] justify-between items-center justify-self-start">
              <FaBath />
              <p className="text-[12px]">3baths</p>
            </div>
            {/*inner grid child-3 */}
            <div className="flex flex-row  w-[75px] justify-between items-center justify-self-start">
              <FaHouseDamage />
              <p className="text-[12px]">158.5 m2</p>
            </div>
            {/*inner grid child-4 */}
            <div className="flex flex-row  w-[106px] justify-between items-center justify-self-start">
              <ImLocation2 />
              <p className="text-[12px]">
                Benfica, <span className="font-bold">Lisbon</span>
              </p>
            </div>
            {/*inner grid child-5 */}
            <div className="flex flex-row  w-[90px] justify-between items-center justify-self-start">
              <SiHomeassistantcommunitystore />
              <p className="text-[12px]">
                Type: <span className="font-bold">Home</span>
              </p>
            </div>
            {/*inner grid child-6 */}
            <div className="flex flex-row  w-[60px] justify-between items-center justify-self-start">
              <MdGarage />
              <p className="text-[12px]">Garage</p>
            </div>
          </article>
          {/*extral feature container */}
          <article className="mt-[40px] border-b-4 pb-[40px]">
            <h1 className="text-2xl font-bold">Extra Features</h1>
            <ul className="mt-[25px] grid grid-cols-2 gap-y-[15px]">
              <li>walke to Amenities</li>
              <li>walke to Amenities</li>
              <li>walke to Amenities</li>
              <li>walke to Amenities</li>
            </ul>
          </article>
          {/*description container */}
          <article className="mt-[40px]">
            <h1 className="text-2xl font-bold">Property Description</h1>
            <p className="mt-[20px]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
              aut explicabo ab nemo. Iure ea dignissimos, vero pariatur error
              nobis.
            </p>
            <p className="mt-[20px]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
              aut explicabo ab nemo. Iure ea dignissimos, vero pariatur error
              nobis. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Debitis au Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Debitis au Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Debitis au
            </p>
            <p className="mt-[20px]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
              aut explicabo ab nemo. Iure ea dignissimos, vero pariatur error
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat
              consequatur et libero animi unde, autem reiciendis. Fugiat hic
              pariatur rerum! Mollitia rerum voluptas harum autem modi nisi,
              necessitatibus voluptatibus perferendis, sunt corrupti, culpa vel
              esse.
            </p>
          </article>
        </article>
        {/*grrid child-2 */}
        <article className="mt-[30px] h-[650px] border-4 rounded-[10px] w-[360px] justify-self-end">
          <Enquiry />
        </article>
      </div>
    </div>
  );
};

export default FullDetailOnFirstLisbonPropertyForSale;
