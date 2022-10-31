import Link from 'next/link';

function MenuItem({ children, link }: any) {
  return (
    <li>
      <Link href={link}>
        <a className="clickable-white">{children}</a>
      </Link>
    </li>
  );
}
export default MenuItem;
