import Image from 'next/image';
import { useAuth } from '../../context/AuthContext';
import Searchbar from './Searchbar';

function FirstSection() {
  const { logToken } = useAuth();

  return (
    <section className="bg-neutral-900" onClick={() => logToken()}>
      {/* delete the onClick later */}
      <div className="max-w-[90rem] mx-auto px-4 py-16 pt-8 sm:pt-16 lg:h-[57rem] flex items-center justify-center lg:justify-between lg:text-left flex-col lg:flex-row">
        <div className="max-w-2xl flex flex-col items-center lg:items-start text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-extrabold">
            Finish your project faster
          </h1>
          <h2 className="text-base mt-2 lg:mt-4 text-neutral-300 max-w-lg lg:max-w-none">
            Choose from neatly made code, components, templates, and more made
            using different languages and frameworks to use for your websites
          </h2>
          <Searchbar />
        </div>
        <div className="relative h-96 aspect-square ml-9 hidden lg:inline-block">
          <Image src="/homepageImage.png" alt="Preview" layout="fill" />
        </div>
        <div className="relative w-full max-w-2xl aspect-[1088/653] lg:hidden">
          <Image src="/homepageImage2.png" alt="Preview" layout="fill" />
        </div>
      </div>
    </section>
  );
}
export default FirstSection;
