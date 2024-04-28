import React from "react";
import { NavLink } from "react-router-dom";
import CartButton from "./CartButton";
import { useUserContext } from "../context/user_context";
import { links } from "../utils/constants";
import { Link } from "react-router-dom";
import { FaUserMinus, FaUserPlus } from "react-icons/fa";

const MobileNav = () => {
  const { loginWithRedirect, myUser, logout } = useUserContext();
  return (
    <div className="px-10">
      <nav className="h-full text-xl gap-y-8 py-10">
        <h1 className="text-2xl tracking-[10px] font-bold">ARSHEYR</h1>
        <ul className="flex flex-col gap-2 mt-10 w-full">
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id} className="w-full hover:bg-blue-200 py-3 px-3">
                <Link className=" capitalize" to={url}>
                  {text}
                </Link>
              </li>
            );
          })}
          {myUser && (
            <li className="w-full hover:bg-blue-200 py-3 px-3">
              <Link className="capitalize" to="/checkout">
                checkout
              </Link>
            </li>
          )}
        </ul>

        <div className="mt-10">
          <CartButton />
        </div>
      </nav>
    </div>
  );
};

export default MobileNav;
