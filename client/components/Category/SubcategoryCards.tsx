import Link from "next/link";
import ProductCard from "../ProductCard";

function SubcategoryCards() {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <Link href="/">
          <a>
            <h2 className="text-xl font-semibold inline-block hover:text-neutral-400">Subcategory</h2>
          </a>
        </Link>
        <Link href="/">
          <a className="mt-auto text-sm hover:text-neutral-400">View all ➤</a>
        </Link>
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <span className="contents md:hidden xl:contents">
          <ProductCard />
        </span>
      </div>
    </div>
  );
}
export default SubcategoryCards;
