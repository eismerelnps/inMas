import ProductsContainer from '@/lib/modules/Dashboard/components/Home/Products/ProductsContainer'
import { productsPlaceholder } from '@/lib/placeholder/products'

export default function page() {
  return <ProductsContainer products={productsPlaceholder} />
}
