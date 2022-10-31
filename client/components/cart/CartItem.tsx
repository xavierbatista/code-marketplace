import Image from 'next/image';
import Link from 'next/link';
import formatPrice from '../../helpers/formatPrice';
import XIcon from '../icons/XIconCart';

function CartItem({ cartItem }: any) {
  const { name, thumbnail, price } = cartItem;

  return (
    <li className="bg-neutral-900 rounded-md h-fit flex">
      <Link href="/items/1">
        <a>
          <div className="h-20 sm:h-32 aspect-video relative clickable">
            <Image src={thumbnail} alt="Category image" layout="fill" />
          </div>
        </a>
      </Link>
      <div className="m-4 flex justify-between w-full">
        <Link href="/items/1">
          <a className="h-fit">
            <div className="clickable-white overflow-hidden">{name}</div>
          </a>
        </Link>
        <div className="flex justify-between flex-col items-end">
          <button className="clickable-white brightness-[80%]">
            <XIcon />
          </button>
          <div>{formatPrice(price)}</div>
        </div>
      </div>
    </li>
  );
}
export default CartItem;
