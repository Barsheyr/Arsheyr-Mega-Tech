import React from "react";
import { formatPrice } from "../utils/helpers";
import { Link } from "react-router-dom";

const ListView = ({ products }) => {
  return (
    <div className="container mx-auto px-10 flex flex-col items-center justify-between">
      {products.map((product) => {
        const { id, image, name, price, description } = product;
        return (
          <article key={id} className="grid grid-cols-1 py-5">
            <img src={image} alt={name} className="h-[30vh] rounded-md" />
            <div className="mt-10 space-y-2">
              <h4 className="font-bold text-xl">{name}</h4>
              <h5 className="text-blue-400 font-semibold">
                {formatPrice(price)}
              </h5>
              <p>{description.substring(0, 150)}...</p>
              <Link
                to={`/productpage/${id}`}
                className="btn bg-blue-400 px-20 border-none"
              >
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
