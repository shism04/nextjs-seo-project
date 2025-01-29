import { delay } from "@/lib/utils";
import { Product } from "@/models/Products";
import Image from "next/image";

interface ProductPageProps {
  params: { productId: string };
}

export default async function ProductPage({
  params: { productId },
}: ProductPageProps) {
  const response = await fetch(`https://dummyjson.com/products/${productId}`);
  const product: Product = await response.json();

  await delay(1000);

  return (
    <div className="p-6">
      {/* Contenedor del producto */}
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row">
        {/* Imagen del producto */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <Image
            src={`${product.images[0] ? product.images[0] : product.thumbnail}`}
            alt={product.title}
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