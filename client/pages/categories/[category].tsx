import TagPreview from '../../components/category/TagPreview';
import TagsList from '../../components/category/TagsList';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

function Category() {
  const [category, setCategory] = useState<any>();
  const router = useRouter();

  useEffect(() => {
    try {
      const getCategory = async () => {
        const response = await axios.get(`categories/category-name`);

        setCategory(response.data);
      };

      getCategory();
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <main className="page-center">
      <h1 className="big-heading pb-8">{router.query.category}</h1>
      <TagsList tagList={category?.tagList} />
      {category?.tags?.map((tag: any, i: any) => {
        return <TagPreview tag={tag} key={i} />;
      })}
    </main>
  );
}
export default Category;
