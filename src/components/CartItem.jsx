// import React from "react";
// import { formatPrice } from "../utils/helpers";
// import AmountButtons from "./AmountButton";
// import { FaTrash } from "react-icons/fa";
// import { useCartContext } from "../context/cart_context";

// const CartItem = ({ id, image, name, color, price, amount }) => {
//   const { removeItem, toggleAmount } = useCartContext();
//   const increase = () => {
//     toggleAmount(id, "inc");
//   };
//   const decrease = () => {
//     toggleAmount(id, "dec");
//   };
//   return (
//     <div className="flex items-center justify-between gap-x-10 mb-10">
//       <div className="flex items-center gap-5">
//         <img
//           src={image}
//           alt={name}
//           className="lg:w-[20vh] md:w-[20vh] w-[20vh] rounded-md"
//         />
//         <div className="py-3">
//           <h5 className=" font-bold lg:text-md text-xs">{name}</h5>
//           <h5 className="text-blue-500 lg:text-md text-xs flex lg:hidden">
//             {formatPrice(price * amount)}
//           </h5>
//         </div>
//       </div>
//       <div className="w-[50%] h-0.5 lg:bg-slate-200 md:bg-slate-200"></div>
//       <div className="flex items-cente gap-x-10">
//         <h5 className="text-blue-500 hidden lg:flex">{formatPrice(price)}</h5>
//         <AmountButtons
//           amount={amount}
//           increase={increase}
//           decrease={decrease}
//         />
//         <h5 className="text-blue-500 hidden lg:flex">
//           {formatPrice(price * amount)}
//         </h5>
//         <button className="remove-btn" onClick={() => removeItem(id)}>
//           <FaTrash color="red" />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CartItem;

import React from "react";
import { formatPrice } from "../utils/helpers";
import AmountButtons from "./AmountButton";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../context/cart_context";

const CartItem = ({ id, image, name, color, price, amount }) => {
  const { removeItem, toggleAmount } = useCartContext();

  const increase = () => toggleAmount(id, "inc");
  const decrease = () => toggleAmount(id, "dec");

  return (
    <div className="bg-white shadow-md rounded-xl p-5 mb-6 flex flex-col md:flex-row md:items-center justify-between gap-5">
      <div className="flex items-center gap-4">
        <img
          src={image}
          alt={name}
          className="w-24 h-24 object-cover rounded-lg"
        />
        <div>
          <h5 className="text-lg font-semibold">{name}</h5>
          <p className="text-sm text-gray-500">
            Color:
            <span
              className="inline-block w-4 h-4 rounded-full ml-2 border border-gray-300"
              style={{ backgroundColor: color }}
            ></span>
          </p>
          <p className="text-sm text-blue-600 font-medium md:hidden mt-1">
            {formatPrice(price * amount)}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between w-full md:w-auto gap-6">
        <p className="text-blue-600 font-medium hidden md:block">
          {formatPrice(price)}
        </p>

        <AmountButtons
          amount={amount}
          increase={increase}
          decrease={decrease}
        />

        <p className="text-blue-600 font-medium hidden md:block">
          {formatPrice(price * amount)}
        </p>

        <button
          onClick={() => removeItem(id)}
          className="text-red-500 hover:text-red-700 transition"
        >
          <FaTrash size={16} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
