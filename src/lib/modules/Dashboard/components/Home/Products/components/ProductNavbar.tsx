'use client'
import { Button } from '@/lib/components/ui/button'
import { PlusIcon } from 'lucide-react'
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


export default function ProductNavbar() {
  const path = usePathname();
  const intl = useTranslations('app');

  return (
    <nav className='relative'>
      <div className='fixed top-0 right-0 left-0  h-16  flex'>
        <div className='basis-0 lg:basis-1/5'>
        </div>
        <div className='basis-full lg:basis-4/5 flex border-b border-primary-950/20 dark:border-primary-50/10'>
          <div className=' basis-full md:basis-1/2 h-full px-4 flex justify-start items-center'>
            {path === '/dashboard/products/new' && <h2>{intl('new_product')}</h2>}
          </div>

          <div className=' basis-full md:basis-1/2 h-full px-4 flex justify-end items-center'>
            <Button asChild variant={'ghost'} size={'icon'} className='rounded-full'>
              <Link href={'/dashboard/products/new'}>
                <PlusIcon />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
