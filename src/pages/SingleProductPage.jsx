import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProductsContext } from "../context/products_content";
import { single_product_url as url } from "../utils/constants";
import { formatPrice } from "../utils/helpers";
import {
  Loading,
  Error,
  ProductImage,
  AddToCart,
  Stars,
  PageHero,
} from "../components";

import { Link } from "react-router-dom";

const SingleProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProduct,
  } = useProductsContext();

  useEffect(() => {
    fetchSingleProduct(`${url}${id}`);
    // eslint-disable-next-line
  }, [id]);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
    // eslint-disable-next-line
  }, [error]);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  const {
    name,
    price,
    description,
    stock,
    stars,
    reviews,
    id: sku,
    company,
    images,
  } = product;

  return (
    <div className="py-28">
      <PageHero title={name} product />
      <div className="max-w-7xl mx-auto px-10">
        <div className="flex lg:flex-row flex-col items-center justify-center gap-20">
          <ProductImage images={images} className="" />
          <section className="flex flex-col gap-4 flex-1">
            <h2 className="text-6xl">{name}</h2>
            <Stars stars={stars} reviews={reviews} />
            <h5 className="price text-blue-400 text-2xl font-bold">
              {formatPrice(price)}
            </h5>
            <p className="desc text-xl tracking-widest">{description}</p>
            <p className="flex gap-10">
              <span className="text-blue-400 font-bold">Available : </span>
              {stock > 0 ? "In stock" : "out of stock"}
            </p>
            <p className="flex gap-10">
              <span className="text-blue-400 font-bold">SKU : </span>
              {sku}
            </p>
            <p className="flex gap-10">
              <span className="text-blue-400 font-bold">Brand : </span>
              {company}
            </p>
            <hr />
            {stock > 0 && <AddToCart product={product} />}
          </section>
        </div>
        <Link
          to="/productpage"
          className="btn mt-10 bg-blue-500 text-white hover:bg-blue-300 hover:text-black px-10"
        >
          back to products
        </Link>
      </div>
    </div>
  );
};

export default SingleProductPage;
