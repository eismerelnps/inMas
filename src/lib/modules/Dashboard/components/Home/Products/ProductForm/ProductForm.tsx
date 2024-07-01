"use client"
import { Button } from "@/lib/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/lib/components/ui/dialog"
import { Input } from "@/lib/components/ui/input"
import { Label } from "@/lib/components/ui/label"
import { ProductType } from "@/lib/types/ProductType"
import { useTranslations } from "next-intl"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/lib/components/ui/form"
import { toast } from "@/lib/components/ui/use-toast"
import { Textarea } from "@/lib/components/ui/textarea"



type Props = {
  product?: ProductType;
}
export default function ProductForm({ product }: Props) {
  const intl = useTranslations('app');
  const intl_validation = useTranslations('productValidation');

  const FormSchema = z.object({
    name: z.string().min(2, {
      message: intl_validation('name_required'),
    }),
    description: z.string().max(110, {
      message: intl_validation('description_too_long'),
    }),
    category: z.string().min(2, {
      message: intl_validation('category_required'),
    }),
    buyPrice: z.number().min(0, {
      message: intl_validation('incorrect_buy_price'),
    }),
    sellPrice: z.number().min(0, {
      message: intl_validation('incorrect_buy_price'),
    }),
    offerPrice: z.number().min(0, {
      message: intl_validation('incorrect_buy_price'),
    }),
  })

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: product,
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <div className="flex justify-center items-center p-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{intl('name')}</FormLabel>
                <FormControl>
                  <Input placeholder={intl('beans')} {...field} />
                </FormControl>
                {/* <FormDescription>{intl('this_product_name')}</FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{intl('description')}</FormLabel>
                <FormControl>
                  <Textarea placeholder={intl('beans_description')} {...field} />
                </FormControl>
                {/* <FormDescription>{intl('this_product_description')}</FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{intl('category')}</FormLabel>
                <FormControl>
                  <Input placeholder={intl('grain')} {...field} />
                </FormControl>
                {/* <FormDescription>{intl('this_product_category')}</FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="buyPrice"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{intl('buyPrice')}</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="150.00" {...field} />
                </FormControl>
                {/* <FormDescription>{intl('this_product_category')}</FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>

  )
}