import { getPayload } from 'payload'
import config from '@payload-config'
import ProductsGallary from '../components/ProductsGallary'
import { Suspense } from 'react'

export default async function Products() {
  const payload = await getPayload({ config })
  const { docs: categories } = await payload.find({
    collection: 'categories',
  })
  return (
    <Suspense fallback={<div>Učitavanje...</div>}>
      <ProductsGallary categories={categories} />
    </Suspense>
  )
}
