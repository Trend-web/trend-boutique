import CartDropdown from './CartDropdown';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold text-gray-800">
            Trend Collections
          </Link>
          <div className="flex space-x-4">
            <Link href="/account" className="text-gray-600 hover:text-gray-800">
              Account
            </Link>
            <CartDropdown />
          </div>
        </div>
      </div>
    </nav>
  );
}