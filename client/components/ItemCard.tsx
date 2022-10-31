import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import formatPrice from '../helpers/formatPrice';

function ItemCard({ itemCard }: any) {
  const { id, name, thumbnail, category, price } = itemCard;
  const router = useRouter();

  return (
    <div>
      <Link href={`/items/${id}`}>
        <a>
          <div className="flex justify-center items-center aspect-video bg-neutral-800 clickable">
            <div className="h-full w-full relative">
              <Image src={thumbnail} alt="Category image" layout="fill" />
            </div>
          </div>
        </a>
      </Link>
      <div
        className="bg-neutral-900 rounded-b-md py-2 px-4 cursor-pointer"
        onClick={(e) => {
          if (e.target !== e.currentTarget) return;
          router.push(`/items/${id}`);
        }}
      >
        <div className="overflow-hidden w-fit max-w-full">
          <Link href={`/items/${id}`}>
            <a>
              <p className="text-sm bg-red inline-block clickable-white whitespace-nowrap max-w-full">
                {name}
              </p>
            </a>
          </Link>
        </div>
        <div className="flex justify-between pointer-events-none">
          <p className="text-xs pointer-events-auto">
            <span className="cursor-default">in </span>
            <Link href={`/categories/${category}`}>
              <a className="clickable-white">{category}</a>
            </Link>
          </p>
          <div className="text-xs cursor-default pointer-events-auto">
            {formatPrice(price)}
          </div>
        </div>
      </div>
    </div>
  );
}
export default ItemCard;
