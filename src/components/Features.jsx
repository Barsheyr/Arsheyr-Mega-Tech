// import React from "react";
// import { PiShoppingCartSimpleLight } from "react-icons/pi";
// import { IoMdReturnRight } from "react-icons/io";
// import { FaShoppingBag } from "react-icons/fa";
// import { CiCircleCheck } from "react-icons/ci";

// const Features = () => {
//   return (
//     <div className="bg-slate-100 py-20">
//       <div className="max-w-6xl mx-auto px-20 grid lg:grid-cols-4 grid-cols-2 gap-5">
//         <div className="">
//           <PiShoppingCartSimpleLight size={50} className="mb-2" />
//           <div>
//             <h1 className="font-bold  text-sm"> FREE SHIPPING</h1>
//             <p className=" text-xs"> From all orders over $100 </p>
//           </div>
//         </div>
//         <div className="">
//           <IoMdReturnRight size={50} className="mb-2" />
//           <div>
//             <h1 className="font-bold  text-sm"> FREE RETURNS</h1>
//             <p className=" text-xs"> Return money within 30 days </p>
//           </div>
//         </div>
//         <div>
//           <FaShoppingBag size={50} className="mb-2" />
//           <h1 className="font-bold  text-sm"> SECURE SHOPPING</h1>
//           <p className=" text-xs"> You're safe hands </p>
//         </div>
//         <div>
//           <CiCircleCheck size={50} className="mb-2" />
//           <h1 className="font-bold  text-sm"> OVER 10,000 SALES </h1>
//           <p className=" text-xs">We have everything you need </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Features;

import React from "react";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { IoMdReturnRight } from "react-icons/io";
import { FaShoppingBag } from "react-icons/fa";
import { CiCircleCheck } from "react-icons/ci";

const Features = () => {
  return (
    <div className="bg-slate-100 py-20">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-4 grid-cols-2 gap-6 text-center">
        <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <PiShoppingCartSimpleLight size={40} className="text-blue-500 mb-4" />
          <h1 className="font-bold text-sm mb-1 tracking-wide">
            FREE SHIPPING
          </h1>
          <p className="text-xs text-gray-600">From all orders over $100</p>
        </div>

        <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <IoMdReturnRight size={40} className="text-blue-500 mb-4" />
          <h1 className="font-bold text-sm mb-1 tracking-wide">FREE RETURNS</h1>
          <p className="text-xs text-gray-600">Return money within 30 days</p>
        </div>

        <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <FaShoppingBag size={40} className="text-blue-500 mb-4" />
          <h1 className="font-bold text-sm mb-1 tracking-wide">
            SECURE SHOPPING
          </h1>
          <p className="text-xs text-gray-600">You're in safe hands</p>
        </div>

        <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <CiCircleCheck size={40} className="text-blue-500 mb-4" />
          <h1 className="font-bold text-sm mb-1 tracking-wide">
            OVER 10,000 SALES
          </h1>
          <p className="text-xs text-gray-600">We have everything you need</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
