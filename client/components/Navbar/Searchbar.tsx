//NAVBAR SEARCHBAR
import Image from "next/image";

function Searchbar() {
  return (
    <form
      action=""
      className="text-black text-sm flex justify-center items-center w-full px-4 lg:px-8"
    >
      <input
        type="text"
        placeholder="e.g. HTML template"
        className="w-full h-10 pl-5 rounded-l-full border-r-neutral-200 border"
      />
      <button className="bg-gray-100 h-full rounded-r-full px-4 flex items-center justify-center">
        <div className="w-8 flex items-center justify-center h-10">
          <Image src="/searchIcon.png" alt="Logo" width={18} height={18} />
        </div>
      </button>
    </form>
  );
}
export default Searchbar;
