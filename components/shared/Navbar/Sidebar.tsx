'use client'

import { Burger, Close, Switcher } from '/components'
import { Nav } from './Nav'
import { NavbarProps } from './types'
import { useSidebar } from './useSidebar'
import { twMerge } from 'tailwind-merge'

export const Sidebar = (props: NavbarProps) => {
  const { isOpen, toggle } = useSidebar()
  return (
    <>
      <Burger
        fill='#000'
        className='self-center cursor-pointer lg:hidden'
        onClick={toggle}
      />

      {isOpen && (
        <>
          <div
            className='fixed inset-0 bg-black opacity-50 z-40 lg:hidden'
            onClick={toggle}
          />
          <aside className='flex flex-col fixed inset-y-0 right-0 w-72 bg-white p-5 z-50 shadow-md'>
            <Close className='cursor-pointer ml-auto' onClick={toggle} />
            <Nav
              {...props}
              toggle={toggle}
              navItemClassName='relative flex shadow-none'
              className='mt-10 flex-col'
            />
            <Switcher className='flex gap-4 mt-10 mr-auto' />
          </aside>
        </>
      )}
    </>
  )
}
