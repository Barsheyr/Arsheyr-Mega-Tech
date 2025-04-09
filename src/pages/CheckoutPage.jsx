// import React from "react";
// import { PageHero, StripeCheckout } from "../components";
// // extra imports
// import { useCartContext } from "../context/cart_context";
// import { Link } from "react-router-dom";

// const CheckoutPage = () => {
//   const { cart } = useCartContext();
//   return (
//     <main>
//       <PageHero title="checkout" />
//       <div className="page">
//         {cart.length < 1 ? (
//           <div className="empty">
//             <h2>Your cart is empty</h2>
//             <Link to="/products" className="btn">
//               fill it
//             </Link>
//           </div>
//         ) : (
//           <StripeCheckout />
//         )}
//       </div>
//     </main>
//   );
// };

// export default CheckoutPage;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setOrderConfirmed(true); // Trigger confirmation on mount
  }, []);

  useEffect(() => {
    if (orderConfirmed) {
      const timer = setTimeout(() => {
        navigate("/"); // Redirect to home after 3s
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [orderConfirmed, navigate]);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-50 px-4">
      <div className="text-center bg-white p-10 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-green-600 mb-4">
          🎉 Thanks for shopping with us!
        </h2>
        <p className="text-gray-700 text-md">
          Your order has been received and will be delivered shortly.
        </p>
        <p className="text-sm text-gray-500 mt-2">
          Redirecting you to the homepage...
        </p>
      </div>
    </div>
  );
};

export default Checkout;
