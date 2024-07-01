import ProductForm from '@/lib/modules/Dashboard/components/Home/Products/ProductForm/ProductForm'
import { emptyProduct } from '@/lib/placeholder/products'

export default function page() {
  return <ProductForm product={emptyProduct}/>
}
