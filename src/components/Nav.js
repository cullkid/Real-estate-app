import React from "react";
import logo from ".././images/house-logo.jpg";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { TiTimes } from "react-icons/ti";
import { Link } from "react-router-dom";
import Dropdown from './hero/Dropdown';

const Nav = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(!open);
   const closeNav = () => setOpen(false);

  return (
    <div className="bg-[#1E0909] w-full">
      {/*container */}
      <div className="bg-[#1E0909] w-[360px] md:w-[1000px] mx-auto flex items-center justify-between ">
        {/*logo */}
        <div className="py-6">
          <div className="flex items-center justify-start bg-red-800 px-4 rounded-full">
            <h1 className="text-white font-bold">HPPYHOMES</h1>
            <img src={logo} alt="" />
            <h1 className="text-white font-bold">PORTUGAL</h1>
          </div>
        </div>

        {/*menu */}
        <div className="bg-[#1E0909] w-[800px] text-white font-bold hidden md:flex flex-col items-end justify-end">
          <ul className="flex py-6 items-between justify-between text-white font-bold w-[550px]">
            <Link
              to="/"
              className="my-auto hover:border-b-4 hover:border-b-red-500 border-b-solid">
              Home
            </Link>
            <Link
              to="/sell"
              className="my-auto hover:border-b-4 hover:border-b-red-500 border-b-solid">
              Selling
            </Link>

            <Link
              to="/properties"
              className="my-auto hover:border-b-4 hover:border-b-red-500 border-b-solid">
              Properties
            </Link>
            {/*droplist for buy */}
            <Link
              to="/service"
              className="my-auto hover:border-b-4 hover:border-b-red-500 border-b-solid">
              <Dropdown />
            </Link>
            <Link
              to="/tv"
              className="my-auto hover:border-b-4 hover:border-b-red-500 border-b-solid">
              TV episode
            </Link>
            <Link
              to="/contact"
              className="my-auto hover:border-b-4 hover:border-b-red-500 border-b-solid">
              Contact
            </Link>
          </ul>
        </div>

        {/*hamburger */}
        <div onClick={handleClick} className="text-white md:hidden z-10">
          {!open ? (
            <FaBars size={25} style={{ color: "white" }} />
          ) : (
            <TiTimes size={25} />
          )}
        </div>

        {/*mobile menu */}
        <ul
          className={
            !open
              ? "hidden"
              : "md:hidden bg-[#1E0909] Z-10 absolute font-bold flex flex-col items-center justify-center text-white font-bold w-full h-screen left-0 top-0 duration-300"
          }>
          <Link onClick={closeNav} to="/" className="py-8 font-bold text-2xl">
            Home
          </Link>
          <Link
            onClick={closeNav}
            to="/sell"
            className="py-8 font-bold text-2xl">
            Selling
          </Link>
          <Link
            onClick={closeNav}
            to="/properties"
            className="py-8 font-bold text-2xl">
            Properties
          </Link>
          {/*droplist for buy */}
          <Link to="/service" className="py-8 font-bold text-2xl">
            <Dropdown />
          </Link>
          <Link onClick={closeNav} to="/tv" className="py-8 font-bold text-2xl">
            Tv episode
          </Link>
          <Link
            onClick={closeNav}
            to="/contact"
            className="py-8 font-bold text-2xl">
            contact
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
