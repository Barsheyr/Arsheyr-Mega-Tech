// import React from "react";
// import { useCartContext } from "../context/cart_context";
// import { Link } from "react-router-dom";
// import CartColumns from "./CartColumns";
// import CartItem from "./CartItem";
// import CartTotals from "./CartTotals";

// const CartContent = () => {
//   const { cart, clearCart } = useCartContext();

//   return (
//     <section>
//       <div className="max-w-6xl mx-auto px-10 lg:px-5">
//         <CartColumns />
//         {cart.map((item) => {
//           return <CartItem key={item.id} {...item} />;
//         })}
//         <hr />
//         <div className="flex flex-row justify-between items-center py-10">
//           <Link
//             to="/productpage"
//             className="btn bg-blue-500 border-none text-white hover:bg-black hover:text-white px-5"
//           >
//             contiue shopping
//           </Link>
//           <button
//             type="button"
//             className="link-btn clear-btn btn border-none bg-blue-500 text-white hover:bg-black hover:text-white px-5"
//             onClick={clearCart}
//           >
//             clear cart
//           </button>
//         </div>
//         <CartTotals />
//       </div>
//     </section>
//   );
// };

// export default CartContent;

import React from "react";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";
import CartColumns from "./CartColumns";
import CartItem from "./CartItem";
import CartTotals from "./CartTotals";

const CartContent = () => {
  const { cart, clearCart } = useCartContext();

  return (
    <section className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        {/* Optional columns layout for large screens */}
        <CartColumns />

        {/* Cart items */}
        {cart.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-10 gap-4">
          <Link
            to="/productpage"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-black transition"
          >
            Continue Shopping
          </Link>
          <button
            type="button"
            className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-black transition"
            onClick={clearCart}
          >
            Clear Cart
          </button>
        </div>

        {/* Cart totals */}
        <CartTotals />
      </div>
    </section>
  );
};

export default CartContent;
