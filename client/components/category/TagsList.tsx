import Link from 'next/link';

function TagsList({ tagList }: any) {
  return (
    <section className="pb-8">
      <div className="med-heading mb-2">Tags</div>
      <ul className="text-sm p-4 bg-neutral-900 rounded-md grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 whitespace-nowrap max-h-64 overflow-y-auto">
        {tagList?.map((tag: any, i: any) => {
          return (
            <li key={i}>
              <Link href="/search">
                <a className="rounded-md overflow-hidden h-12 flex justify-center bg-neutral-700 clickable p-2">
                  <p className="my-auto overflow-hidden">{tag}</p>
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
export default TagsList;
