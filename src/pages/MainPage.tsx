import ProductGrid from "@/components/ProductGrid"

export default function MainPage() {
    return (
      <div className="flex-col justify-center ">
        <h1 className="text-4xl font-bold text-center m-10 drop-shadow-sm">New Arrivals</h1>
      <main className="container mx-auto px-4 py-8">
        <ProductGrid />
      </main>
      </div>
    )
  }
  