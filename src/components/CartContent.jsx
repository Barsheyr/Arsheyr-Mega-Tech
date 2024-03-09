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
      <div className="max-w-6xl mx-auto">
        <CartColumns />
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
        <hr />
        <div className="flex flex-row justify-between items-center py-10">
          <Link
            to="/products"
            className="btn bg-blue-500 text-white hover:bg-blue-300 hover:text-black px-5"
          >
            continue shopping
          </Link>
          <button
            type="button"
            className="link-btn clear-btn btn bg-black text-white hover:bg-blue-300 hover:text-black px-5"
            onClick={clearCart}
          >
            clear shopping cart
          </button>
        </div>
        <CartTotals />
      </div>
    </section>
  );
};

export default CartContent;
