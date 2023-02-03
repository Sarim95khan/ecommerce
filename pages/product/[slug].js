import { useRouter } from "next/router";
import React from "react";
import Layout from "../../components/Layout";
import data from "../../utlis/data";
import Link from "next/link";
import Image from "next/image";

export default function ProductScreen() {
  const { query } = useRouter();
  const { slug } = query;
  const product = data.products.find((x) => x.slug === slug);
  if (!product) {
    return <div>Product Not Found</div>;
  }

  return (
    <Layout title={product.name}>
      <div>
        <Link href="/"> back to product</Link>
      </div>

      <div className="grid md:grid-cols-4 md:gap-4">
        <div className="md:col-span-2">
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
            layout="responsive"
          ></Image>
        </div>
        <div>
          <ul>
            <li>
              <h1 className="text-2xl">Product Name: {product.name}</h1>
            </li>
            <li>
              <p className="">Category: {product.category}</p>
            </li>
            <li>
              <p className="">Brand: {product.brand}</p>
            </li>
            <li>
              <p className="">
                {product.rating} of{product.numReviews}
              </p>
            </li>
            <li>
              <p className="">Description : {product.description}</p>
            </li>
          </ul>
        </div>
        <div className="card p-5 ">
          <div className="flex justify-between mb-2">
            <div>Price </div>
            <div>{product.price}</div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
