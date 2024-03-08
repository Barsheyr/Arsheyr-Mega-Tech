import React from "react";
import { formatPrice } from "../utils/helpers";
import { Link } from "react-router-dom";

const ListView = ({ products }) => {
  return (
    <div className=" max-w-5xl mx-auto px-20 flex flex-col items-center justify-between">
      {products.map((product) => {
        const { id, image, name, price, description } = product;
        return (
          <article key={id} className="grid grid-cols-1">
            <img src={image} alt={name} className="h-[20vh]" />
            <div>
              <h4>{name}</h4>
              <h5 className="price">{formatPrice(price)}</h5>
              <p>{description.substring(0, 150)}...</p>
              <Link to={`/products/${id}`} className="btn">
                Details
              </Link>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default ListView;
