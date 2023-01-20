import { useEffect, useState } from 'react';
import ArrowDown from '../components/icons/ArrowDown';
import ItemCard from '../components/ItemCard';
import axios from 'axios';

function Search() {
  const [itemCards, setItemCards] = useState([]);

  useEffect(() => {
    try {
      const getSearchResults = async () => {
        const res = await axios.get('search/');
        setItemCards(res.data);
      };

      getSearchResults();
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <main className="page-center py-8">
      <div className="pb-2 flex justify-between">
        <div className="med-heading hidden xl:inline-block">Filters</div>
        <button className="xl:hidden clickable-white">
          <span>Filters </span>
          <ArrowDown />
        </button>
        <button className="clickable-white">
          <span>Sort by </span>
          <ArrowDown />
        </button>
      </div>
      <div className="flex">
        <aside className="w-52 h-[49rem] shrink-0 bg-neutral-900 mr-8 rounded-md p-4 hidden xl:inline-block"></aside>
        <div className="w-full">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {itemCards.map((itemCard, i) => (
              <ItemCard key={i} itemCard={itemCard} />
            ))}
          </div>
          {/* <div className="pt-4 flex justify-center">
            <button className="mx-2 clickable-white">1</button>
            <button className="mx-2 clickable-white">2</button>
            <button className="mx-2 clickable-white">3</button>
          </div> */}
        </div>
      </div>
    </main>
  );
}

export default Search;
