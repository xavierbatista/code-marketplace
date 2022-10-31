import formatPrice from '../../helpers/formatPrice';

function InfoBoxSmallScreen({ item, addToCart }: any) {
  const { name, creatorId, price } = item;

  return (
    <div className="bg-neutral-900 p-4 flex flex-col justify-between w-full h-fit flex-shrink-0 rounded-md lg:hidden mt-4">
      <div>
        <h1 className="med-heading overflow-hidden">{name}</h1>
        <div className="overflow-hidden">{creatorId}</div>
        <div>{formatPrice(price)}</div>
      </div>
      <button
        className="bg-red-600 h-14 flex-shrink-0 rounded-md clickable mt-4"
        onClick={() => addToCart()}
      >
        Add to cart
      </button>
    </div>
  );
}
export default InfoBoxSmallScreen;
