import "../styles/globals.css";
import Head from "next/head";
import NProgress from "nprogress";
import Router, { useRouter } from "next/router";
import Layout from "../components/Layout";
import HTMLHead from "../components/HTMLHead";

Router.events.on("routeChangeStart", (url: string) => {
  console.log(`Loading: ${url}`);
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();

  return (
    <>
      <Head>
        <HTMLHead />
      </Head>

      {pathname === "/login" || pathname === "/register" ? (
        <Component {...pageProps} />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </>
  );
}

export default MyApp;
