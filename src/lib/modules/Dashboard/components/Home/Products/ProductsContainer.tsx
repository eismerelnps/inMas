'use client'
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
import ProductNavbar from "./components/ProductNavbar";
import { emptyProduct } from "@/lib/placeholder/products";
import ProductForm from "./ProductForm/ProductForm";
import { useState } from "react";
import { useRouter } from "next/navigation";

type PropsType = {
  products: ProductType[]
}

export default function ProductsContainer({ products }: PropsType) {
  const intl = useTranslations('app');
  const router = useRouter();

  const [open, setOpen] = useState(false)


  return (
    <div>
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
    </div>

  )
}
