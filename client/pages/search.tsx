import { useState } from "react";
import ArrowDown from "../components/Icons/ArrowDown";
import ProductCard from "../components/ProductCard";

function Search() {
  const [products, setProducts] = useState([
    "Product name",
    "Product name",
    "Product name",
    "Product name",
    "Product name",
    "Product name",
    "Product name",
    "Product name",
    "Product name",
    "Product name",
    "Product name",
    "Product name",
    "Product name",
    "Product name",
    "Product name",
    "Product name",
    "Product name",
    "Product name",
  ]);

  return (
    <main>
      <h1 className="text-4xl lg:text-5xl mx-auto max-w-[90rem] py-8 px-4 font-bold">
        Search related words
      </h1>
      <div className="mx-auto max-w-[90rem] pt-8 pb-2 px-4 text-xl font-semibold flex justify-between">
        <button className="text-xl font-semibold xl:cursor-default">
          <span className="mr-1">Filters</span>
          <span className="xl:hidden">
            <ArrowDown />
          </span>
        </button>
        <button className="text-xl font-semibold">
          <span className="mr-1">Sort by</span>
          <ArrowDown />
        </button>
      </div>
      <div className="flex mx-auto max-w-[90rem] pb-8 px-4">
        <div className="w-52 h-[49rem] shrink-0 bg-neutral-800 mr-8 rounded-md p-4 hidden xl:inline-block"></div>
        <div className="w-full grid sm:grid-cols-2 lg:grid-cols-3 gap-4 h-fit">
          {products.map((product, i) => {
            return <ProductCard caption={product} key={i} />;
          })}
        </div>
      </div>
    </main>
  );
}
export default Search;
