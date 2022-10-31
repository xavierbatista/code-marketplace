import Link from 'next/link';

function Custom404() {
  return (
    <main className="page-center flex flex-col items-center">
      <h1 className="big-heading text-center">
        Sorry, that page doesn&apos;t exist.
      </h1>
      <Link href="/">
        <a className="mt-4 clickable-white">Home</a>
      </Link>
    </main>
  );
}
export default Custom404;
