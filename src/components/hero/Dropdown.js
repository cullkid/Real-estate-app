import React from "react";
import { Link } from "react-scroll";
import { useState } from "react";

const Dropdown = () => {
  const [dropdown, setDropdown] = useState(false);
  const showList = () => setDropdown(!dropdown);

  return (
    <div>
      {/*container */}
      <div className="relative flex flex-col items-center jusstify-center drop">
        <li
          onClick={showList}
          className="my-auto hover:border-b-4 hover:border-b-red-500 border-b-solid group drop">
          <Link
            onClick={showList}
            to="properties"
            smooth={true}
            duration={500}
            className="cursor-pointer">
            Services
          </Link>
        </li>
        <div
          name="droplist"
          className={
            !dropdown
              ? "hidden"
              : "bg-slate-200 z-10 mt-[80px] text-red-800 absolute rounded group-hover:flex flex-col justify-between"
          }>
          <li className="w-[180px] text-center py-2 hover:bg-red-800 hover:text-white">
            Buying Advice
          </li>
          <li className="w-[180px] text-center py-2 hover:bg-red-800 hover:text-white">
          Portugal Mortgages
          </li>
          <li className="w-[180px] text-center py-2 hover:bg-red-800 hover:text-white">
            Portugal Golden Visa
          </li>
          <li className="w-[180px] text-center py-2 hover:bg-red-800 hover:text-white">
            Viewing Trips
          </li>
          <li className="w-[180px] text-center py-2 hover:bg-red-800 hover:text-white">
            Rentals % Property Management
          </li>
          <li className="w-[180px] text-center py-2 hover:bg-red-800 hover:text-white">
            Virtual Tours
          </li>
          <li className="w-[180px] text-center py-2 hover:bg-red-800 hover:text-white">
            Currency Exchange
          </li>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
