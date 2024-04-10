import React from "react";
import Product from "./Products";

const GridView = ({ products }) => {
  return (
    <div className="">
      <div className="container mx-auto px-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
        {products.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
    </div>
  );
};

export default GridView;
