import React from "react";
import { useCartContext } from "../context/cart_context";
// import { useUserContext } from "../context/user_context";
import { formatPrice } from "../utils/helpers";
import { Link } from "react-router-dom";

const CartTotals = () => {
  const { total_amount, shipping_fee } = useCartContext();
  return (
    <div>
      <div className="bg-slate-200 rounded-2xl py-5 flex flex-col items-center justify-between px-20">
        <article className="font-bold flex flex-col lg:flex-row items-center justify-between gap-10">
          <h5 className="lg:text-xl ">
            Subtotal :<span>{formatPrice(total_amount)}</span>
          </h5>
          <p className="lg:text-xl">
            Shipping fee :<span>{formatPrice(shipping_fee)}</span>
          </p>
          <hr />
          <h4
            className="lg:text-xl
          "
          >
            Order total :<span>{formatPrice(total_amount + shipping_fee)}</span>
          </h4>
        </article>
        {/* {myUser ? (
          <Link to="/checkout" className="btn">
            proceed to checkout
          </Link>
        ) : (
          <button className="btn">login</button>
        )} */}

        <Link
          to="/checkout"
          className="btn bg-blue-500 mt-10 text-white hover:bg-black hover:text-white"
        >
          Proceed to checkout
        </Link>
      </div>
    </div>
  );
};

export default CartTotals;
