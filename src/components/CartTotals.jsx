// import React from "react";
// import { useCartContext } from "../context/cart_context";
// import { useUserContext } from "../context/user_context";
// import { formatPrice } from "../utils/helpers";
// import { Link } from "react-router-dom";

// const CartTotals = () => {
//   const { total_amount, shipping_fee } = useCartContext();
//   const { myUser, loginWithRedirect } = useUserContext();
//   return (
//     <div className="">
//       <div className="bg-slate-100 py-10 px-10">
//         <article className="font-bold">
//           <h5 className="lg:text-base">
//             Subtotal :<span>{formatPrice(total_amount)}</span>
//           </h5>
//           <p className="lg:text-base">
//             Shipping fee :<span>{formatPrice(shipping_fee)}</span>
//           </p>
//           <h4
//             className="lg:text-xl mt-10
//           "
//           >
//             Order total :<span>{formatPrice(total_amount + shipping_fee)}</span>
//           </h4>
//         </article>
//         {myUser ? (
//           <Link to="/checkout" className="btn">
//             proceed to checkout
//           </Link>
//         ) : (
//           <button
//             onClick={loginWithRedirect}
//             className="bg-blue-400 hover:bg-black hover:text-white py-3 px-5 text-black text-sm rounded-md"
//           >
//             login
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CartTotals;

import React from "react";
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";
import { formatPrice } from "../utils/helpers";
import { Link } from "react-router-dom";

const CartTotals = () => {
  const { total_amount, shipping_fee } = useCartContext();
  const { myUser, loginWithRedirect } = useUserContext();

  return (
    <div className="mt-12 flex justify-end">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-6 border-b pb-3">
          Order Summary
        </h2>
        <div className="space-y-3 text-gray-700 text-base">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span className="font-medium text-blue-600">
              {formatPrice(total_amount)}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Shipping Fee</span>
            <span className="font-medium text-blue-600">
              {formatPrice(shipping_fee)}
            </span>
          </div>
          <hr className="my-3" />
          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span className="text-gray-900">
              {formatPrice(total_amount + shipping_fee)}
            </span>
          </div>
        </div>

        {myUser ? (
          <Link
            to="/checkout"
            className="block w-full text-center mt-6 bg-blue-600 text-white py-3 rounded-md font-medium hover:bg-black transition"
          >
            Proceed to Checkout
          </Link>
        ) : (
          <button
            onClick={loginWithRedirect}
            className="block w-full mt-6 bg-blue-500 text-white py-3 rounded-md font-medium hover:bg-black transition"
          >
            Login to Checkout
          </button>
        )}
      </div>
    </div>
  );
};

export default CartTotals;
