import Link from 'next/link';

function MenuItem({ name, link }: any) {
  return (
    <li className="h-16 bg-neutral-800 flex items-center justify-center clickable-white border-b border-neutral-700">
      <Link href={link}>
        <a className="h-full w-full flex items-center justify-center">
          <div>{name}</div>
        </a>
      </Link>
    </li>
  );
}
export default MenuItem;
