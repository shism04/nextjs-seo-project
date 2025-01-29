import { delay } from "@/lib/utils";
import { ProductsResponse } from "@/models/Products";
import heroBg from "@/assets/heroBg.png";
import Image from "next/image";
import Link from "next/link";
import BestRatedProducts from "@/components/BestRated";

export default async function BlogPage() {
  const response = await fetch("https://dummyjson.com/products");
  const { products }: ProductsResponse = await response.json();

  await delay(1000);

  return (
    <div>
      {/* Hero Section */}
      <section className="flex align-center justify-between">
        <div className="relative z-10 text-black ml-10 p-6 max-w-lg p-10">
          <h1 className="text-5xl font-extrabold mb-4 text-gray-900">
            Welcome to Our Store!
          </h1>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Discover a wide selection of high-quality products at unbeatable prices.
            Browse our latest arrivals and special deals to find exactly what you need.
          </p>
          <Link
            href="/products"
            className="inline-block bg-blue-600 text-white font-semibold text-lg py-3 px-6 rounded-lg shadow-md 
               hover:bg-blue-700 hover:shadow-lg transition duration-300">
            🛒 View Products
          </Link>
        </div>
        <Image
          src={heroBg}
          alt="Hero Image"
          className="object-cover"
          width={400}
          height={100}
        />
      </section>
      <BestRatedProducts />
    </div>
  );
}

