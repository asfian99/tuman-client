import "../styles/globals.css";
import Head from "next/head";
import NProgress from "nprogress";
import { QueryClient, QueryClientProvider } from "react-query";
import Router, { useRouter } from "next/router";
import Layout from "../components/Layout";
import HTMLHead from "../components/HTMLHead";

const queryClient = new QueryClient();

Router.events.on("routeChangeStart", (url: string) => {
  console.log(`Loading: ${url}`);
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();

  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
}

export default MyApp;
