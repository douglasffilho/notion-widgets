import MobileNavbar from 'components/MobileNavbar';
import Head from 'next/head';
import { usePathname } from 'next/navigation';

const MyApp = ({ Component, pageProps }) => {
  const path = usePathname();

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {path === '/linktree' ? '' : <MobileNavbar />}
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
