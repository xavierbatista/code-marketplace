import "../styles/globals.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";

function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta http-httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="" />
        <title>Code Marketplace</title>
      </Head>
      <Navbar />
      <Component {...pageProps} /> {/* The main webpage */}
      <Footer />
    </>
  );
}

export default MyApp;
