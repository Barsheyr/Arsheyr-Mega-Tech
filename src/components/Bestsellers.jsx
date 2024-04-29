import React from "react";
import { bestsellerz } from "../utils/constants";

import { BsPlus, BsEyeFill } from "react-icons/bs";
import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";

const Bestsellers = () => {
  return (
    <main className="py-20">
      <div>
        <h1 className="text-5xl text-center pt-10 font-bold"> Bestsellers</h1>
      </div>

      <Swiper
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 50 },
          480: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 3, spaceBetween: 50 },
          1024: { slidesPerView: 4, spaceBetween: 50 },
        }}
        // slidesPerView={5}
        // spaceBetween={10}
        pagination={true}
        modules={[Pagination]}
        className="mt-20 max-w-7xl mx-auto px-5"
      >
        {bestsellerz.map((bestseller) => {
          const { id, price, img, name } = bestseller;

          return (
            <SwiperSlide key={id} className="">
              <div className="mb-2 relative group transition">
                {/* <div className=""> */}

                <div className="">
                  {/* <p>scdsw</p> */}
                  <img
                    src={img}
                    alt="/"
                    className=" h-[30vh] group-hover:scale-110 transition duration-300"
                  />
                </div>

                <div className="absolute bottom-0 w-full bg-black shadow-xl opacity-0 group-hover:opacity-100">
                  <button className="flex items-center py-5 px-10 gap-5">
                    <p className="text-white text-sm"> Quick view </p>
                    <BsEyeFill color="white" />
                  </button>
                </div>
              </div>

              <p className="mb-2 text-center"> {name} </p>
              <p className="mb-10 text-center"> {price}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </main>
  );
};

export default Bestsellers;
