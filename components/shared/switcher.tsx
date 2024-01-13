'use client'

import Link from 'next/link'
import { localeInfo, locales } from '/config'
import { useParams, usePathname } from 'next/navigation'
import { twMerge } from 'tailwind-merge'
import { Globe } from '/components'
import { useClickOutSide, useScreenWidth } from '/hooks'
import { useState } from 'react'
import { Locale } from '/types'

export function Switcher({ className = '' }) {
  const pathname = usePathname()
  const lang = useParams().lang as Locale
  const [isOpened, setIsOpened] = useState(false)
  const { isMobile } = useScreenWidth(1024)
  const ref = useClickOutSide<HTMLDivElement>({
    cb: setIsOpened.bind(null, false),
  })

  return (
    <ul
      className={twMerge(
        'font-medium text-lg gap-2 items-center justify-center',
        className
      )}
    >
      <Globe className='[&_path]:fill-red lg:flex hidden' />
      <div
        ref={ref}
        onClick={() => setIsOpened((prev) => !prev)}
        className='cursor-pointer rounded-lg bg-white px-2 lg:text-black text-red lg:block hidden'
        data-test='switcher'
      >
        {lang}
      </div>
      <div className='relative'>
        {isMobile &&
          localeInfo.map((locale) => (
            <li
              key={locale.key}
              className={twMerge(
                'border-y border-transparent lg:hidden block',
                pathname.startsWith(`/${locale.key}`) && 'text-red'
              )}
              data-test='switcher-dropdown'
            >
              <Link
                href={pathname.replace(/^\/(en|ka|ru)/, `/${locale.key}`)}
                className='hover:opacity-80 transition-opacity duration-200 uppercase'
              >
                {locale.name}
              </Link>
            </li>
          ))}
        {isOpened && (
          <div className='absolute bg-white top-5 -right-5 rounded-md w-24 flex flex-col items-center justify-center gap-1 py-3'>
            {localeInfo
              ?.filter((l) => l.key !== lang)
              .map((locale) => (
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
          </div>
        )}
      </div>
    </ul>
  )
}
