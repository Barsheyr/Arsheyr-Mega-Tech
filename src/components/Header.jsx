import React, { useState, useEffect } from "react";
import { HiMenuAlt4, HiOutlineX, HiArrowLeft } from "react-icons/hi";
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";
import CartButton from "./CartButton";
import { Link } from "react-router-dom";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 100 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <header
      className={`${
        isActive ? "bg-slate-50 py-5" : "bg-transparent py-5"
      }   fixed z-20 w-full  transition-all font-ntr`}
    >
      <div className="lg:max-w-7xl mx-6 py-3 lg:mx-auto flex justify-between items-center">
        <Link to="/">
          <h1
            className={`${
              isActive ? "text-blue-500" : "text-blue-500"
            } text-4xl tracking-[5px] font-bold`}
          >
            ARSHEYR
          </h1>
        </Link>

        <div>
          <Navbar />
        </div>

        {/* mobile nav icons */}
        <button className="lg:hidden" onClick={() => setMobileNav(!mobileNav)}>
          {mobileNav ? (
            <HiOutlineX className="text-3xl text-black" />
          ) : (
            <HiMenuAlt4 className="text-3xl text-black" />
          )}
        </button>

        <div className="hidden lg:flex">
          <CartButton />
        </div>

        <div
          className={` ${
            mobileNav ? "left-0" : "-left-full"
          } fixed top-0 bottom-0 w-full lg:hidden transition-all bg-white`}
          onClick={() => setMobileNav(!mobileNav)}
        >
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
