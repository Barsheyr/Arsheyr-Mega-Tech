import React from "react";
import { Link } from "react-router-dom";

const PageHero = ({ title, product }) => {
  return (
    <div className="py-5  font-Inter font-bold">
      <h3 className="text-3xl max-w-5xl mx-auto cursor-pointer">
        {/* <Link to="/" className="text-slate-500">
          Home
        </Link> */}
        {/* {product && (
          <Link className="cursor-pointer" to="/products">
            Products
          </Link>
        )} */}
        {/* {title} */}
      </h3>
    </div>
  );
};

export default PageHero;
