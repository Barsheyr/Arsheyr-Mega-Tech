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
    <div className="section max-w-7xl mx-auto flex flex-col items-center space-y-5 mt-20 ">
      <div className="title text-center text-8xl">
        <h2>Featured Products</h2>
        <div className="underline"></div>
      </div>
      <div className="grid lg:grid-cols-3 px-20 gap-10 ">
        {featured.slice(0, 3).map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
      <Link
        to="/productpage"
        className="bg-blue-500 py-3 px-3 text-black uppercase rounded-md"
      >
        All products
      </Link>
    </div>
  );
};

// const Wrapper = styled.section`
//   background: var(--clr-grey-10);
//   .featured {
//     margin: 4rem auto;
//     display: grid;
//     gap: 2.5rem;
//     img {
//       height: 225px;
//     }
//   }
//   .btn {
//     display: block;
//     width: 148px;
//     margin: 0 auto;
//     text-align: center;
//   }
//   @media (min-width: 576px) {
//     .featured {
//       grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
//     }
//   }
// `;

export default FeaturedProducts;
