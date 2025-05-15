import { getPayload } from 'payload'
import config from '@payload-config'
import ProductsGallary from '../components/ProductsGallary'

export default async function Products() {
  const payload = await getPayload({ config })
  const { docs: categories } = await payload.find({
    collection: 'categories',
  })
  console.log(categories)
  return <ProductsGallary categories={categories} />
}
