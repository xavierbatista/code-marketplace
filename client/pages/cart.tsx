import axios from 'axios';
import { useEffect, useState } from 'react';
import CartItem from '../components/cart/CartItem';
import CheckoutBoxLargeScreen from '../components/cart/CheckoutBoxLargeScreen';
import CheckoutBoxSmallScreen from '../components/cart/CheckoutBoxSmallScreen';

function Cart() {
  const [cart, setCart] = useState<any>({});

  useEffect(() => {
    try {
      const getCart = async () => {
        const response = await axios.get(`cart/`);

        setCart(response.data);
      };

      getCart();
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <main className="page-center">
      <h1 className="big-heading mx-auto max-w-[90rem] pb-8">Cart</h1>
      {cart?.cartItems?.length === 0 ? (
        <div>Your cart is empty.</div>
      ) : (
        <div className="mx-auto max-w-[90rem] flex flex-col lg:flex-row">
          <ul className="grid space-y-4 rounded-md w-full mr-8 h-fit">
            {cart?.cartItems?.map((cartItem: any, id: any) => {
              return <CartItem key={id} cartItem={cartItem} />;
            })}
          </ul>
          <CheckoutBoxLargeScreen total={0} />
          <CheckoutBoxSmallScreen total={0} />
        </div>
      )}
    </main>
  );
}
export default Cart;
