import { useState } from 'react';
import CategoryCard from './CategoryCard';

function CategoryCards() {
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
    <section className="home-container">
      <div className="big-heading mb-8 text-center">
        Categories
      </div>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category, i) => {
          return <CategoryCard key={i} category={category} />;
        })}
      </div>
      {/* todo - make view all button*/}
    </section>
  );
}
export default CategoryCards;
