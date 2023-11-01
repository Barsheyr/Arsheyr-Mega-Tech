import React from "react";
import { NavLink } from "react-router-dom";

const MobileNav = () => {
  return (
    <div className="text-yellow-500 w-full h-full">
      <nav className="h-full text-yellow-500 font-tertiary tracking-[3px] text-[25px] flex flex-col justify-center items-center gap-y-8">
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/about" className="nav-link">
          About
        </NavLink>
        <NavLink to="/productpage" className="nav-link">
          Products
        </NavLink>
      </nav>
    </div>
  );
};

export default MobileNav;
