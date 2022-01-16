import Head from "next/head";
import Header from "./Header";

export default function Layout({ children, pageTitle }) {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>

      <Header />
      <main className="px-8 md:px-16 lg:px-24 xl:px-28">{children}</main>
    </>
  );
}
