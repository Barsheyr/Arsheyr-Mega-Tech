import React from "react";
import { useCartContext } from "../context/cart_context";
// import { useUserContext } from "../context/user_context";
import { formatPrice } from "../utils/helpers";
import { Link } from "react-router-dom";

const CartTotals = () => {
  const { total_amount, shipping_fee } = useCartContext();
  return (
    <div>
      <div className="">
        <article className="font-bold">
          <h5>
            subtotal :<span>{formatPrice(total_amount)}</span>
          </h5>
          <p>
            shipping fee :<span>{formatPrice(shipping_fee)}</span>
          </p>
          <hr />
          <h4
            className="py-10
          "
          >
            order total :<span>{formatPrice(total_amount + shipping_fee)}</span>
          </h4>
        </article>
        {/* {myUser ? (
          <Link to="/checkout" className="btn">
            proceed to checkout
          </Link>
        ) : (
          <button className="btn">login</button>
        )} */}

        <Link to="/checkout" className="btn">
          proceed to checkout
        </Link>
      </div>
    </div>
  );
};

export default CartTotals;
