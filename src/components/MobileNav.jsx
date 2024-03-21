import React from "react";
import { NavLink } from "react-router-dom";
import { useUserContext } from "../context/user_context";
import { FaUserMinus, FaUserPlus } from "react-icons/fa";

const MobileNav = () => {
  const { loginWithRedirect, myUser, logout } = useUserContext();
  return (
    <div className="w-full h-full">
      <nav className="h-full  font-tertiary tracking-[3px] text-[25px] flex flex-col justify-center items-center gap-y-8">
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>

        <NavLink to="/productpage" className="nav-link">
          Products
        </NavLink>

        {myUser ? (
          <button
            type="button"
            className="auth-btn"
            onClick={() => {
              clearCart();
              localStorage.removeItem("user");
              logout({ returnTo: window.location.origin });
            }}
          >
            Logout <FaUserMinus />
          </button>
        ) : (
          <button
            type="button"
            className="auth-btn text-2xl flex flex-row items-center gap-2 "
            onClick={loginWithRedirect}
          >
            Login <FaUserPlus />
          </button>
        )}
      </nav>
    </div>
  );
};

export default MobileNav;
