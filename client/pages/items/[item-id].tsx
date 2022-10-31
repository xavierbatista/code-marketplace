import axios from 'axios';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import InfoBoxLargeScreen from '../../components/itemPage/InfoBoxLargeScreen';
import InfoBoxSmallScreen from '../../components/itemPage/InfoBoxSmallScreen';

function ItemPage() {
  const [item, setItem] = useState<any>();

  useEffect(() => {
    try {
      const getItem = async () => {
        const response = await axios.get(`items/${1}`);

        setItem(response.data);
      };

      getItem();
    } catch (error) {
      console.error(error);
    }
  }, []);

  const addToCart = async () => {
    try {
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main>
      {item && (
        <div className="page-center flex flex-col items-center">
          <div className="w-full flex flex-col lg:flex-row">
            <div className="w-full aspect-video relative lg:mr-8">
              <Image src={item.thumbnail} alt="Category image" layout="fill" />
            </div>
            <InfoBoxLargeScreen item={item} addToCart={addToCart} />
            <InfoBoxSmallScreen item={item} addToCart={addToCart} />
          </div>
          {item.description && (
            <div className="flex w-full">
              <div className="bg-neutral-900 p-4 rounded-md mt-4 w-full overflow-hidden">
                <div className="overflow-hidden">{item.description}</div>
              </div>
              {/* v This fixes styling v */}
              <div className="w-[22rem] flex-shrink-0 hidden lg:inline-block"></div>
            </div>
          )}
        </div>
      )}
    </main>
  );
}
export default ItemPage;
