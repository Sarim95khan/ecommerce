import Head from "next/head";
import Link from "next/link";

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? title + "- S.Korp" : "S.Korp"}</title>
        <meta
          name="Buy your favourite item for your need"
          content="S.Korp Ecommerce Website"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col justify-between min-h-screen">
        {/* Header */}
        <header>
          <nav className="flex justify-between h-12 shadow-md px-4 bg-white items-center">
            <Link className="text-2xl font-bold" href="/">
              S.Korp
            </Link>
            <div className="space-x-2">
              <Link href="/cart">Cart</Link>
              <Link href="/login">Login</Link>
            </div>
          </nav>
        </header>
        {/* Main */}
        <main className="container  m-auto mt-4 px-4">{children}</main>
        {/* Footer */}
        <footer className="flex justify-center items-center h-12 shadow-inner">
          Copyright 2023 S.Korp
        </footer>
      </div>
    </>
  );
}
