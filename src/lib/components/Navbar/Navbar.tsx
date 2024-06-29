import React from 'react'

export default function Navbar() {
  return (
    <nav className='relative'>
      <div className='fixed top-0 right-0 left-0  h-16  flex'>
        <div className='basis-0 lg:basis-1/5'></div>
        <div className='basis-full lg:basis-4/5 border-b border-primary-950/20 dark:border-primary-50/10'></div>
      </div>
    </nav>
  )
}
