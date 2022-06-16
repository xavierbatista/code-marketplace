import Image from "next/image";
import Link from "next/link";
import Searchbar from "./Searchbar";

function Navbar() {
  return (
    <header className="sticky z-10 top-0 border-b border-b-white/10 bg-[#0e0e0e] backdrop-blur-lg bg-opacity-90">
      <nav className="flex justify-between items-center max-w-[90rem] mx-auto h-16 text-sm px-4">
        <Link href="/">
          <a className="flex justify-center items-center">
            <div className="w-8">
              <Image src="/logo.png" alt="Logo" width={32} height={32} />
            </div>
            <div className="hidden sm:inline-block">
              <div className="text-xl ml-1 font-semibold leading-[1.1rem]">
                Code
              </div>
              <div className="text-xl ml-1 font-semibold leading-[1.1rem]">
                Marketplace
              </div>
            </div>
          </a>
        </Link>
        {/* <div className="hidden lg:contents">
          <Searchbar />
        </div> */}
        <ul className="hidden sm:flex items-center whitespace-nowrap space-x-8">
          <li>
            <Link href="#">
              <a className="hover:text-neutral-400">Start Selling</a>
            </Link>
          </li>
          {/* <li>
            <Link href='#'>
              <a className="hover:text-neutral-400">Account</a>
            </Link>
          </li> */}
          <li>
            <Link href="#">
              <a className="hover:text-neutral-400">Sign Up</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a className="hover:text-neutral-400">Sign In</a>
            </Link>
          </li>
          <li>
            <div className="w-8">
              <Link href="#">
                <a className="p-0 flex justify-center items-center">
                  <Image
                    src="/cartIcon.png"
                    alt="Logo"
                    width={25}
                    height={25}
                  />
                </a>
              </Link>
            </div>
          </li>
        </ul>
        <button className="sm:hidden flex justify-center items-center">
          <Image src="/menuIcon.png" alt="Logo" width={25} height={20} />
        </button>
      </nav>
      {/* <div className="lg:hidden mb-3 flex justify-center align-middle">
        <Searchbar />
      </div> */}
    </header>
  );
}
export default Navbar;
