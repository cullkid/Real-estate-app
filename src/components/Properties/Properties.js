import React from "react";
import property from "../../images/property-bg2.svg";
import { useState } from "react";
import Salesfilter from "./sales/Salesfilter";
import { MdFilterList } from "react-icons/md";
import Saleslist from "./sales/Saleslist";
// import Lisbon from "./sales/Locations/Lisbon";

const Properties = () => {
  const [sales, setSales] = useState(false);
  const saleClick = () => setSales(!sales);

  const [show, setShow] = useState(false);
  const changeClick = () => setShow(!show);

  return (
    <div>
      <div
        className="h-[500px] w-full bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: `url(${property})` }}>
        {/*container */}
        <div className="h-full w-[360px] md:w-[1020px] mx-auto">
          <h1 className="block text-center text-2xl md:text-3xl pt-[50px] text-gray-200 font-bold">
            Happy Homes portugal have a variety of properties all over the
            portugal.
          </h1>
          <p className="w-[350px] mx-auto text-[14px] mt-[80px] text-center font-bold text-orange-600 bg-black p-[15px]">
            Properties in Portugal - 5000+
          </p>
        </div>
      </div>
      {/*button & filter container*/}
      <div className="h-full w-[360px] md:w-[1020px] mx-auto">
        {/*button */}
        <div className="flex items-center justify-between mt-[20px]">
          <button
            onClick={saleClick}
            className="mx-auto border-[4px] w-full py-4 hover:bg-gray-200 hover:font-bold">
            For sales
          </button>
          <button className="mx-auto border-[4px] w-full py-4 hover:bg-gray-200 hover:font-bold">
            For rent
          </button>
        </div>

        {/*filter container */}
        <main className="md:flex items-center justify-between mt-[50px] border-4 pt-[15px] bg-gray-900">
          {/*filter logo-content1 */}
          <article
            onClick={changeClick}
            className="flex items-center ml-[10px] mb-[15px] rounded-[5px] bg-gray-400 justify-evenly w-[100px]">
            <p>Filter</p>
            <MdFilterList />
          </article>

          {/*filter content2 */}
          <div
            className={
              !show
                ? "hidden"
                : "grid grid-cols-3 mr-[10px] mb-[15px] md:flex items-center justify-between md:w-[820px]"
            }>
            {/*type selector */}
            <article>
              <Salesfilter
                filters={[
                  { value: 1, label: "studio room" },
                  { value: 2, label: "flat" },
                  { value: 3, label: "bongalo" },
                  { value: 4, label: "duplex" },
                  { value: 5, label: "full house" },
                  { value: 6, label: "office" },
                  { value: 7, label: "store" },
                ]}
                placeholder="type"
              />
            </article>
            {/*min selector */}
            <article>
              <Salesfilter
                filters={[
                  { value: 1, label: "100, 000" },
                  { value: 2, label: "150, 000" },
                  { value: 3, label: "200, 000" },
                  { value: 4, label: "250, 000" },
                  { value: 5, label: "300, 000" },
                  { value: 6, label: "350, 000" },
                  { value: 7, label: "400, 000" },
                ]}
                placeholder="min"
              />
            </article>
            {/*max selector */}
            <article>
              <Salesfilter
                filters={[
                  { value: 1, label: "500, 000" },
                  { value: 2, label: "550, 000" },
                  { value: 3, label: "600, 000" },
                  { value: 4, label: "750, 000" },
                  { value: 5, label: "800, 000" },
                  { value: 6, label: "850, 000" },
                  { value: 7, label: "1000, 000" },
                ]}
                placeholder="max"
              />
            </article>
            {/*beds selector */}
            <article>
              <Salesfilter
                filters={[
                  { value: 1, label: "1" },
                  { value: 2, label: "2" },
                  { value: 3, label: "3" },
                  { value: 4, label: "4" },
                  { value: 5, label: "5" },
                ]}
                placeholder="bedrooms"
              />
            </article>
            {/*baths selector */}
            <article>
              <Salesfilter
                filters={[
                  { value: 1, label: "1" },
                  { value: 2, label: "2" },
                  { value: 3, label: "3" },
                  { value: 4, label: "4" },
                  { value: 5, label: "5" },
                ]}
                placeholder="bathrooms"
              />
            </article>
            {/*type selector */}
            <article>
              <Salesfilter
                filters={[
                  { value: 1, label: "flat" },
                  { value: 2, label: "studio room" },
                  { value: 3, label: "house" },
                  { value: 4, label: "bongalo" },
                  { value: 5, label: "duplex" },
                ]}
                placeholder="type"
              />
            </article>
            {/*button */}
            <button className="bg-green-400 md:px-2 rounded-full mt-[10px] text-white">
              result
            </button>
          </div>
        </main>
        {!sales ? "" : <Saleslist />}
      </div>
    </div>
  );
};

export default Properties;
