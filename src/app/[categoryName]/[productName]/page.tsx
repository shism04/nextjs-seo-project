import { delay } from "@/lib/utils";
import { Product, ProductsResponse } from "@/models/Products";
import { Metadata } from "next";
import Image from "next/image";

interface ProductPageProps {
  params: { categoryName: string , productName: string};
}
 
export async function generateStaticParams() {
  const response = await fetch("https://dummyjson.com/products", { next: { revalidate: 3600 } });
  const { products }: ProductsResponse = await response.json();

  return products.map((product) => ({
    categoryName: product.category.toLowerCase().replace(/\s+/g, "-"),
    productName: product.title.toLowerCase().replace(/\s+/g, "-"),
  })

)}

export async function generateMetadata({
  params: { categoryName, productName },
}: ProductPageProps): Promise<Metadata> {
  const productNameAfter = productName.split("-").join(" ");
  const response = await fetch(`https://dummyjson.com/products`);
  const { products }: ProductsResponse = await response.json();

  const product = products.find(
    (product) =>
      product.category &&
      product.title &&
      product.category.toLowerCase() === categoryName.toLowerCase() &&
      product.title.toLowerCase() === productNameAfter.toLowerCase()
  );

  if (!product) {
    return {
      title: "Product Not Found | Mercado 360",
      description: "Sorry, we couldn't find this product. Browse our catalog for more options.",
    };
  }

  return {
    title: `${product.title} | Mercado 360`,
    description: product.description,
    openGraph: {
      title: product.title,
      description: product.description,
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/${categoryName}/${productName}`, 
      images: product.thumbnail ? [{ url: product.thumbnail, alt: product.title }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: product.title,
      description: product.description,
      images: product.thumbnail ? [product.thumbnail] : [],
    },
  };
}
export default async function ProductPage({
  params: { categoryName , productName },
}: ProductPageProps) {
  const productNameAfter = productName.split('-').join(' ');

  const response = await fetch(`https://dummyjson.com/products`);

  const { products }: ProductsResponse = await response.json();
  

  const product = products.find(
    (product) => 
      product.category && product.title && 
      product.category.toLowerCase() === categoryName.toLowerCase() && 
      product.title.toLowerCase() === productNameAfter.toLowerCase()
  );

  if (!product) {
    return (
      <div className="p-6">
        <h2 className="text-xl text-center font-bold">Product not found</h2>
      </div>
    );
  }
  
  await delay(1000);

  return (
    <div className="p-6">
      {/* Contenedor del producto */}
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row">
        {/* Imagen del producto */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <Image
            src={product.images?.[0] || product.thumbnail}
            alt={`${product.title} in the ${product.category} category`}
            width={500}
            height={500}
            className="w-full h-80 object-cover rounded-lg"
          />
        </div>

        {/* Detalles del producto */}
        <div className="md:w-1/2 md:ml-8">
          <h2 className="text-3xl font-bold mb-4">{product.title}</h2>
          <div className="flex items-center mb-4">
            <div className="flex space-x-1">
              {/* Valoración del producto */}
              {Array.from({ length: 5 }).map((_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  fill={index < Math.round(product.rating) ? "#FFD700" : "#e0e0e0"}
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                >
                  <path d="M12 .587l3.668 7.451 8.207 1.199-5.937 5.784 1.4 8.163-7.337-3.847-7.337 3.847 1.4-8.163-5.937-5.784 8.207-1.199z" />
                </svg>
              ))}
            </div>
            <span className="ml-2">{product.rating} / 5</span>
          </div>

          <p className="text-lg text-gray-700 mb-6">{product.description}</p>

          {/* Precios */}
          <div className="mb-6">
            <span className="line-through text-gray-500 text-sm">
              ${Math.round(product.price + (product.price * product.discountPercentage / 100))}
            </span>
            <span className="ml-2 text-xl font-semibold text-green-600">
            ${product.price}
            </span>
          </div>

          {/* Botón de compra */}
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};