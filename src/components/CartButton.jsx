import React from "react";
import { FaShoppingCart, FaUserMinus, FaUserPlus } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";

const CartButton = () => {
  const { total_items, clearCart } = useCartContext();
  const { loginWithRedirect, myUser, logout } = useUserContext();
  return (
    <section className="flex flex-row gap-10">
      <Link
        to="/cartpage"
        className="flex items-center justify-between text-xl text-md"
      >
        Cart
        <span className="flex flex-row justify-center items-center rounded-full px-5 py-3">
          <AiOutlineShoppingCart size={30} className="absolute" />
          <span className="relative text-xs -top-2 left-4 bg-blue-500 text-white rounded-full px-1">
            {total_items}
          </span>
        </span>
      </Link>

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
          className="auth-btn text-xl flex flex-row items-center gap-2 "
          onClick={loginWithRedirect}
        >
          Login <FaUserPlus />
        </button>
      )}
    </section>
  );
};

export default CartButton;
