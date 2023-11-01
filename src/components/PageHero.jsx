import React from "react";
import { Link } from "react-router-dom";

const PageHero = ({ title, product }) => {
  return (
    <div className="bg-yellow-500 py-16 font-Tiltnoon font-bold">
      <h3 className="text-3xl max-w-5xl mx-auto">
        <Link to="/" className="text-slate-500">
          Home
        </Link>
        {product && <Link to="/products">/ Products</Link>}/ {title}
      </h3>
    </div>
  );
};

export default PageHero;
