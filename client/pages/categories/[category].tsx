// export async function getStaticPaths() {
//   //make some request
//   const paths = "idk";
//   return {
//     paths,
//     fallback: false, //makes you go to 404 page if the route is not found
//   };
// }

import SubcategoryPreview from "../../components/Category/SubcategoryPreview";
import SubcategoriesList from "../../components/Category/SubcategoriesList";

function Category() {
  return (
    <main>
      <h1 className="text-4xl lg:text-5xl mx-auto py-8 px-4 max-w-[90rem] font-bold">
        Category
      </h1>
      <SubcategoriesList />
      <SubcategoryPreview />
      <SubcategoryPreview />
      <SubcategoryPreview />
      <SubcategoryPreview />
      <SubcategoryPreview />
    </main>
  );
}
export default Category;
