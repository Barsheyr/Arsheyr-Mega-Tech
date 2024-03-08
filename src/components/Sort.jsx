import React from "react";
import { useFilterContext } from "../context/filter_context";
import { BsFillGridFill, BsList } from "react-icons/bs";

const Sort = () => {
  const {
    filtered_products: products,
    grid_view,
    setGridView,
    setListView,
    sort,
    updateSort,
  } = useFilterContext();

  return (
    <div className="flex lg:flex-row flex-col lg:items-center gap-3 justify-between py-10 lg:px-20  px-5 max-5xl mx-auto">
      <div className="flex lg:flex-row items-center gap-2">
        <button
          onClick={setGridView}
          className={`${grid_view ? "active" : null}`}
        >
          <BsFillGridFill size={20} />
        </button>
        <button
          onClick={setListView}
          className={`${!grid_view ? "active" : null}`}
        >
          <BsList size={20} />
        </button>
      </div>
      <p className="">{products.length} products found</p>
      <hr className="lg:w-[50%] h-0.5 bg-gray-300" />
      <form>
        <label htmlFor="sort" className="text-md">
          Sort by
        </label>
        <select
          name="sort"
          id="sort"
          value={sort}
          onChange={updateSort}
          className="p-2"
        >
          <option value="price-lowest">price (lowest)</option>
          <option value="price-highest">price (highest)</option>
          <option value="name-a">name (a - z)</option>
          <option value="name-z">name (z - a)</option>
        </select>
      </form>
    </div>
  );
};

export default Sort;
