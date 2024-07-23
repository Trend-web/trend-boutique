'use client';
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import {useCart}  from '@/contexts/CartContext';
import {ProductData} from '@/data/ProductData'

const products = ProductData;

export default function ProductPage({ params }) {
  const router = useRouter()
  const { id } = params
  const product = products.find(p => p.id === parseInt(id))
  const {addToCart}  = useCart();


  if (!product) {
    return <div>Product not found</div>
  }

  return (
    <div className="min-h-screen bg-gray-100 flex-col ">
      
      <main className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <Image
                src={product.image}
                alt={product.name}
                width={500}
                height={500}
                className="h-full w-full object-cover md:w-48"
              />
            </div>
            <div className="p-8">
              <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
              <p className="text-gray-600 text-xl mb-4">${product.price.toFixed(2)}</p>
              <p className="text-gray-700 mb-6">{product.description}</p>
              
              <button 
                onClick={() => addToCart(product)}
                className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                  Add to Cart
              </button>
            </div>
          </div>
        </div>
        <button type="button" onClick={() => router.push('/main')}
                className="ml-32 mt-6 bg-blue-600  text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                >
                Go Back
        </button>
              
      </main>
    </div>
  )
}