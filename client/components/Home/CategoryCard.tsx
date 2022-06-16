import Link from "next/link";
import Image from "next/image";

function CategoryCard({ caption, img, href }: any) {
  return (
    <Link href={href || '#'}>
      <a>
        <div className="flex justify-center items-center rounded-t-md aspect-video bg-neutral-800">
          <div className="max-h-[70%] max-w-[70%]">
            <Image
              src={img || "/categoryLogos/react.png"}
              alt="Category image"
              width={1280}
              height={720}
            />
          </div>
        </div>
        <div className="bg-neutral-900 rounded-b-md py-2 flex justify-center">
          <p className="text-base">{caption}</p>
        </div>
      </a>
    </Link>
  );
}
export default CategoryCard;
