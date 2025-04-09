// import React from "react";
// import { bestsellerz } from "../utils/constants";

// import { BsPlus, BsEyeFill } from "react-icons/bs";
// import { Link } from "react-router-dom";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";

// // import "./styles.css";

// // import required modules
// import { Pagination } from "swiper/modules";

// const Bestsellers = () => {
//   return (
//     <main className="py-20">
//       <div>
//         <h1 className="text-5xl text-center pt-10 font-bold"> Bestsellers</h1>
//       </div>

//       <Swiper
//         breakpoints={{
//           320: { slidesPerView: 1, spaceBetween: 50 },
//           480: { slidesPerView: 2, spaceBetween: 20 },
//           768: { slidesPerView: 3, spaceBetween: 50 },
//           1024: { slidesPerView: 4, spaceBetween: 50 },
//         }}
//         // slidesPerView={5}
//         // spaceBetween={10}
//         pagination={true}
//         modules={[Pagination]}
//         className="mt-20 max-w-7xl mx-auto px-5"
//       >
//         {bestsellerz.map((bestseller) => {
//           const { id, price, img, name } = bestseller;

//           return (
//             <SwiperSlide key={id} className="">
//               <div className="mb-2 relative group transition">
//                 {/* <div className=""> */}

//                 <div className="">
//                   {/* <p>scdsw</p> */}
//                   <img
//                     src={img}
//                     alt="/"
//                     className=" h-[30vh] group-hover:scale-110 transition duration-300"
//                   />
//                 </div>

//                 <div className="absolute bottom-0 w-full bg-black shadow-xl opacity-0 group-hover:opacity-100">
//                   <button className="flex items-center py-5 px-10 gap-5">
//                     <p className="text-white text-sm"> Quick view </p>
//                     <BsEyeFill color="white" />
//                   </button>
//                 </div>
//               </div>

//               <p className="mb-2 text-center"> {name} </p>
//               <p className="mb-10 text-center"> {price}</p>
//             </SwiperSlide>
//           );
//         })}
//       </Swiper>
//     </main>
//   );
// };

// export default Bestsellers;

import React from "react";
import { bestsellerz } from "../utils/constants";
import { BsEyeFill } from "react-icons/bs";
import { Link } from "react-router-dom";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Bestsellers = () => {
  return (
    <main className="py-20">
      <div>
        <h1 className="text-3xl lg:text-5xl font-extrabold text-center pt-10 text-gray-900 mb-4 tracking-tight">
          Bestsellers
        </h1>
        <div className="w-24 h-1 bg-blue-500 rounded-full mx-auto mb-12" />
      </div>

      <Swiper
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 30 },
          480: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 3, spaceBetween: 30 },
          1024: { slidesPerView: 4, spaceBetween: 40 },
        }}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mt-20 max-w-7xl mx-auto px-5"
      >
        {bestsellerz.map((bestseller) => {
          const { id, price, img, name } = bestseller;

          return (
            <SwiperSlide key={id}>
              <div className="mb-6 relative group transition duration-300 ease-in-out">
                {/* Image container */}
                <div className="overflow-hidden rounded-xl shadow-md">
                  <img
                    src={img}
                    alt={name}
                    className="h-[30vh] w-full object-cover transform group-hover:scale-105 transition duration-300 ease-in-out"
                  />
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition duration-300 rounded-xl">
                  <button className="flex items-center gap-3 px-6 py-3 bg-white text-black rounded-full shadow-md hover:scale-105 transition">
                    <BsEyeFill className="text-lg" />
                    <span className="text-sm font-medium">Quick View</span>
                  </button>
                </div>

                {/* Product info */}
                <p className="mt-4 text-center font-semibold text-base">
                  {name}
                </p>
                <p className="text-center text-sm text-gray-600">{price}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </main>
  );
};

export default Bestsellers;
