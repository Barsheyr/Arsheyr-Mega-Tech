import React from "react";
import Product from "./Products";

const GridView = ({ products }) => {
  return (
    <div>
      <div className="products-container">
        {products.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
    </div>
  );
};

export default GridView;
