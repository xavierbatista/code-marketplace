import Link from "next/link";
import { useState } from "react";
import ArrowRight from "../Icons/ArrowRight";
import ProductCard from "../ProductCard";

function SubcategoryPreview({ subcategoryName }: any) {
  const [products, setProducts] = useState([
    "Product name",
    "Product name",
    "Product name",
    "Product name",
  ]);

  return (
    <section className="mx-auto max-w-[90rem] py-8 px-4">
      <div className="flex justify-between mb-2">
        <Link href="/search">
          <a>
            <h2 className="text-xl font-semibold inline-block">
              {subcategoryName || "Subcategory"}
            </h2>
          </a>
        </Link>
        <Link href="/search">
          <a>
            <span className="mt-auto text-sm mr-1">View all</span>
            <ArrowRight />
          </a>
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
    </section>
  );
}
export default SubcategoryPreview;
