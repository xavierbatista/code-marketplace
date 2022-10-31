import '../styles/globals.css';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { AuthContextProvider } from '../context/AuthContext';
import ProtectedRoute from '../components/ProtectedRoute';
import axios from 'axios';

function MyApp({ Component, pageProps }: any) {
  const router = useRouter();
  const navAndFooterHidden = new Set(['/sign-in', '/sign-up']);
  const authRequired = new Set(['/users/[user-id]']);

  const onDevEnvironment = process.env.NODE_ENV == 'development';
  axios.defaults.baseURL = onDevEnvironment
    ? 'http://localhost:5000/'
    : 'https://airieytpud.us-east-2.awsapprunner.com/';

  return (
    <AuthContextProvider>
      <Head>
        <meta
          name="description"
          content="An online marketplace for developers to buy and sell code."
        />
        <title>Code Marketplace</title>
      </Head>
      <Navbar navAndFooterHidden={navAndFooterHidden} />
      {authRequired.has(router.pathname) ? (
        <ProtectedRoute>
          <Component {...pageProps} />
        </ProtectedRoute>
      ) : (
        <Component {...pageProps} />
      )}
      <Footer />
    </AuthContextProvider>
  );
}

export default MyApp;
