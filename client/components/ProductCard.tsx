import Image from "next/image";
import Link from "next/link";

function ProductCard({ caption }: any) {
  return (
    <div>
      <div className="flex justify-center items-center rounded-t-md aspect-video bg-neutral-800">
        <div className="max-h-[70%] max-w-[70%] relative">
          <Image
            src={"/categoryLogos/react.png"}
            alt="Category image"
            width={1280}
            height={720}
          />
        </div>
      </div>
      <div className="bg-neutral-900 rounded-b-md py-2">
        <Link href="/">
          <a>
            <p className="text-sm ml-4 inline-block">{caption}</p>
          </a>
        </Link>
        <p className="ml-4 text-xs text-neutral-400">
          by
          <Link href="#">
            <a className="font-semibold hover:text-white"> user </a>
          </Link>
          in
          <Link href="#">
            <a className="font-semibold hover:text-white"> category </a>
          </Link>
        </p>
      </div>
    </div>
  );
}
export default ProductCard;
