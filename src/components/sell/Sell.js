import React from "react";
// import Carousel from '../Carousel';
import Evaluate from './Evaluate';

const Sell = () => {
  return (
    <div>
      {/*container */}
      <div className="w-full h-[400px] bg-gray-500">
        <div className="h-full w-[360px] md:w-[1000px] mx-auto">
          <div>
            <h1 className="text-center py-[25px] text-2xl md:text-4xl font-bold">
              Market Your Properties With Us And Get The Highest Value Of Your
              Property.
            </h1>
            <h4 className="text-center md:text-2xl text-gray-100 md:mt-[70px]">
              Happy home portugal real estate is one of the most recognized real
              estate agency both in Portygal and the globes. we have a numerous
              customers/clients all over the globes that have secured properties
              with us in portugal in a good value.
            </h4>
          </div>
        </div>
      </div>

      <Evaluate />
      {/* <Carousel /> */}
    </div>
  );
};

export default Sell;
