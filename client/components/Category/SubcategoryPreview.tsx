import Link from "next/link";
import { useState } from "react";
import ProductCard from "../ProductCard";

function SubcategoryPreview() {
  const [products, setProducts] = useState([
    "Product name",
    "Product name",
    "Product name",
    "Product name",
  ]);

  return (
    <div className="mx-auto max-w-[90rem] py-8 px-4">
      <div className="flex justify-between mb-2">
        <Link href="#">
          <a>
            <h2 className="text-xl font-semibold inline-block hover:text-neutral-400">
              Subcategory
            </h2>
          </a>
        </Link>
        <Link href="#">
          <a className="mt-auto text-sm hover:text-neutral-400">View all ➤</a>
        </Link>
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {products.map((product, i) => {
          if (i < 3) return <ProductCard caption={product} key={i} />;
          else if (i === 3)
            return (
              <span className="contents md:hidden xl:contents" key={i}>
                <ProductCard caption={product} />
              </span>
            );
          else return;
        })}
      </div>
    </div>
  );
}
export default SubcategoryPreview;
