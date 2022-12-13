import React from "react";
import { GiSecretBook } from "react-icons/gi";
import feature from "../../images/featured.svg";
import { BsCurrencyEuro } from "react-icons/bs";
import { MdOutlineKingBed } from "react-icons/md";
import { FaBath } from "react-icons/fa";
import { IoIosSpeedometer } from "react-icons/io";
import { BsArrowRight } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";

const Feature = () => {
  return (
    <div className="bg-sky-100 h-[900px] md:h-[600px]">
      {/*container */}
      <div className="w-[360px] md:w-[1000px] mx-auto">
        {/*header */}
        <div className="w-[270px] mx-auto pt-[80px]">
          <h1 className="mx-auto text-3xl">Featured Properties</h1>
          <p className="mx-auto border-b-[8px] border-b-red-500 w-[100px] rounded-full mt-[10px] text-center"></p>
        </div>

        {/*grid-container */}
        <div className="md:grid grid-cols-3 gap-[10px]  md:w-[1000px]">
          {/*grid child-1 */}
          <div className="hidden md:flex items-center">
            <div className="bg-orange-500 rounded-full w-[225px] py-[52px] mt-[100px]">
              <GiSecretBook size={100} className="block m-auto text-white" />
            </div>
            <BsArrowRight
              size={50}
              className="mt-[100px] text-green-600 ml-[10px]"
            />
          </div>

          {/*grid chind-2 */}
          <div className="mt-[100px]">
            {/*container */}
            <div
              className="block h-[250px] group w-[300px] md:bg-contain bg-cover bg-no-repeat bg-center"
              style={{ backgroundImage: `url(${feature})` }}>
              {/*id and start */}
              <div className="absolute inline-flex justify-between mt-[50px] w-[250px] ml-[20px]">
                <p className="block text-red-800">ID: 12345</p>
                <AiFillStar size={25} className="block" />
              </div>
              {/*sub-container-1 */}
              <article className="group-hover:border-[3px] group-hover:border-red-600 rounded-[10px] inline-block mt-[150px] w-[250px] ml-[25px] bg-white">
                <div className="w-[200px] mx-auto">
                  <h3 className="text-[11px] font-bold mt-[10px]">
                    3 Bedroom Apartment for Sale in Algarve.
                  </h3>
                  <p className="flex items-center mt-[5px]">
                    <BsCurrencyEuro />
                    <span className="text-green-600">700,000</span>
                  </p>
                  <p className="text-[11px] mt-[5px]">Lagos,Algarve Portugal</p>
                  {/*bed,bath,meter container */}
                  <div className="pb-[5px] grid grid-cols-3 gap-[10px] mt-[10px]">
                    {/*bed */}
                    <article className="flex flex-col items-center justify-center">
                      <MdOutlineKingBed />
                      <p className="text-[11px] font-bold">3 Beds</p>
                    </article>
                    {/* bath*/}
                    <areticle className="flex flex-col items-center justify-center">
                      <FaBath />
                      <p className="text-[11px] font-bold">3 Baths</p>
                    </areticle>
                    {/*meter */}
                    <article className="flex flex-col items-center justify-center">
                      <IoIosSpeedometer />
                      <p className="text-[11px] font-bold">187 m2</p>
                    </article>
                  </div>
                </div>
              </article>
            </div>
          </div>

          {/*grid chind-3 */}
          <div className="mt-[100px]">
            {/*container */}
            <div
              className="block h-[250px] group w-[300px] md:bg-contain bg-cover bg-no-repeat bg-center"
              style={{ backgroundImage: `url(${feature})` }}>
              {/*id and start */}
              <div className="absolute inline-flex justify-between mt-[50px] w-[250px] ml-[20px]">
                <p className="block text-red-800">ID: 12345</p>
                <AiFillStar size={25} className="block" />
              </div>
              {/*sub-container-1 */}
              <article className="group-hover:border-[3px] group-hover:border-red-600 rounded-[10px] inline-block mt-[150px] w-[250px] ml-[25px] bg-white">
                <div className="w-[200px] mx-auto">
                  <h3 className="text-[11px] font-bold mt-[10px]">
                    3 Bedroom Apartment for Sale in Algarve.
                  </h3>
                  <p className="flex items-center mt-[5px]">
                    <BsCurrencyEuro />
                    <span className="text-green-600">700,000</span>
                  </p>
                  <p className="text-[11px] mt-[5px]">Lagos,Algarve Portugal</p>
                  {/*bed,bath,meter container */}
                  <div className="pb-[5px] grid grid-cols-3 gap-[10px] mt-[10px]">
                    {/*bed */}
                    <article className="flex flex-col items-center justify-center">
                      <MdOutlineKingBed />
                      <p className="text-[11px] font-bold">3 Beds</p>
                    </article>
                    {/* bath*/}
                    <areticle className="flex flex-col items-center justify-center">
                      <FaBath />
                      <p className="text-[11px] font-bold">3 Baths</p>
                    </areticle>
                    {/*meter */}
                    <article className="flex flex-col items-center justify-center">
                      <IoIosSpeedometer />
                      <p className="text-[11px] font-bold">187 m2</p>
                    </article>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
