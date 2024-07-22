// components/ProductCard.js
import Image from 'next/image'

interface Product {
    id: number
    name: string
    price: number
    image: string
    
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <Image
        src={product.image}
        alt={product.name}
        width={300}
        height={300}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
        <p className="text-gray-600">₹{product.price.toFixed(2)}</p>
        <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">
          Add to Cart
        </button>
      </div>
    </div>
  )
}