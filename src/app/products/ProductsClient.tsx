"use client";
import Image from "next/image";
import { useState, useMemo } from "react";
import type { CategoryDoc, ProductDoc } from "./page";

interface Props {
  products: ProductDoc[];
  categories: CategoryDoc[];
  initialCategory: string;
}

export default function ProductsClient({ products, categories, initialCategory }: Props) {
  const validInitial = categories.some((c) => c.id === initialCategory) ? initialCategory : "all";
  const [activeCategory, setActiveCategory] = useState(validInitial);

  const filtered = useMemo(() => {
    if (activeCategory === "all") return products;
    return products.filter((p) => p.categories.some((c) => c.id === activeCategory));
  }, [activeCategory, products]);

  return (
    <div className="min-h-screen py-25 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl text-center mb-8">Naši proizvodi</h1>

      {/* Category Tabs */}
      <div className="flex overflow-x-auto pb-2 mb-8 scrollbar-hide">
        <div className="flex space-x-2 mx-auto">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 rounded-full whitespace-nowrap ${
              activeCategory === "all" ? "bg-blue-600 text-white" : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            Svi proizvodi
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full whitespace-nowrap ${
                activeCategory === cat.id ? "bg-blue-600 text-white" : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.map((product, index) => (
          <div key={product.id} className="flex flex-col items-center">
            <div className="relative w-full aspect-square overflow-hidden rounded-lg shadow-lg">
              {product.image?.url && (
                <Image
                  src={product.image.url}
                  alt={product.image.alt ?? product.name}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  loading={index < 8 ? "eager" : "lazy"}
                />
              )}
              <div className="absolute bottom-0 left-0 p-2 text-white font-regular bg-gradient-to-t from-black/70 to-transparent w-full">
                {product.additionalPreviewText || product.name}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
