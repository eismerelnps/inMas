import { Button } from '@/lib/components/ui/button'
import { PlusIcon } from 'lucide-react'
import React from 'react'

type Props = {
  onAddProduct: () => void
};

export default function DashboardNavbar({ onAddProduct }: Props) {
  return (
    <div className='w-full h-full flex lg:px-4'>
      <div className='basis-full md:basis-1/2'>

      </div>
      <div className='basis-full md:basis-1/2 flex justify-end items-center'>
        <Button className='rounded-full' variant={'ghost'} size="icon">
          <PlusIcon />
        </Button>
      </div>
    </div>
  )
}
