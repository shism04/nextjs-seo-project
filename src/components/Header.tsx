import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="shadow p-4 bg-white">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo a la izquierda */}
        <Link href="/" className="flex items-center gap-3">
          <Image className="h-20 object-cover" src={logo} alt="logo" width={175}/>
        </Link>

        {/* Navegación centrada */}
        <nav>
          <ul className="flex space-x-6 text-lg font-medium mr-3">
            <li>
              <Link href="/" className="hover:text-blue-600 transition">Home</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-600 transition">About</Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-blue-600 transition">Products</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-600 transition">Contact Us</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
