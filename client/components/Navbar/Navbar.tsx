import Image from 'next/image';
import Link from 'next/link';
import MenuIcon from '../Icons/MenuIcon';
import Searchbar from './Searchbar';

function Navbar() {
  return (
    <nav className="flex justify-between items-center max-w-[90rem] mx-auto h-16 text-sm px-4 sticky z-10 top-0 border-b border-b-white/10 bg-[#0e0e0e] backdrop-blur-lg bg-opacity-90">
      <Link href="/">
        <a className="flex justify-center items-center select-none">
          <div className="w-8 h-8 relative">
            <Image src="/logo.png" alt="Logo" layout="fill" />
          </div>
          <div className="hidden lg:inline-block">
            <div className="text-xl ml-1 font-semibold leading-[1.1rem]">
              Code
            </div>
            <div className="text-xl ml-1 font-semibold leading-[1.1rem]">
              Marketplace
            </div>
          </div>
        </a>
      </Link>
      <div className="hidden lg:contents">
        <Searchbar />
      </div>
      <ul className="hidden lg:flex items-center whitespace-nowrap space-x-8">
        <li>
          <Link href="/start-selling">
            <a className="hover:brightness-[60%]">Start Selling</a>
          </Link>
        </li>
        {/* <li>
            <Link href='#'>
              <a className="hover:brightness-[60%]">Account</a>
            </Link>
          </li> */}
        <li>
          <Link href="/sign-up">
            <a className="hover:brightness-[60%]">Sign Up</a>
          </Link>
        </li>
        <li>
          <Link href="/sign-in">
            <a className="hover:brightness-[60%]">Sign In</a>
          </Link>
        </li>
        <li>
          <div className="w-8 hover:brightness-[60%]">
            <Link href="/cart">
              <a>
                <div className="w-7 h-6 relative">
                  <Image src="/cartIcon.webp" alt="Logo" layout="fill" />
                </div>
              </a>
            </Link>
          </div>
        </li>
      </ul>
      <button className="lg:hidden hover:brightness-[60%]">
        <MenuIcon />
      </button>
    </nav>
  );
}
export default Navbar;
