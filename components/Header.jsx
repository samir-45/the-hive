import Link from 'next/link';
import { Menu, Search, Bell } from 'lucide-react';

export default function Header() {
  const categories = ["National", "International", "Sports", "Technology", "Entertainment"];

  return (
    <header className="border-b border-gray-200 bg-white">
      {/* Top Bar */}
      <div className="container mx-auto px-4 py-2 flex justify-between text-sm text-gray-500 border-b border-gray-100">
        <span>Tuesday, January 06, 2026</span>
        <div className="flex gap-4">
          <span className="cursor-pointer hover:text-blue-600">English</span>
          <span className="cursor-pointer hover:text-blue-600">Login</span>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        <button className="md:hidden">
          <Menu className="w-6 h-6" />
        </button>
        
        {/* Logo */}
        <Link href="/" className="text-4xl font-bold font-serif text-gray-900 tracking-tighter hover:opacity-80 transition">
          Daily<span className="text-red-600">News</span>
        </Link>

        <div className="hidden md:flex gap-4 items-center">
          <button className="p-2 hover:bg-gray-100 rounded-full"><Search className="w-5 h-5" /></button>
          <button className="bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-700 transition">Subscribe</button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="container mx-auto px-4 hidden md:block">
        <ul className="flex gap-8 py-3 font-medium text-gray-700 border-t border-gray-100">
          <li><Link href="/" className="hover:text-red-600">Home</Link></li>
          {categories.map((cat) => (
            <li key={cat}>
              <Link href={`/category/${cat.toLowerCase()}`} className="hover:text-red-600 transition">
                {cat}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
