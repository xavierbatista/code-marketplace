import '../styles/globals.css';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Head from 'next/head';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: any) {
  const router = useRouter();
  const showHeader =
    router.pathname === '/sign-in' || router.pathname === '/sign-up'
      ? false
      : true;

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta http-httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="" />
        <title>Code Marketplace</title>
      </Head>
      {showHeader && <Navbar />}
      {/* move this logic inside the navbar */}
      <Component {...pageProps} />
      {showHeader && <Footer />}
      {/* move this logic inside the footer */}
    </>
  );
}

export default MyApp;
