import Link from "next/link";
import { useState } from "react";

function SubcategoriesList() {
  const [subcategories, setSubcategories] = useState([
    "Template",
    "Game",
    "Other subcategory",
    "Other subcategory",
    "Other subcategory",
    "Other subcategory",
    "Other subcategory",
    "Other subcategory",
    "Other subcategory",
    "Other subcategory",
    "Other subcategory",
    "Other subcategory",
    "Other subcategory",
    "Other subcategory",
    "Other subcategory",
    "Other subcategory",
    "Other subcategory",
    "Other subcategory",
    "Other subcategory",
    "Other subcategory",
    "Other subcategory",
    "Other subcategory",
    "Other subcategory",
    "Other subcategory",
    "Other subcategory",
    "Other subcategory",
    "Other subcategory",
    "Other subcategory",
    "Other subcategory",
  ]);

  return (
    <section className="mx-auto max-w-[90rem] py-8 px-4">
      <h2 className="text-xl font-semibold mb-2">Categories in Category</h2>
      <ul className="p-4 bg-neutral-900 rounded-md grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 text-sm gap-2 whitespace-nowrap max-h-64 overflow-y-auto">
        {subcategories.map((category, i) => {
          return (
            <li key={i}>
              <Link href="#">
                <a className="rounded-md overflow-hidden h-12 flex justify-center bg-neutral-700">
                  <p className="my-auto">{category}</p>
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
export default SubcategoriesList;
