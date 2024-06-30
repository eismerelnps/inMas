import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/lib/components/ui/table";
import { ProductType } from "@/lib/types/ProductType";
import { useTranslations } from "next-intl";
import Product from "./components/Product";

type PropsType = {
  products: ProductType[]
}

export default function ProductsContainer({ products }: PropsType) {
  const intl = useTranslations('app')
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead></TableHead>
          <TableHead>{intl('product')}</TableHead>
          <TableHead>{intl('price')}</TableHead>
          <TableHead>{intl('price')}</TableHead>
          <TableHead className="text-right">{intl('stock')}</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((product) => <Product product={product} />)}
      </TableBody>
    </Table>

  )
}
