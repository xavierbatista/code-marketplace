import formatPrice from '../../helpers/formatPrice';

function InfoBoxLargeScreen({ item, addToCart }: any) {
  const { name, creatorId, price } = item;

  return (
    <div className="bg-neutral-900 p-4 hidden lg:flex flex-col justify-between w-80 max-h-96 flex-shrink-0 rounded-md">
      <div>
        <h1 className="med-heading overflow-hidden">{name}</h1>
        <div className="overflow-hidden">{creatorId}</div>
        <div>{formatPrice(price)}</div>
      </div>
      <button
        className="bg-red-600 h-14 flex-shrink-0 rounded-md clickable"
        onClick={() => addToCart()}
      >
        Add to cart
      </button>
    </div>
  );
}
export default InfoBoxLargeScreen;
