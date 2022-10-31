import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import MenuIcon from '../icons/MenuIcon';
import MenuItem from './MenuItem';
import MobileMenu from './MobileMenu/MobileMenu';
import Searchbar from './Searchbar';

function Navbar({ navAndFooterHidden }: any) {
  const { user, loadingUser } = useAuth();
  const router = useRouter();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      {!navAndFooterHidden.has(router.pathname) && (
        <nav className="bg-[#0e0e0e] border-b border-b-white/10 backdrop-blur-lg bg-opacity-90 sticky z-10 top-0">
          <div className="flex justify-between items-center max-w-[90rem] mx-auto h-16 text-sm px-4">
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
            {!loadingUser && (
              <>
                <div className="hidden lg:contents">
                  <Searchbar />
                </div>
                <ul className="hidden lg:flex items-center whitespace-nowrap space-x-8">
                  <MenuItem link="/categories">Categories</MenuItem>
                  <MenuItem link="/start-selling">Start Selling</MenuItem>
                  {user ? (
                    <MenuItem link="/users/user-id">Account</MenuItem>
                  ) : (
                    <>
                      <MenuItem link="/sign-up">Sign Up</MenuItem>
                      <MenuItem link="/sign-in">Sign In</MenuItem>
                    </>
                  )}
                  <li>
                    <div className="w-8 clickable-white">
                      <Link href="/cart">
                        <a>
                          <div className="w-7 h-6 relative">
                            <Image
                              src="/cartIcon.webp"
                              alt="Logo"
                              layout="fill"
                            />
                          </div>
                        </a>
                      </Link>
                    </div>
                  </li>
                </ul>
              </>
            )}
            <button
              className="lg:hidden clickable-white"
              onClick={() => toggleMobileMenu()}
            >
              <MenuIcon />
            </button>
          </div>
          {isMobileMenuOpen && (
            <MobileMenu setIsMobileMenuOpen={setIsMobileMenuOpen} />
          )}
        </nav>
      )}
    </>
  );
}
export default Navbar;
