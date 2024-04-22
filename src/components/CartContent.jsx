import React from "react";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";
import CartColumns from "./CartColumns";
import CartItem from "./CartItem";
import CartTotals from "./CartTotals";

const CartContent = () => {
  const { cart, clearCart } = useCartContext();

  return (
    <section>
      <div className="max-w-6xl mx-auto px-10 lg:px-0">
        <CartColumns />
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
        <hr />
        <div className="flex flex-row justify-between items-center gap-10 py-10">
          <Link
            to="/productpage"
            className="btn bg-blue-500 border-none text-white hover:bg-black hover:text-white px-5"
          >
            back
          </Link>
          <button
            type="button"
            className="link-btn clear-btn btn border-none bg-blue-500 text-white hover:bg-black hover:text-white px-5"
            onClick={clearCart}
          >
            clear cart
          </button>
        </div>
        <CartTotals />
      </div>
    </section>
  );
};

export default CartContent;
