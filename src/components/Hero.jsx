import React from "react";
import { Link } from "react-router-dom";
import herobcg from "../assets/bcg-img.jpg";
import bcg2 from "../assets/bcg2.jpg";

const Hero = () => {
  return (
    <div className="max-w-7xl mx-auto py-44 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center px-5">
      <div className="order-1 lg:order-none">
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
          Gateway to Innovation
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8">
          Discover the latest in cutting-edge technology at your fingertips. Our
          expertly curated selection of products ensures you stay ahead in the
          fast-paced world of technology.
        </p>

        <div className="mt-10">
          <Link
            to="/productpage"
            className="bg-blue-400 hover:bg-black hover:text-white py-2 px-5 text-black text-md rounded-md"
          >
            Shop now
          </Link>
        </div>
      </div>

      {/* image */}
      <div className="">
        <img src={herobcg} alt="" className="" />
      </div>
    </div>
  );
};

export default Hero;
