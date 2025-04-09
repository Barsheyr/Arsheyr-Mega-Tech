import React from "react";
import { formatPrice } from "../utils/helpers";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Products = ({ image, name, price, id }) => {
  return (
    <main className="group relative shadow-md hover:shadow-lg rounded-md transition duration-300">
      <div className="relative overflow-hidden rounded-md">
        <img
          src={image}
          alt={name}
          className="h-[30vh] w-full object-cover transition duration-300 group-hover:opacity-60"
        />

        {/* Hover icon */}
        <Link
          to={`/productpage/${id}`}
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300"
        >
          <div className="bg-blue-600 p-3 rounded-full text-white shadow-md hover:scale-110 transform transition">
            <FaSearch />
          </div>
        </Link>
      </div>

      <div className="flex justify-between items-center mt-4 px-1">
        <h5 className="text-lg font-semibold text-gray-800 capitalize">
          {name}
        </h5>
        <p className="text-blue-500 font-medium">{formatPrice(price)}</p>
      </div>
    </main>
  );
};

export default Products;
