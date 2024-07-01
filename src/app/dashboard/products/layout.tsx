import ProductNavbar from '@/lib/modules/Dashboard/components/Home/Products/components/ProductNavbar'

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <ProductNavbar />
      {children}
    </div>
  )
}
