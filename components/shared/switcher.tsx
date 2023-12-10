'use client'

import Link from 'next/link'
import { localeInfo } from '/config'
import { usePathname } from 'next/navigation'
import { twMerge } from 'tailwind-merge'
import { Globe } from '..'

export function Switcher({ className = '' }) {
  const pathname = usePathname()
  return (
    <ul className={twMerge('font-medium text-lg gap-4 items-center justify-center', className)}>
      <Globe className='[&_path]:fill-red' />
      {localeInfo?.map((locale) => (
        <li
          key={locale.key}
          className={twMerge(
            'border-y border-transparent',
            pathname.startsWith(`/${locale.key}`) &&
              'border-b-primary text-primary'
          )}
        >
          <Link
            href={pathname.replace(/^\/(en|ka|ru)/, `/${locale.key}`)}
            className='hover:opacity-80 transition-opacity duration-200 uppercase'
          >
            {locale.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}
