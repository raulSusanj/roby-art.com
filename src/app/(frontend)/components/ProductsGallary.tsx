'use client'
import { useRouter, useSearchParams } from 'next/navigation'
import { Category, Product } from '@/payload-types'
import Image from 'next/image'
import { useState, useEffect, Suspense } from 'react'

export default function ProductsGallary({ categories }: { categories: Category[] }) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const categoryId = searchParams.get('category')

  const [activeCategoryId, setActiveCategoryId] = useState<number>(0)

  useEffect(() => {
    // This runs after hydration when searchParams are available
    if (categoryId) {
      setActiveCategoryId(parseInt(categoryId))
    }
  }, [categoryId])

  const configCategory = () => {
    if (activeCategoryId === 0) {
      return categories.reduce((acc, category) => {
        if (category.products) {
          acc.products = [...(acc.products || []), ...(category.products as Product[])]
        }
        return acc
      }, {} as Category)
    }
    return categories.find((cat) => cat.id === activeCategoryId)
  }

  const category = configCategory()
  return (
    <Suspense fallback={<div>Učitavanje...</div>}>
      <div className="min-h-screen py-25 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl text-center mb-8">Naši proizvodi</h1>

        {/* Category Tabs */}
        <div className="flex overflow-x-auto pb-2 mb-8 scrollbar-hide">
          <div className="flex space-x-2 mx-auto">
            <button
              key={0}
              onClick={() => {
                setActiveCategoryId(0)
                // Update URL without page reload
                router.push(`?category=0`, { scroll: false })
              }}
              className={`px-4 py-2 rounded-full whitespace-nowrap capitalize ${
                activeCategoryId === 0 ? 'bg-blue-600 text-white' : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              Svi proizvodi
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setActiveCategoryId(category.id)
                  // Update URL without page reload
                  router.push(`?category=${category.id}`, { scroll: false })
                }}
                className={`px-4 py-2 rounded-full whitespace-nowrap capitalize ${
                  activeCategoryId === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 hover:bg-gray-300'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {((category?.products as Product[]) ?? []).map((product) => (
            <div key={product.id} className="flex flex-col items-center">
              <div className="relative w-full aspect-square overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={
                    typeof product.image === 'object' && product.image?.url
                      ? product.image.url
                      : '/images/placeholder.jpg'
                  }
                  alt={
                    typeof product.image === 'object' && 'alt' in product.image
                      ? product.image.alt
                      : 'Product image'
                  }
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
                {/* Text label */}
                <div className="absolute bottom-0 left-0 p-2 text-white font-regular bg-gradient-to-t from-black/70 to-transparent w-full">
                  {product.name}
                  {product.additionalPreviewText && ` - ${product.additionalPreviewText}`}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Suspense>
  )
}
