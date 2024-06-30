'use client'
import { DrawerOptionType } from '@/lib/components/Drawer/types/DrawerTypes'
import DrawerOption from '@/lib/components/Drawer/DrawerOption'
import { usePathname, useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl';
import { FileTextIcon, HomeIcon, LineChart, Package, StoreIcon, UserIcon, Users2Icon } from 'lucide-react';


export default function Drawer() {
  const intl = useTranslations('app');
  const path = usePathname()

  const options: DrawerOptionType[] = [
    {
      icon: <HomeIcon className='icon' />,
      heading: intl('home'),
      url: '/dashboard/',
      active: path === '/dashboard'
    },
    {
      icon: <Package className='icon' />,
      heading: intl('products'),
      url: '/dashboard/products',
      active: path === '/dashboard/products'
    },
    {
      icon: <StoreIcon className='icon' />,
      heading: intl('store'),
      url: '/dashboard/store',
      active: path === '/dashboard/store'
    },
    {
      icon: <Users2Icon className='icon' />,
      heading: intl("providers"),
      url: '/dashboard/providers',
      active: path === '/dashboard/providers'
    },
    {
      icon: <FileTextIcon className='icon' />,
      heading: intl("orders"),
      url: '/dashboard/orders',
      active: path === '/dashboard/orders'
    },
    {
      icon: <LineChart className='icon' />,
      heading: intl("statics"),
      url: '/dashboard/statics',
      active: path === '/dashboard/statics'
    },
  ]

  return (
    <div className='size-full border-e border-primary-950/20 dark:border-primary-50/10 '>
      <div className='flex flex-row gap-2 justify-center items-center m-2 p-4 border border-primary-950/20 dark:border-primary-50/10 rounded-3xl'>
        <div className='size-16 bg-primary-50 rounded-full  '></div>
        <div className=''>
          <h3>Eismer Lobaina</h3>
          <h6>CEO</h6>
        </div>
      </div>
      <div className='size-full flex flex-col gap-2 p-2  '>
        {options.map((option, index) => (
          <DrawerOption key={index} option={option} />
        ))}
      </div>
    </div>
  )
}