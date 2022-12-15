import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const RentLocation = () => {
  return (
    <div>
      <section className="border-4 w-[250px] flex flex-col md:ml-auto rounded-[10px] mt-[40px]">
        <h1 className="text-center py-[4px] bg-orange-600 text-white font-bold rounded-t-[10px]">
          Porpular Locations
        </h1>
        <Link to="/lisbonrent">
          <article className="flex items-center justify-evenly font-bold w-[200px] mx-auto hover:text-orange-600 py-[20px]">
            <AiOutlineArrowRight />
            <p>Lisbon properties</p>
          </article>
        </Link>
        <Link to="/algarverent">
          <article className="flex items-center justify-evenly font-bold w-[200px] mx-auto hover:text-orange-600">
            <AiOutlineArrowRight />
            <p>Algarve properties</p>
          </article>
        </Link>
        <article className="flex items-center justify-evenly font-bold w-[200px] mx-auto hover:text-orange-600 py-[20px]">
          <AiOutlineArrowRight />
          <p>Coimbra properties</p>
        </article>
        <article className="flex items-center justify-evenly font-bold w-[200px] mx-auto hover:text-orange-600">
          <AiOutlineArrowRight />
          <p>Aveiro properties</p>
        </article>
        <article className="flex items-center py-[20px] justify-evenly font-bold w-[200px] mx-auto hover:text-orange-600">
          <AiOutlineArrowRight />
          <p>Cascais properties</p>
        </article>
        <article className="flex items-center justify-evenly font-bold w-[200px] mx-auto hover:text-orange-600">
          <AiOutlineArrowRight />
          <p>Setubal properties</p>
        </article>
        <article className="flex items-center py-[20px] justify-evenly font-bold w-[200px] mx-auto hover:text-orange-600">
          <AiOutlineArrowRight />
          <p>Servilla properties</p>
        </article>
        <article className="flex items-center justify-evenly font-bold w-[200px] mx-auto hover:text-orange-600">
          <AiOutlineArrowRight />
          <p>Porto properties</p>
        </article>
        <article className="flex items-center py-[20px] justify-evenly font-bold w-[200px] mx-auto hover:text-orange-600">
          <AiOutlineArrowRight />
          <p>Sintra properties</p>
        </article>
      </section>
    </div>
  );
};

export default RentLocation;
