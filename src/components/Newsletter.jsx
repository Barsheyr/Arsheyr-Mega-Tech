// import React from "react";

// const Newsletter = () => {
//   return (
//     <div>
//       <main className="max-w-5xl mx-auto py-20 flex flex-col items-center text-center">
//         <div className="w-[100%] h-0.5 bg-gray-200 mt-10 mb-20"></div>

//         {/* das */}
//         <div className="space-y-5 mt-20 px-20">
//           <h1 className="text-4xl"> Subscribe to our Newsletter </h1>
//           <p className="tracking-widest">
//             Receive an exclusive 10% discount code when you signup.
//           </p>

//           <div className="flex flex-row items-center pt-20 justify-between">
//             <form action="">
//               <input type="email" placeholder="Email" className="" />
//             </form>
//             <p className="font-bold">Subscribe </p>
//           </div>
//         </div>

//         <div className="w-[70%] h-0.5 bg-black mt-10"></div>
//       </main>
//     </div>
//   );
// };

// export default Newsletter;

import React from "react";

const Newsletter = () => {
  return (
    <div>
      <main className="max-w-5xl mx-auto py-20 flex flex-col items-center text-center px-6">
        {/* Top Divider */}
        <div className="w-full h-0.5 bg-gray-200 mb-20"></div>

        {/* Newsletter Content */}
        <div className="space-y-5 w-full">
          <h1 className="text-4xl font-bold">Subscribe to our Newsletter</h1>
          <p className="tracking-wide text-gray-600 text-sm sm:text-base">
            Receive an exclusive 10% discount code when you sign up.
          </p>

          {/* Email Input + Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-10 w-full">
            <form action="" className="w-full sm:w-2/3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-full px-6 py-3 outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
            </form>
            <button className="bg-blue-500 text-white font-semibold px-6 py-3 rounded-full hover:bg-black transition">
              Subscribe
            </button>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="w-[70%] h-0.5 bg-black mt-16"></div>
      </main>
    </div>
  );
};

export default Newsletter;
