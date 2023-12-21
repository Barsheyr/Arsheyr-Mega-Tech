import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
// import { nav } from "../data";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <nav>
      <div className="">
        <nav
          className={`${isActive ? "text-black" : "text-black"}
        hidden lg:flex gap-x-4 font-ntr tracking-[3px] text-[15px] items-center uppercase lg:gap-x-8`}
        >
          <NavLink to="/" className="hover:underline">
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
    </nav>
  );
};

export default Navbar;
