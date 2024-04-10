import React from "react";
import { formatPrice } from "../utils/helpers";
import AmountButtons from "./AmountButton";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../context/cart_context";

const CartItem = ({ id, image, name, color, price, amount }) => {
  const { removeItem, toggleAmount } = useCartContext();
  const increase = () => {
    toggleAmount(id, "inc");
  };
  const decrease = () => {
    toggleAmount(id, "dec");
  };
  return (
    <div className=" flex items-center justify-between gap-x-10 py-10">
      <div className="flex items-center gap-5">
        <img
          src={image}
          alt={name}
          className="lg:w-[20vh] md:w-[20vh] w-[20vh] rounded-md"
        />
        <div className="py-3">
          <h5 className=" font-bold lg:text-md text-xs">{name}</h5>
          <h5 className="text-blue-500 lg:text-md text-xs flex lg:hidden">
            {formatPrice(price * amount)}
          </h5>
        </div>
      </div>
      <div className="w-[50%] h-0.5 lg:bg-slate-200 md:bg-slate-200"></div>
      <div className="flex items-cente gap-x-10">
        <h5 className="text-blue-500 hidden lg:flex">{formatPrice(price)}</h5>
        <AmountButtons
          amount={amount}
          increase={increase}
          decrease={decrease}
        />
        <h5 className="text-blue-500 hidden lg:flex">
          {formatPrice(price * amount)}
        </h5>
        <button className="remove-btn" onClick={() => removeItem(id)}>
          <FaTrash color="red" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
