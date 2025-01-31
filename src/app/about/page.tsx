import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about Mercado 360, our mission, and our commitment to quality and top-notch customer service."
};  

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 rounded-lg shadow-lg space-y-6">
      <h1 className="text-4xl text-center font-bold text-gray-800">
        About Mercado 360: Your One-Stop Shop for Everything!
      </h1>
      <p className="text-lg text-gray-700 leading-relaxed">
        Welcome to Mercado 360, the ultimate online marketplace where convenience,
        quality, and variety meet. From trendy fragrances to cosmetics, stylish
        furniture, and daily groceries, we’ve got everything you need in one place.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed">
        At Mercado 360, we believe in providing our customers with an enjoyable
        shopping experience. Whether you’re upgrading your home, refreshing your
        beauty routine, or stocking up on essentials, we offer a wide range of
        top-quality products at competitive prices, with the convenience of shopping
        from the comfort of your home.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed">
        Our goal is to make online shopping simple, reliable, and fun. We’re dedicated
        to bringing you not only the best deals but also a curated selection of the
        finest products in each category. Stay tuned for exclusive offers and
        new arrivals as we continuously expand our collection.
      </p>
      <div className="text-center mt-6">
        <p className="text-xl font-semibold text-gray-800">Start your shopping journey with Mercado 360 today!</p>
      </div>
    </div>
  );
}

