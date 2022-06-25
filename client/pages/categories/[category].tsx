// export async function getStaticPaths() {
//   //make some request
//   const paths = "idk";
//   return {
//     paths,
//     fallback: false, //makes you go to 404 page if the route is not found
//   };
// }

import { useState } from "react";
import Link from "next/link";
import SubcategoryCards from "../../components/Category/SubcategoryCards";

function Category() {
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
    <main>
      <div className="mx-auto py-8 px-4 max-w-[90rem]">
        <h1 className="text-5xl font-bold">Category</h1>
      </div>
      <div className="mx-auto max-w-[90rem] py-8 px-4">
        <h2 className="text-xl font-semibold mb-2">Categories in Category</h2>
        <ul className="p-4 bg-neutral-900 rounded-md grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 text-sm gap-2 whitespace-nowrap max-h-64 overflow-y-auto">
          {subcategories.map((category, i) => {
            return (
              <li key={i}>
                <Link href="#">
                  <a className="rounded-md overflow-hidden h-12 flex justify-center bg-neutral-800">
                    <p className="my-auto">{category}</p>
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="mx-auto max-w-[90rem] py-8 px-4">
        <div className="flex flex-col space-y-16">
          <SubcategoryCards />
          <SubcategoryCards />
          <SubcategoryCards />
          <SubcategoryCards />
          <SubcategoryCards />
        </div>
      </div>
    </main>
  );
}
export default Category;
