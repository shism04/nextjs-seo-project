import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Mercado 360 - Your Trusted Online Store",
    template: "%s | Mercado 360"
  },
  description: "Discover a wide range of products at Mercado 360. Find fragrances, cosmetics, furniture, and groceries at the best prices with exclusive discounts.",
};  

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
