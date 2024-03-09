import React from "react";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";
import { CartContent, PageHero } from "../components";

const CartPage = () => {
  const { cart } = useCartContext();
  if (cart.length < 1) {
    return (
      <div className="px-20 max-w-6xl mx-auto py-[20%]">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Your cart is empty</h2>
          <Link
            to="/productpage"
            className="btn mt-10 bg-blue-500 text-white hover:bg-blue-300 hover:text-black px-10"
          >
            Fill it
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="py-20">
      <PageHero title="cart" />
      <div className="">
        <CartContent />
      </div>
    </section>
  );
};

export default CartPage;
