import React from "react";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";
import { CartContent, PageHero } from "../components";

const CartPage = () => {
  const { cart } = useCartContext();
  if (cart.length < 1) {
    return (
      <div className="px-20">
        <div className="empty">
          <h2>Your cart is empty</h2>
          <Link to="/products" className="btn">
            fill it
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
