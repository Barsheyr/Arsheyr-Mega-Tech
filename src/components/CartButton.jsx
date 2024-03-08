import React from "react";
import { FaShoppingCart, FaUserMinus, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";

const CartButton = () => {
  const { total_items, clearCart } = useCartContext();
  const { loginWithRedirect, myUser, logout } = useUserContext();
  return (
    <section className="flex flex-row gap-10 font-Inter">
      <Link
        to="/cartpage"
        className="flex items-center justify-between gap-2 uppercase text-md"
      >
        Cart
        <span className="flex flex-row justify-center items-center rounded-full w-10  h-10 bg-blue-500">
          <FaShoppingCart size={"1.5rem"} className="absolute" />
          <span className="relative -top-4 left-5"> {total_items} </span>
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
