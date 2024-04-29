import React from "react";
import { Filters, ProductList, Sort, PageHero } from "../components";

const ProductsPage = () => {
  return (
    <div className=" bg-slate-50 py-10">
      <div className="max-w-6xl mx-auto">
        <PageHero title="Products" />
        <div className="page">
          <div className="grid lg:grid-cols-[200px,1fr]">
            <Filters />
            <div>
              <Sort />
              <ProductList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
