import { TableCell, TableRow } from "@/lib/components/ui/table";
import { ProductType } from "@/lib/types/ProductType";
import { useTranslations } from "next-intl";
type PropsType = {
  product: ProductType
}

export default function Product({ product }: PropsType) {
  const { name, category, price, offerPrice, stock, unitOfMeasurement, expireDate } = product;
  const um_intl = useTranslations('unitOfMeasurement');
  // const 
  return (
    <TableRow>
      <TableCell className="w-28"><div className="size-8 rounded-full bg-primary-900"></div></TableCell>
      <TableCell>
        {name}
      </TableCell>
      <TableCell><div className="flex gap-1 text-green-500 justify-start items-center">{offerPrice && <span>{offerPrice}</span>}<span className={`${offerPrice && 'line-through opacity-50 text-xs text-primary-950 dark:text-primary-50'}`}>{price}</span></div></TableCell>
      <TableCell>{name}</TableCell>
      <TableCell>
        <div className="text-right flex gap-0.5 justify-end ">
          <span>{stock}</span><span>{um_intl(unitOfMeasurement)}</span>
        </div>
      </TableCell>
    </TableRow >
  )
}