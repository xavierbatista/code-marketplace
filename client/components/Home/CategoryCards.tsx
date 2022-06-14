import CategoryCard from "./CategoryCard";

function CategoryCards() {
  return (
    <div className="container">
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <CategoryCard
          caption="HTML & CSS"
          img="/categoryLogos/html.png"
          href="/categories/html-css"
        />
        <CategoryCard
          caption="JavaScript"
          img="/categoryLogos/js.png"
          href="/categories/javascript"
        />
        <CategoryCard
          caption="TypeScript"
          img="/categoryLogos/ts.png"
          href="/categories/typescript"
        />
        <CategoryCard
          caption="React"
          img="/categoryLogos/react.png"
          href="/categories/react"
        />
        <CategoryCard caption="Vue" img="/categoryLogos/vue.png" href="/categories/vue" />
        <CategoryCard
          caption="Angular"
          img="/categoryLogos/angular.png"
          href="/categories/angular"
        />
      </div>
      {/* <div className="pt-4 flex justify-center">
        <Link href="/categories">
          <a className="px-9 lg:px-12 py-4 text-sm inline-block bg-neutral-800 rounded-md">
            View all categories
          </a>
        </Link>
      </div> */}
    </div>
  );
}
export default CategoryCards;
