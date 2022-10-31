import { useAuth } from '../../../context/AuthContext';
import MenuItem from './MenuItem';

function MobileMenu({ setIsMobileMenuOpen }: any) {
  const { user, loadingUser } = useAuth();
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <ul
      className="sticky top-16 z-10 bg-neutral-600 w-full h-fit text-sm lg:hidden"
      onClick={() => closeMobileMenu()}
    >
      {!loadingUser && (
        <>
          <MenuItem name="Categories" link="/categories" />
          <MenuItem name="Start selling" link="/start-selling" />
          {user ? (
            <MenuItem name="Account" link="/users/user-id" />
          ) : (
            <>
              <MenuItem name="Sign in" link="/sign-in" />
              <MenuItem name="Sign up" link="/sign-up" />
            </>
          )}
          <MenuItem name="Cart" link="/cart" />
        </>
      )}
    </ul>
  );
}
export default MobileMenu;
