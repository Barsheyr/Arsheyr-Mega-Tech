import React from "react";
import { Link } from "react-router-dom";
import herobcg from "../assets/bcg-img.jpg";
import bcg2 from "../assets/bcg2.jpg";

const Hero = () => {
  return (
    <div className="max-w-6xl mx-auto px-5 py-20 grid lg:first:grid-cols-2">
      <div className=" text-black mt-20">
        <h1 className="lg:text-5xl text-4xl font-bold uppercase">
          Your Gateway to Innovation!
        </h1>
        <p className="mt-10 text-lg mb-10 lg:pr-32 leading-8">
          Discover the latest in cutting-edge technology at your fingertips.
          From smartphones and laptops to smart home devices and gaming gear,
          we've got it all. Our expertly curated selection of products ensures
          you stay ahead in the fast-paced world of technology.
        </p>

        <Link
          to="/products"
          className="bg-yellow-500 py-3 px-3 text-black uppercase rounded-md"
        >
          Shop now
        </Link>
      </div>

      {/* image */}
      <div className="h-[55vh] mt-20">
        <img src={herobcg} alt="" className="h-[50vh] rounded-md" />
        {/* <img src={bcg2} alt="" className="rounded-md" /> */}
      </div>
    </div>
  );
};

export default Hero;
