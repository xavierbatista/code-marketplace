import Link from "next/link";

function Custom404() {
  return (
    <>
      <h1>Sorry, that page doesnt exist.</h1>
      <Link href="/">
        <a>Home</a>
      </Link>
    </>
  );
}
export default Custom404;
