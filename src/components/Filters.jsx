import React from "react";
import { useFilterContext } from "../context/filter_context";
import { getUniqueValues, formatPrice } from "../utils/helpers";
import { FaCheck } from "react-icons/fa";

const Filters = () => {
  const {
    filters: {
      text,
      category,
      company,
      color,
      min_price,
      price,
      max_price,
      shipping,
    },
    updateFilters,
    all_products,
    clearFilters,
  } = useFilterContext();

  const categories = getUniqueValues(all_products, "category");
  const companies = getUniqueValues(all_products, "company");
  const colors = getUniqueValues(all_products, "colors");

  return (
    <div className="lg:px-20 px-5">
      <div className="content">
        <form onSubmit={(e) => e.preventDefault()}>
          {/* search input */}
          <div className="form-control mt-5">
            <input
              type="text"
              name="text"
              value={text}
              placeholder="search"
              onChange={updateFilters}
              className="p-2 bg-gray-300 w-[50%] lg:w-full rounded-sm tracking-tighter"
            />
          </div>
          {/* end of search input */}
          {/* category */}
          <div className="form-control mt-5">
            <h5 className="mb-2 font-bold lg:text-xl ">Category</h5>
            <div className="flex flex-col items-start space-y-1">
              {categories.map((c, index) => {
                return (
                  <button
                    key={index}
                    onClick={updateFilters}
                    type="button"
                    name="category"
                    className={`${
                      category === c.toLowerCase() ? "active" : null
                    }`}
                  >
                    {c}
                  </button>
                );
              })}
            </div>
          </div>
          {/* end of category */}
          {/* company */}
          <div className="form-control mt-5">
            <h5 className="mb-2 font-bold lg:text-xl">Company</h5>
            <select
              name="company"
              value={company}
              onChange={updateFilters}
              className="bg-gray-200 w-[50%] lg:w-full"
            >
              {companies.map((c, index) => {
                return (
                  <option key={index} value={c}>
                    {c}
                  </option>
                );
              })}
            </select>
          </div>
          {/* end of company */}

          {/* price */}
          <div className="form-control mt-5">
            <h5 className="mb-2 font-bold">Price</h5>
            <p className="price">{formatPrice(price)}</p>
            <input
              type="range"
              name="price"
              onChange={updateFilters}
              min={min_price}
              max={max_price}
              value={price}
              className="w-[50%] lg:w-full"
            />
          </div>
          {/* end of price */}
          {/* shipping */}
          <div className="form-control flex flex-row lg:justify-between gap-5 items-center mt-5 py-3">
            <label htmlFor="shipping">free shipping</label>
            <input
              type="checkbox"
              name="shipping"
              id="shipping"
              checked={shipping}
              onChange={updateFilters}
            />
          </div>
          {/* end of  shipping */}
        </form>
        <button
          type="button"
          className="bg-red-400 rounded-md text-white px-1 py-2"
          onClick={clearFilters}
        >
          clear filters
        </button>
      </div>
    </div>
  );
};

export default Filters;
