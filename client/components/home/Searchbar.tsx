import Link from 'next/link';

//HOMEPAGE SEARCHBAR
function Searchbar() {
  return (
    <form className="text-black text-base flex justify-center items-center w-full my-8 lg:mt-10">
      <input
        type="text"
        placeholder="e.g. HTML template"
        className="w-full h-14 px-5 rounded-l-md rounded-r-none"
      />
      <Link href="/search">
        <a>
          <button className="bg-red-600 rounded-r-md flex items-center justify-center px-9 lg:px-12 clickable">
            <div className="flex items-center justify-center h-14">
              <div>Search</div>
            </div>
          </button>
        </a>
      </Link>
    </form>
  );
}
export default Searchbar;
