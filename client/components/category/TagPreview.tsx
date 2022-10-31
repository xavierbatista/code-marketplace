import Link from 'next/link';
import ArrowRight from '../icons/ArrowRight';
import ItemCard from '../ItemCard';

function TagPreview({ tag }: any) {
  const { name, itemCards } = tag;

  return (
    <section className="py-8">
      <div className="flex justify-between mb-2">
        <Link href="/search">
          <a>
            <div className="med-heading inline-block">{name}</div>
          </a>
        </Link>
        <Link href="/search">
          <a>
            <div className="clickable-white">
              <span>View all </span>
              <ArrowRight />
            </div>
          </a>
        </Link>
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {itemCards.map((itemCard: any, i: any) => {
          if (i < 3) return <ItemCard itemCard={itemCard} key={i} />;
          else if (i === 3)
            return (
              <span className="contents md:hidden xl:contents" key={i}>
                <ItemCard itemCard={itemCard} />
              </span>
            );
          else return;
        })}
      </div>
    </section>
  );
}
export default TagPreview;
