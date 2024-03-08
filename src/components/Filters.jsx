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
              className="p-2 bg-gray-300 rounded-sm tracking-tighter"
            />
          </div>
          {/* end of search input */}
          {/* category */}
          <div className="form-control mt-5">
            <h5 className="mb-2 font-bold text-3xl">category</h5>
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
            <h5 className="mb-2 font-bold text-3xl">company</h5>
            <select
              name="company"
              value={company}
              onChange={updateFilters}
              className="bg-gray-200"
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

          {/* colors */}
          {/* <div className="form-control mt-5">
            <h5 className="mb-2">colors</h5>
            <div className="flex items-center">
              {colors.map((c, index) => {
                if (c === "all") {
                  return (
                    <button
                      key={index}
                      name="color"
                      onClick={updateFilters}
                      data-color="all"
                      className={`${
                        color === "all"
                          ? "flex items-center justify-center active"
                          : "flex items-center justify-center"
                      }`}
                    >
                      all
                    </button>
                  );
                }
                return (
                  <button
                    key={index}
                    name="color"
                    style={{ background: c }}
                    className={`${
                      color === c
                        ? "flex items-center justify-center cursor-pointer opacity-50 w-4 h-4"
                        : "color-btn"
                    }`}
                    data-color={c}
                    onClick={updateFilters}
                  >
                    {color === c ? <FaCheck /> : null}
                  </button>
                );
              })}
            </div>
          </div> */}
          {/* end of colors */}

          {/* price */}
          <div className="form-control mt-5">
            <h5 className="mb-2">price</h5>
            <p className="price">{formatPrice(price)}</p>
            <input
              type="range"
              name="price"
              onChange={updateFilters}
              min={min_price}
              max={max_price}
              value={price}
            />
          </div>
          {/* end of price */}
          {/* shipping */}
          <div className="form-control flex flex-row justify-between items-center mt-5 py-3">
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
