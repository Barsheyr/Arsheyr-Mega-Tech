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
    <div className="flex items-center justify-between py-5 lg:px-10">
      <div className="flex flex-row items-center gap-5">
        <img
          src={image}
          alt={name}
          className="lg:w-[20vh] md:w-[30vh] w-[20vh] rounded-md"
        />
        <div className="py-3">
          <h5 className=" font-bold text-xs">{name}</h5>
          <h5 className="text-blue-500 text-sm flex lg:hidden">
            {formatPrice(price * amount)}
          </h5>
        </div>
      </div>
      <h5 className="text-blue-500 hidden lg:flex">{formatPrice(price)}</h5>
      <AmountButtons amount={amount} increase={increase} decrease={decrease} />
      <h5 className="text-blue-500 hidden lg:flex">
        {formatPrice(price * amount)}
      </h5>
      <button className="remove-btn" onClick={() => removeItem(id)}>
        <FaTrash color="red" />
      </button>
    </div>
  );
};

export default CartItem;
