import Image from 'next/image';
import Link from 'next/link';

function ProductCard({ caption, thumbnail, category, rating, id }: any) {
  const NUM_OF_IMAGE = 7;
  const img = `/sampleThumbnails/${Math.floor(
    Math.random() * NUM_OF_IMAGE
  )}.png`;

  return (
    <div>
      <Link href="/categories/category-name/product-name">
        <a>
          <div className="flex justify-center items-center aspect-video bg-neutral-800 hover:brightness-[75%]">
            <div className="h-full w-full relative">
              <Image src={img} alt="Category image" layout="fill" />
            </div>
          </div>
        </a>
      </Link>
      <div className="bg-neutral-900 rounded-b-md py-2">
        <Link href="/categories/category-name/product-name">
          <a>
            <p className="text-sm ml-4 inline-block hover:brightness-[60%]">
              {caption}
            </p>
          </a>
        </Link>
        <p className="ml-4 text-xs">
          <span>in </span>
          <Link href="/categories/category-name">
            <a>category</a>
          </Link>
        </p>
      </div>
    </div>
  );
}
export default ProductCard;
