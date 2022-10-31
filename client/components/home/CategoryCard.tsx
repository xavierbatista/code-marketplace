import Link from 'next/link';
import Image from 'next/image';

function CategoryCard({ category }: any) {
  const { link, img, name } = category;

  return (
    <Link href={link}>
      <a>
        <div className="flex justify-center items-center rounded-t-md aspect-video bg-neutral-800 clickable">
          <div className="max-h-[70%] max-w-[70%] h-full w-full relative">
            <Image src={img} alt="Category image" layout="fill" />
          </div>
        </div>
        <div className="bg-neutral-900 rounded-b-md py-2 flex justify-center">
          <p className="text-base clickable-white">{name}</p>
        </div>
      </a>
    </Link>
  );
}
export default CategoryCard;
