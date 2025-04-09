// import React from "react";
// import { useProductsContext } from "../context/products_content";
// import { Link } from "react-router-dom";
// // import styled from "styled-components";
// import Error from "./Error";
// import Loading from "./Loading";
// import Product from "./Products";

// const FeaturedProducts = () => {
//   const {
//     products_loading: loading,
//     products_error: error,
//     featured_products: featured,
//   } = useProductsContext();
//   if (loading) {
//     return <Loading />;
//   }
//   if (error) {
//     return <Error />;
//   }
//   return (
//     <div className="section max-w-7xl mx-auto flex flex-col items-center">
//       <div className="title text-center lg:text-5xl text-3xl font-bold">
//         <h2 className="mb-20">Featured Products</h2>
//         <div className="underline"></div>
//       </div>
//       <div className="grid lg:grid-cols-3 px-10 gap-10">
//         {featured.slice(0, 3).map((product) => {
//           return <Product key={product.id} {...product} />;
//         })}
//       </div>

//       <div className="mt-10">
//         <Link
//           to="/productpage"
//           className="bg-blue-400 hover:bg-black hover:text-white py-3 px-5 text-black text-sm rounded-md"
//         >
//           All products
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default FeaturedProducts;

import React from "react";
import { useProductsContext } from "../context/products_content";
import { Link } from "react-router-dom";
import Error from "./Error";
import Loading from "./Loading";
import Product from "./Products";

const FeaturedProducts = () => {
  const {
    products_loading: loading,
    products_error: error,
    featured_products: featured,
  } = useProductsContext();

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <div className="section max-w-7xl mx-auto flex flex-col items-center py-16 px-4">
      <div className="title text-center">
        <h2 className="text-3xl lg:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
          Featured Products
        </h2>
        <div className="w-24 h-1 bg-blue-500 rounded-full mx-auto mb-12" />
      </div>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 w-full">
        {featured.slice(0, 3).map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>

      <div className="mt-14">
        <Link
          to="/productpage"
          className="bg-blue-500 hover:bg-black hover:text-white text-white font-semibold py-3 px-6 rounded-md shadow-md transition-all duration-300 ease-in-out"
        >
          Browse All Products
        </Link>
      </div>
    </div>
  );
};

export default FeaturedProducts;
