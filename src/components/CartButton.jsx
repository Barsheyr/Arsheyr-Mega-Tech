import React from "react";
import { FaShoppingCart, FaUserMinus, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const CartButton = () => {
  return (
    <section className="flex gap-10">
      <Link
        to="/cartpage"
        className="flex items-center justify-between gap-5 uppercase"
      >
        Cart
        <span>
          <FaShoppingCart size={"1.5rem"} />
        </span>
      </Link>

      <button className="flex items-center justify-between gap-5 uppercase">
        Logout <FaUserMinus size={"1.5rem"} />
      </button>
    </section>
  );
};

export default CartButton;
