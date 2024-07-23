'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useCart } from '@/contexts/CartContext';

export default function CartDropdown() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cart, getTotalPrice } = useCart();
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsCartOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Calculate total number of items in the cart
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="text-gray-600 hover:text-gray-800"
        onClick={() => setIsCartOpen(!isCartOpen)}
      >
        Cart ({totalItems})
      </button>
      {isCartOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg z-10">
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">Cart</h3>
            {cart.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              <>
                <ul className="space-y-2">
                  {cart.slice(0, 3).map((item) => (
                    <li key={item.id} className="flex justify-between">
                      <span>{item.name}</span>
                      <span>x{item.quantity}</span>
                    </li>
                  ))}
                </ul>
                {cart.length > 3 && (
                  <p className="mt-2 text-sm text-gray-500">
                    and {cart.length - 3} more item(s)
                  </p>
                )}
                <p className="mt-2 font-semibold">
                  Total: ${getTotalPrice().toFixed(2)}
                </p>
                <Link
                  href="/cart"
                  className="mt-4 block w-full text-center bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  View Cart
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}