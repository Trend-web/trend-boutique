import { Metadata } from 'next'
import { CartProvider } from '@/contexts/CartContext'

export const metadata: Metadata = {
  title: 'Product - Modern Clothing Store',
  description: 'View our amazing products',
}

export default function ProductLayout({ children }:{children: any}) {
  return (
    <>
        {children}
    </>
  )
}