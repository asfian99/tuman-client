import "../styles/globals.css";
import Head from "next/head";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Tuman | Tugas Management App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Layout>
        <div className="w-5/6 h-auto p-8 mb-8 mr-8 bg-white rounded-xl">
          <Component {...pageProps} />
        </div>
      </Layout>
    </>
  );
}

export default MyApp;
