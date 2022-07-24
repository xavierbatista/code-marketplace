import Image from "next/image";
import Link from "next/link";

function StartSelling() {
  return (
    <main>
      <section className="bg-neutral-900">
        <div className="container py-12 lg:py-56 flex items-center justify-center lg:justify-between text-center lg:text-left flex-col lg:flex-row">
          <div className="max-w-2xl flex flex-col items-center lg:items-start">
            <h1 className="text-3xl lg:text-5xl font-extrabold">
              Code, upload, start selling
            </h1>
            <h2 className="text-base my-3 lg:my-4 text-neutral-300">
              Made a cool project, library, or template that you wanna sell? This is the place to do it.
            </h2>
            <Link href="#">
              <a className="bg-red-600 rounded-md h-14 w-full my-6 lg:mt-10 flex items-center justify-center hover:brightness-[75%]">
                <p>Start selling</p>
              </a>
            </Link>
          </div>
          <div className="relative h-96 aspect-square ml-9 hidden lg:inline-block">
            <Image src="/homepageImage.png" alt="Preview" layout="fill" />
          </div>
          <div className="relative w-full max-w-2xl mt-3 aspect-[1088/653] lg:hidden">
            <Image src="/homepageImage2.png" alt="Preview" layout="fill" />
          </div>
        </div>
      </section>
    </main>
  );
}
export default StartSelling;
