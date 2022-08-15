import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full h-[10vh] px-20 flex justify-start items-center gap-10 bg-gray-100">
      <NavLink
        to="/"
        className="text-[23px] text-gray-800 font-main font-bold uppercase tracking-widest"
      >
        Create Blog
      </NavLink>
      <NavLink
        to="/blogs"
        className="text-[23px] text-gray-800 font-main font-bold uppercase tracking-widest"
      >
        Blogs
      </NavLink>
    </div>
  );
};

export default Navbar;
