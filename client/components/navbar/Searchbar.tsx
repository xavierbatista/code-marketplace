//NAVBAR SEARCHBAR
import Link from 'next/link';
import { useRouter } from 'next/router';
import SearchIcon from '../icons/SearchIcon';

function Searchbar() {
  const router = useRouter();
  const pagesWithoutSearchbar = new Set([
    '/',
    '/cart',
    '/start-selling',
    '/reset-password',
    '/my-purchases',
    '/users/user-id',
  ]);
  const display = !pagesWithoutSearchbar.has(router.pathname);

  return (
    <>
      {display && (
        <form
          action=""
          className="text-black text-sm flex justify-center items-center w-full mx-8 h-10"
        >
          <input
            type="text"
            placeholder="Search"
            className="w-full h-full px-4 rounded-l-md rounded-r-none border-r-neutral-200 border"
          />
          <Link href="/search">
            <a className="bg-red-600 h-full rounded-r-md px-8 flex items-center justify-center clickable">
              <SearchIcon />
            </a>
          </Link>
        </form>
      )}
    </>
  );
}
export default Searchbar;
