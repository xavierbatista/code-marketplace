import { useState } from "react";
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
  ]);

  return (
    <main>
      <h1 className="mx-auto max-w-[90rem] my-8 px-4 text-5xl font-bold">
        Search related words
      </h1>
      <div className="mx-auto max-w-[90rem] mt-16 mb-2 px-4 text-xl font-semibold">
        Filters
      </div>
      <div className="flex mx-auto max-w-[90rem] mb-8 px-4">
        <div className="w-48 shrink-0 bg-neutral-800 h-fill mr-8 rounded-md p-4 hidden xl:inline-block"></div>
        <div className="w-full grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product, i) => {
            return <ProductCard caption={product} key={i} />;
          })}
        </div>
      </div>
    </main>
  );
}
export default Search;
