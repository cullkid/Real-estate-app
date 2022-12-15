import React from "react";
import Properties from "../../Properties";
import sales from "../../../../images/sales-img.svg";
import { FaBed, FaBath, FaHouseDamage } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import LocationPropertiesForSell from "../LocationPropertiesForSell";

const LisbonSell = () => {
  return (
    <div>
      <Properties />

      {/*container */}
      <section className="md:h-[1200px] h-[1500px] mt-[20px} w-[360px] md:w-[1020px] mx-auto">
        {/* sales list container*/}
        <main>
          <article className="w-[180px] flex items-center justify-between mt-[50px]">
            <p className="text-[18px] font-bold text-black">Portugal</p>
            <AiOutlineArrowRight size={25} className="text-orange-600" />
            <p className="text-[18px] font-bold text-orange-600">Lisbon</p>
          </article>
          {/*grid */}
          <main className="md:grid grid-cols-2 gap-[10px]">
            {/*grid child-1 */}
            <article>
              {/*sales sub-container-1 */}
              <Link to="/FullDetailOnFirstLisbonPropertyForSale">
                <div className="border-[4px] px-[10px] h-[200px] md:w-[480px] mt-[40px] flex items-center justify-between">
                  {/*flext child-1 */}
                  <article className="my-auto">
                    <img
                      src={sales}
                      alt=""
                      className="md:w-[200px] w-[120px] block rounded-[6px]"
                    />
                    <p className="top-[5px] text-center text-blue-600 font-bold">
                      ID: 12345
                    </p>
                  </article>

                  {/*flex child-2 */}
                  <article>
                    <h1 className="font-bold text-[11px] md:text-[16px]">
                      3 bedroom at lisbon portugal
                    </h1>
                    <p className="mt-[10px] text-blue-600 font-bold">
                      700, 000
                    </p>
                    {/*inner grid container */}
                    <div className="grid grid-cols-2 gap-[5px] mt-[15px]">
                      {/*inner grid child-1 */}
                      <div className="flex flex-col items-center justify-self-start">
                        <FaBed />
                        <p className="text-[12px]">3beds</p>
                      </div>
                      {/*inner grid child-2 */}
                      <div className="flex flex-col items-center justify-self-start">
                        <FaBath />
                        <p className="text-[12px]">3baths</p>
                      </div>
                      {/*inner grid child-3 */}
                      <div className="flex flex-col items-center justify-self-start">
                        <FaHouseDamage />
                        <p className="text-[12px]">158.5 m2</p>
                      </div>
                      {/*inner grid child-4 */}
                      <div className="flex flex-col items-center justify-self-start">
                        <ImLocation2 />
                        <p className="text-[12px]">
                          Benfica, <span className="font-bold">Lisbon</span>
                        </p>
                      </div>
                    </div>
                  </article>
                </div>
              </Link>

              {/*sales sub-container-2 */}
              <div className="border-[4px] px-[10px] h-[200px] md:w-[480px] mt-[40px] flex items-center justify-between">
                {/*flext child-1 */}
                <article className="my-auto">
                  <img
                    src={sales}
                    alt=""
                    className="md:w-[200px] w-[120px] block rounded-[6px]"
                  />
                  <p className="top-[5px] text-center text-blue-600 font-bold">
                    ID: 12345
                  </p>
                </article>

                {/*flex child-2 */}
                <article>
                  <h1 className="font-bold text-[11px] md:text-[16px]">
                    3 bedroom at lisbon portugal
                  </h1>
                  <p className="mt-[10px] text-blue-600 font-bold">700, 000</p>
                  {/*inner grid container */}
                  <div className="grid grid-cols-2 gap-[5px] mt-[15px]">
                    {/*inner grid child-1 */}
                    <div className="flex flex-col items-center justify-self-start">
                      <FaBed />
                      <p className="text-[12px]">3beds</p>
                    </div>
                    {/*inner grid child-2 */}
                    <div className="flex flex-col items-center justify-self-start">
                      <FaBath />
                      <p className="text-[12px]">3baths</p>
                    </div>
                    {/*inner grid child-3 */}
                    <div className="flex flex-col items-center justify-self-start">
                      <FaHouseDamage />
                      <p className="text-[12px]">158.5 m2</p>
                    </div>
                    {/*inner grid child-4 */}
                    <div className="flex flex-col items-center justify-self-start">
                      <ImLocation2 />
                      <p className="text-[12px]">
                        Benfica, <span className="font-bold">Lisbon</span>
                      </p>
                    </div>
                  </div>
                </article>
              </div>

              {/*sales sub-container-3 */}
              <div className="border-[4px] px-[10px] h-[200px] md:w-[480px] mt-[40px] flex items-center justify-between">
                {/*flext child-1 */}
                <article className="my-auto">
                  <img
                    src={sales}
                    alt=""
                    className="md:w-[200px] w-[120px] block rounded-[6px]"
                  />
                  <p className="top-[5px] text-center text-blue-600 font-bold">
                    ID: 12345
                  </p>
                </article>

                {/*flex child-2 */}
                <article>
                  <h1 className="font-bold text-[11px] md:text-[16px]">
                    3 bedroom at lisbon portugal
                  </h1>
                  <p className="mt-[10px] text-blue-600 font-bold">700, 000</p>
                  {/*inner grid container */}
                  <div className="grid grid-cols-2 gap-[5px] mt-[15px]">
                    {/*inner grid child-1 */}
                    <div className="flex flex-col items-center justify-self-start">
                      <FaBed />
                      <p className="text-[12px]">3beds</p>
                    </div>
                    {/*inner grid child-2 */}
                    <div className="flex flex-col items-center justify-self-start">
                      <FaBath />
                      <p className="text-[12px]">3baths</p>
                    </div>
                    {/*inner grid child-3 */}
                    <div className="flex flex-col items-center justify-self-start">
                      <FaHouseDamage />
                      <p className="text-[12px]">158.5 m2</p>
                    </div>
                    {/*inner grid child-4 */}
                    <div className="flex flex-col items-center justify-self-start">
                      <ImLocation2 />
                      <p className="text-[12px]">
                        Benfica, <span className="font-bold">Lisbon</span>
                      </p>
                    </div>
                  </div>
                </article>
              </div>

              {/*sales sub-container-4 */}
              <div className="border-[4px] px-[10px] h-[200px] md:w-[480px] mt-[40px] flex items-center justify-between">
                {/*flext child-1 */}
                <article className="my-auto">
                  <img
                    src={sales}
                    alt=""
                    className="md:w-[200px] w-[120px] block rounded-[6px]"
                  />
                  <p className="top-[5px] text-center text-blue-600 font-bold">
                    ID: 12345
                  </p>
                </article>

                {/*flex child-2 */}
                <article>
                  <h1 className="font-bold text-[11px] md:text-[16px]">
                    3 bedroom at lisbon portugal
                  </h1>
                  <p className="mt-[10px] text-blue-600 font-bold">700, 000</p>
                  {/*inner grid container */}
                  <div className="grid grid-cols-2 gap-[5px] mt-[15px]">
                    {/*inner grid child-1 */}
                    <div className="flex flex-col items-center justify-self-start">
                      <FaBed />
                      <p className="text-[12px]">3beds</p>
                    </div>
                    {/*inner grid child-2 */}
                    <div className="flex flex-col items-center justify-self-start">
                      <FaBath />
                      <p className="text-[12px]">3baths</p>
                    </div>
                    {/*inner grid child-3 */}
                    <div className="flex flex-col items-center justify-self-start">
                      <FaHouseDamage />
                      <p className="text-[12px]">158.5 m2</p>
                    </div>
                    {/*inner grid child-4 */}
                    <div className="flex flex-col items-center justify-self-start">
                      <ImLocation2 />
                      <p className="text-[12px]">
                        Benfica, <span className="font-bold">Lisbon</span>
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </article>
            {/*grid child-2 */}
            <article className="mt-[40px]">
              <LocationPropertiesForSell />
            </article>
          </main>
        </main>
      </section>
    </div>
  );
};

export default LisbonSell;
