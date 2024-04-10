import React from "react";
import { Link } from "react-router-dom";
import herobcg from "../assets/bcg-img.jpg";
import bcg2 from "../assets/bcg2.jpg";

const Hero = () => {
  return (
    <div className="max-w-6xl mx-auto px-5 py-20 grid lg:first:grid-cols-2">
      <div className=" text-black mt-20">
        <h1 className="lg:text-5xl text-4xl font-bold uppercase">
          Gateway to Innovation!
        </h1>
        <p className="mt-10 text-xl mb-10 lg:pr-32 leading-8">
          Discover the latest in cutting-edge technology at your fingertips. Our
          expertly curated selection of products ensures you stay ahead in the
          fast-paced world of technology.
        </p>

        <Link
          to="/productpage"
          className="bg-blue-400 py-5 px-10 text-black uppercase rounded-md font-semibold"
        >
          Shop now
        </Link>
      </div>

      {/* image */}
      <div className="h-[55vh] mt-32">
        <img src={herobcg} alt="" className="h-[50vh] rounded-md absolute" />
        <img
          src={bcg2}
          alt=""
          className="rounded-md h-[20vh] relative top-[70%]"
        />
      </div>
    </div>
  );
};

export default Hero;
