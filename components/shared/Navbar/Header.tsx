'use client'

import { usePathname } from 'next/navigation'
import { twMerge } from 'tailwind-merge'
import { checkPath } from './helpers'

export const Header = ({
  children,
  className,
  ...props
}: JSX.IntrinsicElements['header']) => {
  const path = usePathname()
  return (
    <header
      className={twMerge(
        'text-lg text-secondary',
        className,
        checkPath(path) && 'bg-gold-light'
      )}
      {...props}
    >
      {children}
    </header>
  )
}
