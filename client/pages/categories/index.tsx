import { useState } from 'react';
import CategoryCard from '../../components/home/CategoryCard';

function Categories() {
  const [categories, setCategories] = useState([
    {
      name: 'HTML & CSS',
      img: '/categoryLogos/html.png',
      link: '/categories/html-css',
    },
    {
      name: 'JavaScript',
      img: '/categoryLogos/js.png',
      link: '/categories/javascript',
    },
    {
      name: 'TypeScript',
      img: '/categoryLogos/ts.png',
      link: '/categories/typescript',
    },
    {
      name: 'React',
      img: '/categoryLogos/react.png',
      link: '/categories/react',
    },
    {
      name: 'Vue',
      img: '/categoryLogos/vue.png',
      link: '/categories/vue',
    },
    {
      name: 'Angular',
      img: '/categoryLogos/angular.png',
      link: '/categories/angular',
    },
  ]);

  return (
    <main className="page-center">
      <h1 className="big-heading mx-auto max-w-[90rem] pb-8">Categories</h1>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category, i) => {
          return <CategoryCard key={i} category={category} />;
        })}
      </div>
    </main>
  );
}
export default Categories;
