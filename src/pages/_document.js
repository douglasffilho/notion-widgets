import { Head, Html, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html>
      <Head>
        <link href="/styles.css" rel="stylesheet"></link>
      </Head>

      <body>
        <Main />
        <NextScript />
        <script src="/scripts.js"></script>
      </body>
    </Html>
  );
};

export default Document;
