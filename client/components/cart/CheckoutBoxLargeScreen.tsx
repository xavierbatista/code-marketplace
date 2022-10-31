import formatPrice from '../../helpers/formatPrice';

function CheckoutBoxLargeScreen({ total }: any) {
  return (
    <div className="w-80 flex-shrink-0 bg-neutral-900 rounded-md hidden lg:flex flex-col items-center justify-between h-fit p-4">
      <div>
        <div className="med-heading">Total</div>
        <div className="text-center">{formatPrice(total)}</div>
      </div>
      <button className="h-14 w-full rounded-md bg-red-600 mt-2 clickable">
        Checkout
      </button>
    </div>
  );
}
export default CheckoutBoxLargeScreen;
