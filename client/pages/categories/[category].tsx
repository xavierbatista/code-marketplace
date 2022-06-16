// export async function getStaticPaths() {
//   //make some request
//   const paths = "idk";
//   return {
//     paths,
//     fallback: false, //makes you go to 404 page if the route is not found
//   };
// }

import Link from "next/link";
import { useState } from "react";
import SubcategoryCards from "../../components/Category/SubcategoryCards";

function Category() {
  const [subcategories, setSubcategories] = useState<any>([
    "Template",
    "Game",
    "Other subcategory",
    "Other subcategory",
    "Other subcategory",
    "Other subcategory",
  ]);

  return (
    <main>
      <div className="mx-auto py-12 px-4 max-w-[90rem]">
        <h1 className="text-5xl font-bold">Category</h1>
      </div>
      <div className="mx-auto max-w-[90rem] pb-6 px-4">
        <h2 className="text-xl font-semibold mb-2">Categories in Category</h2>

        <ul className="py-12 px-4 bg-neutral-900 rounded-md grid grid-cols-6 text-sm gap-4 whitespace-nowrap">
          {subcategories.map((category: any, i: any) => {
            return (
              <li key={i}>
                <Link href="#">
                  <a className="rounded-md overflow-hidden h-10 flex justify-center bg-neutral-800">
                    <p className="my-auto">{category}</p>
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="mx-auto max-w-[90rem] px-4 pt-0">
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
