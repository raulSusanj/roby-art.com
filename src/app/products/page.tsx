import { Suspense } from "react";
import ProductsClient from "./ProductsClient";

export type MediaDoc = {
  url: string;
  alt?: string;
  width?: number;
  height?: number;
};

export type CategoryDoc = {
  id: string;
  name: string;
  order?: number;
  image?: MediaDoc;
};

export type ProductDoc = {
  id: string;
  name: string;
  order?: number;
  categories: CategoryDoc[];
  image?: MediaDoc;
  additionalPreviewText?: string;
};

const CMS_URL = process.env.CMS_URL ?? "http://localhost:3000";

function resolveUrl(url?: string): string | undefined {
  if (!url) return undefined;
  if (url.startsWith("http")) return url;
  return `${CMS_URL}${url}`;
}

async function fetchCategories(): Promise<CategoryDoc[]> {
  try {
    const res = await fetch(`${CMS_URL}/api/categories?limit=50&sort=order`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    const data = await res.json();
    return (data.docs ?? []).map((cat: CategoryDoc) => ({
      ...cat,
      image: cat.image ? { ...cat.image, url: resolveUrl(cat.image.url)! } : undefined,
    }));
  } catch {
    return [];
  }
}

async function fetchProducts(): Promise<ProductDoc[]> {
  try {
    const res = await fetch(`${CMS_URL}/api/products?depth=1&limit=200&sort=order`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    const data = await res.json();
    return (data.docs ?? []).map((product: ProductDoc) => ({
      ...product,
      image: product.image ? { ...product.image, url: resolveUrl(product.image.url)! } : undefined,
    }));
  } catch {
    return [];
  }
}

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const [products, categories, { category }] = await Promise.all([
    fetchProducts(),
    fetchCategories(),
    searchParams,
  ]);

  return (
    <Suspense>
      <ProductsClient
        products={products}
        categories={categories}
        initialCategory={category ?? "all"}
      />
    </Suspense>
  );
}
