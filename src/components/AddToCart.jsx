import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import { useCartContext } from "../context/cart_context";
import AmountButtons from "./AmountButton";

const AddToCart = ({ product }) => {
  // add to cart
  const { addToCart } = useCartContext();
  const { id, stock, colors } = product;
  const [mainColor, setMainColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const increase = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount + 1;
      if (tempAmount > stock) {
        tempAmount = stock;
      }
      return tempAmount;
    });
  };
  const decrease = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount - 1;
      if (tempAmount < 1) {
        tempAmount = 1;
      }
      return tempAmount;
    });
  };

  return (
    <section>
      <div className="flex gap-5"></div>
      <div className="btn-container ">
        <AmountButtons
          increase={increase}
          decrease={decrease}
          amount={amount}
        />

        <Link
          to="/cartpage"
          className="btn bg-blue-500 border-none text-white hover:bg-black hover:text-white px-10 mt-5"
          onClick={() => addToCart(id, mainColor, amount, product)}
        >
          add to cart
        </Link>
      </div>
    </section>
  );
};

export default AddToCart;
