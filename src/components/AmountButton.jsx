import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const AmountButton = ({ increase, decrease, amount }) => {
  return (
    <div className="flex flex-row items-center gap-5">
      <button type="button" className="amount-btn" onClick={decrease}>
        <FaMinus />
      </button>
      <h2 className="text-md">{amount}</h2>
      <button type="button" className="amount-btn" onClick={increase}>
        <FaPlus />
      </button>
    </div>
  );
};

export default AmountButton;
