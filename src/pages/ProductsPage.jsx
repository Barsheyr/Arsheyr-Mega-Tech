import React from "react";
import { Filters, ProductList, Sort, PageHero } from "../components";

const ProductsPage = () => {
  return (
    <div className=" bg-slate-50 py-28">
      <PageHero title="Products" />
      <div className="page">
        <div className="flex lg:flex-row  flex-col gap-20 mt-10">
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
