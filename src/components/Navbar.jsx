import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { links } from "../utils/constants";
import { Link } from "react-router-dom";
import { useUserContext } from "../context/user_context";
// import { nav } from "../data";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const { myUser } = useUserContext();

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
        hidden lg:flex gap-x-4  tracking-[3px] text-xl items-center lg:gap-x-8`}
        ></nav>
        <ul className="hidden lg:flex flex- items-center justify-between gap-10 capitalize">
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <Link to={url} className="text-xl">
                  {text}
                </Link>
              </li>
            );
          })}
          {myUser && (
            <li>
              <Link to="/checkout">checkout</Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
