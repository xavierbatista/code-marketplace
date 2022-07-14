import Image from "next/image";
import Link from "next/link";
import MenuIcon from "../Icons/MenuIcon";
import Searchbar from "./Searchbar";

function Navbar() {
  return (
    <header className="sticky z-10 top-0 border-b border-b-white/10 bg-[#0e0e0e] backdrop-blur-lg bg-opacity-90">
      <nav className="flex justify-between items-center max-w-[90rem] mx-auto h-16 text-sm px-4">
        <Link href="/">
          <a className="flex justify-center items-center select-none">
            <div className="w-8 h-8 relative">
              <Image src="/logo.png" alt="Logo" layout="fill" />
            </div>
            <div className="hidden md:inline-block">
              <div className="text-xl ml-1 font-semibold leading-[1.1rem]">
                Code
              </div>
              <div className="text-xl ml-1 font-semibold leading-[1.1rem]">
                Marketplace
              </div>
            </div>
          </a>
        </Link>
        {/* <div className="hidden md:contents">
          <Searchbar />
        </div> */}
        <ul className="hidden md:flex items-center whitespace-nowrap space-x-8">
          <li>
            <Link href="/start-selling">
              <a className="hover:text-neutral-400">Start Selling</a>
            </Link>
          </li>
          {/* <li>
            <Link href='#'>
              <a className="hover:text-neutral-400">Account</a>
            </Link>
          </li> */}
          <li>
            <Link href="/sign-up">
              <a className="hover:text-neutral-400">Sign Up</a>
            </Link>
          </li>
          <li>
            <Link href="/sign-in">
              <a className="hover:text-neutral-400">Sign In</a>
            </Link>
          </li>
          <li>
            <div className="w-8">
              <Link href="#">
                <a>
                  <div className="w-7 h-6 relative">
                    <Image src="/cartIcon.webp" alt="Logo" layout="fill" />
                  </div>
                </a>
              </Link>
            </div>
          </li>
        </ul>
        <button className="md:hidden">
          <MenuIcon />
        </button>
      </nav>
      {/* <div className="md:hidden mb-3 flex justify-center align-middle">
        <Searchbar />
      </div> */}
    </header>
  );
}
export default Navbar;
