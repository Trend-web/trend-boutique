// components/Navbar.js
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold text-gray-800">
            ModernCloth
          </Link>
          <div className="flex space-x-4">
            <Link href="/menu" className="text-gray-600 hover:text-gray-800">
              Menu
            </Link>
            <Link href="/account" className="text-gray-600 hover:text-gray-800">
              Account
            </Link>
            <Link href="/cart" className="text-gray-600 hover:text-gray-800">
              Cart
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}