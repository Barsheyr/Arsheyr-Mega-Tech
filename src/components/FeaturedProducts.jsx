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
    <div className="section ">
      <div className="title text-center lg:text-justify text-5xl">
        <h2>featured products</h2>
        <div className="underline"></div>
      </div>
      <div className="max-w-4xl mx-auto  grid lg:grid-cols-3 px-20 ">
        {featured.slice(0, 3).map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
      <Link to="/products" className="btn">
        all products
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
