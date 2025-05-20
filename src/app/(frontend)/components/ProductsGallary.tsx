'use client'
import { useRouter, useSearchParams } from 'next/navigation'
import { Category, Product } from '@/payload-types'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { LuX, LuChevronLeft, LuChevronRight } from 'react-icons/lu'

export default function ProductsGallery({ categories }: { categories: Category[] }) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const categoryId = searchParams.get('category')

  const [activeCategoryId, setActiveCategoryId] = useState<number>(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)

  useEffect(() => {
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
  const products = (category?.products as Product[]) ?? []

  const openModal = (index: number) => {
    setCurrentSlideIndex(index)
    setIsModalOpen(true)
    document.body.style.overflow = 'hidden' // Prevent scrolling when modal is open
  }

  const closeModal = () => {
    setIsModalOpen(false)
    document.body.style.overflow = 'auto'
  }

  const goToPrevSlide = () => {
    setCurrentSlideIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1))
  }

  const goToNextSlide = () => {
    setCurrentSlideIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1))
  }

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isModalOpen) return

      if (e.key === 'Escape') {
        closeModal()
      } else if (e.key === 'ArrowLeft') {
        goToPrevSlide()
      } else if (e.key === 'ArrowRight') {
        goToNextSlide()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isModalOpen, currentSlideIndex])

  return (
    <div className="min-h-screen py-25 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl text-center mb-8">Naši proizvodi</h1>

      {/* Category Tabs */}
      <div className="flex overflow-x-auto pb-2 mb-8 scrollbar-hide">
        <div className="flex space-x-2 mx-auto">
          <button
            key={0}
            onClick={() => {
              setActiveCategoryId(0)
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
        {products.map((product, index) => (
          <div key={product.id} className="flex flex-col items-center">
            <div
              className="relative w-full aspect-square overflow-hidden rounded-lg shadow-lg cursor-pointer"
              onClick={() => openModal(index)}
            >
              <Image
                src={
                  typeof product.image === 'object' && product.image?.url
                    ? `${process.env.NEXT_PUBLIC_WEBSITE_URL}${product.image.url}`
                    : '/images/placeholder.jpg'
                }
                alt={
                  product.image && typeof product.image === 'object' && 'alt' in product.image
                    ? product.image.alt
                    : 'Product image'
                }
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
              {/* Text label */}
              <div className="absolute bottom-0 left-0 p-2 text-white font-regular bg-gradient-to-t from-black/70 to-transparent w-full">
                Slika {product.order}
                {product.additionalPreviewText && ` - ${product.additionalPreviewText}`}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Gallery */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-50"
          >
            <LuX size={32} />
          </button>

          <div className="relative w-full max-w-6xl h-full max-h-[90vh] flex items-center">
            <button
              onClick={goToPrevSlide}
              className="absolute left-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 z-10"
            >
              <LuChevronLeft size={32} />
            </button>

            <div className="w-full h-full flex flex-col items-center justify-center">
              <div className="relative w-full h-full max-h-[80vh]">
                <Image
                  src={
                    typeof products[currentSlideIndex].image === 'object' &&
                    products[currentSlideIndex].image?.url
                      ? `${process.env.NEXT_PUBLIC_WEBSITE_URL}${products[currentSlideIndex].image.url}`
                      : '/images/placeholder.jpg'
                  }
                  alt={
                    products[currentSlideIndex].image &&
                    typeof products[currentSlideIndex].image === 'object' &&
                    'alt' in products[currentSlideIndex].image
                      ? products[currentSlideIndex].image.alt
                      : 'Slika proizvoda'
                  }
                  fill
                  className="object-contain"
                />
              </div>

              <div className="mt-4 text-white text-center">
                <h3 className="text-xl font-bold">Slika {products[currentSlideIndex].order}</h3>
                {products[currentSlideIndex].additionalPreviewText && (
                  <p className="text-lg">{products[currentSlideIndex].additionalPreviewText}</p>
                )}
              </div>
            </div>

            <button
              onClick={goToNextSlide}
              className="absolute right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 z-10"
            >
              <LuChevronRight size={32} />
            </button>
          </div>

          {/* Thumbnail Navigation */}
          {/* <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 overflow-x-auto py-2 px-4">
            {products.map((product, index) => (
              <div
                key={index}
                onClick={() => setCurrentSlideIndex(index)}
                className={`relative w-16 h-16 rounded-md overflow-hidden cursor-pointer border-2 ${
                  currentSlideIndex === index ? 'border-blue-500' : 'border-transparent'
                }`}
              >
                <Image
                  src={
                    typeof product.image === 'object' && product.image?.url
                      ? `${process.env.NEXT_PUBLIC_WEBSITE_URL}${product.image.url}`
                      : '/images/placeholder.jpg'
                  }
                  alt="Thumbnail"
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div> */}
        </div>
      )}
    </div>
  )
}
