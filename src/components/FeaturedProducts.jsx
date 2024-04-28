import React from "react";
import { useProductsContext } from "../context/products_content";
import { Link } from "react-router-dom";
// import styled from "styled-components";
import Error from "./Error";
import Loading from "./Loading";
import Product from "./Products";

const FeaturedProducts = () => {
  const {
    products_loading: loading,
    products_error: error,
    featured_products: featured,
  } = useProductsContext();
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <div className="section max-w-7xl mx-auto flex flex-col items-center">
      <div className="title text-center lg:text-5xl text-3xl font-bold">
        <h2 className="mb-20">Featured Products</h2>
        <div className="underline"></div>
      </div>
      <div className="grid lg:grid-cols-3 px-10 gap-10">
        {featured.slice(0, 3).map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>

      <div className="mt-10">
        <Link
          to="/productpage"
          className="bg-blue-400 hover:bg-black hover:text-white py-3 px-5 text-black text-sm rounded-md"
        >
          All products
        </Link>
      </div>
    </div>
  );
};

export default FeaturedProducts;
