'use client';
import { useEffect, useState } from "react";
import { ProductsResponse } from "@/models/Products";
import Image from "next/image";
import Link from "next/link";

export default function BestRatedProducts() {
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [products, setProducts] = useState<ProductsResponse["products"]>([]);

  // Cargar productos de manera asincrónica
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://dummyjson.com/products");
      const data: ProductsResponse = await response.json();
      setProducts(data.products);

      // Obtener categorías únicas
      const uniqueCategories = data.products
        .map((product) => product.category)
        .filter((value, index, self) => self.indexOf(value) === index);
      
      setCategories(uniqueCategories);
      setSelectedCategory(uniqueCategories[0]);  // Seleccionar la primera categoría
    };

    fetchProducts();
  }, []);  // El array vacío hace que esto se ejecute solo una vez al montar el componente

  // Función para obtener los productos mejor valorados por categoría
  const getTopRatedProducts = (category: string) => {
    return products
      .filter((product) => product.category.includes(category))
      .sort((a, b) => b.rating - a.rating) 
      .slice(0, 3); 
  };

  const renderRating = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          fill={i < rating ? "#FFD700" : "#e0e0e0"}  // Amarillo para llenas, gris para vacías
          viewBox="0 0 24 24"
          width="20"
          height="20"
        >
          <path d="M12 .587l3.668 7.451 8.207 1.199-5.937 5.784 1.4 8.163-7.337-3.847-7.337 3.847 1.4-8.163-5.937-5.784 8.207-1.199z" />
        </svg>
      );
    }
    return stars;
  };

  return (
    <div className="p-6">
      {/* Tabs para las categorías */}
      <div className="flex space-x-4 border-b">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 capitalize ${
              selectedCategory === category
                ? "border-b-2 border-blue-500 font-bold"
                : "text-gray-500"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Lista de productos mejor valorados */}
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {getTopRatedProducts(selectedCategory).map((product) => (
          <Link
            key={product.id}
            href={`/product/${product.id}`}
          >
            <div
              key={product.id}
              className="p-4 border rounded-lg shadow-md text-center relative"
            >
              {/* Sello de descuento */}
              {product.discountPercentage > 0 && (
                <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 text-sm font-bold rounded-bl-lg">
                  {`${product.discountPercentage}% OFF`}
                </div>
              )}

              {/* Imagen del producto */}
              <Image
                src={product.thumbnail}
                alt={product.title}
                width={400}
                height={400}
                className="w-full object-cover mb-4 rounded"
              />

              {/* Nombre del producto */}
              <h3 className="font-bold mb-2">{product.title}</h3>

              {/* Valoración */}
              <div className="flex justify-center mb-2">
                {renderRating(Math.round(product.rating))}
              </div>

              {/* Precios */}
              <div className="mb-6">
                <span className="line-through text-gray-500 text-sm">
                  ${Math.round(product.price + (product.price * product.discountPercentage / 100))}
                </span>
                <span className="ml-2 text-xl font-semibold text-green-600">
                  ${product.price}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

