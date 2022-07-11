import Image from "next/image";
import Link from "next/link";

function ProductCard({ caption }: any) {
  const NUM_OF_IMAGE = 7;
  const img = `/sampleThumbnails/${Math.floor(
    Math.random() * NUM_OF_IMAGE
  )}.png`;

  return (
    <div>
      <Link href="#">
        <a>
          <div className="flex justify-center items-center aspect-video bg-neutral-800">
            <div className="h-full w-full relative">
              <Image src={img} alt="Category image" layout="fill" />
            </div>
          </div>
        </a>
      </Link>
      <div className="bg-neutral-900 rounded-b-md py-2">
        <Link href="#">
          <a>
            <p className="text-sm ml-4 inline-block">{caption}</p>
          </a>
        </Link>
        <p className="ml-4 text-xs text-neutral-400">
          by
          <Link href="#">
            <a className="font-semibold"> user </a>
          </Link>
          in
          <Link href="#">
            <a className="font-semibold"> category </a>
          </Link>
        </p>
      </div>
    </div>
  );
}
export default ProductCard;
