import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import navdata from "../data/navdata";

const NavDataSet = () => {
  const [nav, setNav] = useState(false);
  let navlinks = navdata.map((navd) => {
    return (
      <div>
        <li className="p-4 hidden md:block font-bold" key={navd.id}>
          <NavLink to={navd.href}> {navd.title}</NavLink>
        </li>
        <li
          className="p-4 border-b border-gray-600 bg-[#000300] block md:hidden"
          key={navd.id}
        >
          <NavLink to={navd.href}> {navd.title}</NavLink>
        </li>
      </div>
    );
  });

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-20 max-w-full mx-auto px-4 text-white sticky top-0 z-10 bg-slate-900 z-9999 backdrop-filter backdrop-blur-lg bg-opacity-20 whitespace-nowrap">
      <h1
        className="w-full text-transparent text-3xl font-bold bg-clip-text bg-gradient-to-r from-red-600 via-orange-300 to-red-600 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]
"
      >
        CarBay.
      </h1>
      <ul className="hidden md:flex">{navlinks}</ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-min-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
          CarBay.
        </h1>
        {navlinks}
      </ul>
    </div>
  );
};

export default NavDataSet;
