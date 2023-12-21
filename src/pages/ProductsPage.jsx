import React from "react";
import { Filters, ProductList, Sort, PageHero } from "../components";

const ProductsPage = () => {
  return (
    <div className=" bg-slate-50">
      <PageHero title="Products" />
      <div className="page">
        <div className="section-center products">
          <Filters />
          <div>
            <Sort />
            <ProductList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
