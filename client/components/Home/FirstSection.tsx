import Image from "next/image";
import Searchbar from "./Searchbar";

function FirstSection() {
  return (
    <div className="bg-neutral-900">
      <div className="container py-12 lg:py-64 flex items-center justify-center lg:justify-between text-center lg:text-left flex-col lg:flex-row">
        <div className="max-w-2xl">
          <h1 className="text-3xl lg:text-5xl font-extrabold">
            Code, components, templates, and more for your website
          </h1>
          <h2 className="text-base mt-3 lg:mt-4 mb-5 text-neutral-300">
            Choose from neatly made code, components, templates, and more made
            using different languages and frameworks to use for your websites.
          </h2>
          <Searchbar />
        </div>
        <div className="relative h-96 aspect-square ml-9 hidden lg:inline-block">
          <Image src="/homepageImage.png" alt="Preview" layout="fill" />
        </div>
        <div className="relative w-full max-w-2xl mt-10 aspect-[1088/653] lg:hidden">
          <Image src="/homepageImage2.png" alt="Preview" layout="fill" />
        </div>
      </div>
    </div>
  );
}
export default FirstSection;
