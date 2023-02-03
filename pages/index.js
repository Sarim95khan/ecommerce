import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Layout from "../components/Layout";
import data from "../utlis/data";
import ProductItems from "../components/ProductItems";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main>
        <Layout title="Home Page">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {data.products.map((product) => (
              <ProductItems key={product.slug} product={product} />
            ))}
          </div>
        </Layout>
      </main>
    </>
  );
}
