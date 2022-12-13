import React from "react";
import locationimg from "../../images/location.svg"

const Location = () => {
  return (
    <div className="bg-gray-600 md:h-[1000px] h-[1500px]">
      {/*container */}
      <div className="h-full w-[360px] md:w-[1000px] mx-auto">
        <div className="w-[280px] mx-auto pt-[80px]">
          <h1 className="mx-auto text-3xl text-white text-center">
            Porpolar Location
          </h1>
          <p className="mx-auto border-b-[8px] border-b-red-500 w-[100px] rounded-full mt-[10px] text-center"></p>
        </div>
        {/*grid container */}
        <section className="md:grid grid-cols-3 gap-[15px] mt-[100px] sm:items-between">
          {/*grid child-1 */}
          <p
            style={{ backgroundImage: `url(${locationimg})` }}
            className="relative w-[300px] h-[200px] bg-no-repeat bg-center bg-cover flex items-center justify-center text-2xl text-white font-bold rounded-[15px]">
            Lisbon
          </p>
          <p
            style={{ backgroundImage: `url(${locationimg})` }}
            className="md:my-[0] my-[10px] relative w-[300px] h-[200px] bg-no-repeat bg-center bg-cover flex items-center justify-center text-2xl text-white font-bold rounded-[15px]">
            Lisbon
          </p>
          <p
            style={{ backgroundImage: `url(${locationimg})` }}
            className="relative w-[300px] h-[200px] bg-no-repeat bg-center bg-cover flex items-center justify-center text-2xl text-white font-bold rounded-[15px]">
            Lisbon
          </p>
          <p
            style={{ backgroundImage: `url(${locationimg})` }}
            className="relative md:my-[0] my-[10px] w-[300px] h-[200px] bg-no-repeat bg-center bg-cover flex items-center justify-center text-2xl text-white font-bold rounded-[15px]">
            Lisbon
          </p>
          <p
            style={{ backgroundImage: `url(${locationimg})` }}
            className="relative w-[300px] h-[200px] bg-no-repeat bg-center bg-cover flex items-center justify-center text-2xl text-white font-bold rounded-[15px]">
            Lisbon
          </p>
          <p
            style={{ backgroundImage: `url(${locationimg})` }}
            className="relative md:my-[0] my-[10px] w-[300px] h-[200px] bg-no-repeat bg-center bg-cover flex items-center justify-center text-2xl text-white font-bold rounded-[15px]">
            Lisbon
          </p>
          <p
            style={{ backgroundImage: `url(${locationimg})` }}
            className="relative md:block hidden w-[300px] h-[200px] bg-no-repeat bg-center bg-cover flex items-center justify-center text-2xl text-white font-bold rounded-[15px]">
            Lisbon
          </p>
          <p
            style={{ backgroundImage: `url(${locationimg})` }}
            className="relative md:block hidden w-[300px] h-[200px] bg-no-repeat bg-center bg-cover flex items-center justify-center text-2xl text-white font-bold rounded-[15px]">
            Lisbon
          </p>
          <p
            style={{ backgroundImage: `url(${locationimg})` }}
            className="relative md:block hidden w-[300px] h-[200px] bg-no-repeat bg-center bg-cover flex items-center justify-center text-2xl text-white font-bold rounded-[15px]">
            Lisbon
          </p>
        </section>
      </div>
    </div>
  );
};

export default Location;
