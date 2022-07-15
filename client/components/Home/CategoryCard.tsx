import Link from "next/link";
import Image from "next/image";

function CategoryCard({ caption, img, href }: any) {
  return (
    <Link href={href || "#"}>
      <a>
        <div className="flex justify-center items-center rounded-t-md aspect-video bg-neutral-800 hover:brightness-[75%]">
          <div className="max-h-[70%] max-w-[70%] h-full w-full relative">
            <Image
              src={img || "/categoryLogos/react.png"}
              alt="Category image"
              layout="fill"
            />
          </div>
        </div>
        <div className="bg-neutral-900 rounded-b-md py-2 flex justify-center">
          <p className="text-base hover:brightness-[60%]">{caption}</p>
        </div>
      </a>
    </Link>
  );
}
export default CategoryCard;
