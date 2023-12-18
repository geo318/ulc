import { createElement } from 'react'
import { CustomHeading } from './types'
import { twMerge } from 'tailwind-merge'
import { Marcellus } from 'next/font/google'

const font = Marcellus({ weight: ['400'], subsets: ['latin'] })

const variants = {
  sm: '[font-size:_clamp(1rem,1.5vw,2rem)]',
  md: '[font-size:_clamp(1.5rem,2.5vw,3.5rem)]',
  lg: '[font-size:_clamp(1.75rem,2.75vw,4rem)]',
  xl: '[font-size:_clamp(2rem,3vw,4.5rem)]',
  '2xl': '[font-size:_clamp(2.25rem,3.25vw,5rem)]',
  '3xl': '[font-size:_clamp(3rem,4vw,6rem)]',
  max: 'lg:[font-size:_clamp(4.5rem,9vw,9rem)] text-4xl',
} as const

export const H: React.FC<CustomHeading & { size: keyof typeof variants }> = ({
  tag,
  size,
  ...props
}) =>
  createElement(tag, {
    ...props,
    className: twMerge(font.className, size && variants[size], props.className),
    style: {
      ...props.style,
      ...(size.includes('xl') && { fontWeight: 700 }),
    },
  })
