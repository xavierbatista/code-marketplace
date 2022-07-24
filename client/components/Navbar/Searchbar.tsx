//NAVBAR SEARCHBAR
import Image from 'next/image';
import { useRouter } from 'next/router';

function Searchbar() {
  const router = useRouter();
  const pagesWithoutSearchbar = new Set(['/', '/cart', '/start-selling']);
  const display = !pagesWithoutSearchbar.has(router.pathname);

  return (
    <>
      {display && (
        <form
          action=""
          className="text-black text-sm flex justify-center items-center w-full px-4 lg:px-8"
        >
          <input
            type="text"
            placeholder=""
            className="w-full h-10 px-5 rounded-l-md border-r-neutral-200 border"
          />
          <button className="bg-gray-100 h-full rounded-r-md px-4 flex items-center justify-center">
            <div className="w-8 flex items-center justify-center h-10">
              <Image src="/searchIcon.png" alt="Logo" width={18} height={18} />
            </div>
          </button>
        </form>
      )}
    </>
  );
}
export default Searchbar;
