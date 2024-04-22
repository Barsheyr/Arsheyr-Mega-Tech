import React from "react";
import { formatPrice } from "../utils/helpers";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Products = ({ image, name, price, id }) => {
  return (
    <main>
      <div className="relative cursor-pointer">
        <Link to={`/productpage/${id}`}>
          <img
            src={image}
            alt={name}
            className="h-[30vh] w-[100vh] object-cover hover:opacity-50 rounded-md shadow-sm"
          />
        </Link>
        {/* 
        <Link
          to={`/productpage/${id}`}
          className="absolute top-[40%] left-[40%] hover:opacity-100 opacity-0 bg-blue-100
          flex items-center justify-center rounded-full p-5"
        >
          <FaSearch className="" />
        </Link> */}
      </div>
      <div className="flex flex-1 justify-between mt-5">
        <h5>{name}</h5>
        <p>{formatPrice(price)}</p>
      </div>
    </main>
  );
};

export default Products;
