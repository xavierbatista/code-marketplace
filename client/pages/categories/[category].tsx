// export async function getStaticPaths() {
//   //make some request
//   const paths = "idk";
//   return {
//     paths,
//     fallback: false, //makes you go to 404 page if the route is not found
//   };
// }

import SubcategoryCards from "../../components/Category/SubcategoryCards";

function Category() {
  return (
    <main>
      <div className="mx-auto pt-12 px-4 max-w-[90rem] flex">
        <h1 className="text-5xl font-bold mb-14">Category</h1>
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
