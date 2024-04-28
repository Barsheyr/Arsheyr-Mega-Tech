import React from "react";
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";
import { formatPrice } from "../utils/helpers";
import { Link } from "react-router-dom";

const CartTotals = () => {
  const { total_amount, shipping_fee } = useCartContext();
  const { myUser, loginWithRedirect } = useUserContext();
  return (
    <div className="">
      <div className="bg-slate-100 py-10 px-10">
        <article className="font-bold">
          <h5 className="lg:text-base">
            Subtotal :<span>{formatPrice(total_amount)}</span>
          </h5>
          <p className="lg:text-base">
            Shipping fee :<span>{formatPrice(shipping_fee)}</span>
          </p>
          <h4
            className="lg:text-xl mt-10
          "
          >
            Order total :<span>{formatPrice(total_amount + shipping_fee)}</span>
          </h4>
        </article>
        {myUser ? (
          <Link to="/checkout" className="btn">
            proceed to checkout
          </Link>
        ) : (
          <button
            onClick={loginWithRedirect}
            className="bg-blue-400 hover:bg-black hover:text-white py-3 px-5 text-black text-sm rounded-md"
          >
            login
          </button>
        )}
      </div>
    </div>
  );
};

export default CartTotals;
