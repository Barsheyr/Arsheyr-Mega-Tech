import React from "react";
import { Link } from "react-router-dom";
import herobcg from "../assets/bcg-img.jpg";

const Hero = () => {
  return (
    <div className="max-w-7xl mx-auto py-28 px-5 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      {/* Text Content */}
      <div>
        <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
          Gateway to <span className="text-blue-500">Innovation</span>
        </h1>

        <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-xl">
          Discover the latest in cutting-edge technology at your fingertips. Our
          expertly curated selection of products ensures you stay ahead in the
          fast-paced world of technology.
        </p>

        <div className="mt-8">
          <Link
            to="/productpage"
            className="inline-block bg-blue-500 text-white px-6 py-3 rounded-md text-md font-medium shadow-md hover:bg-blue-600 transition"
          >
            Shop now
          </Link>
        </div>
      </div>

      {/* Image */}
      <div className="w-full h-full">
        <img
          src={herobcg}
          alt="tech workspace"
          className="rounded-xl shadow-lg object-cover w-full h-full max-h-[450px]"
        />
      </div>
    </div>
  );
};

export default Hero;
