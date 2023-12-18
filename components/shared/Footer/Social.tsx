import Link from 'next/link'
import { Fb, Ig, In } from '/components'

export const Social = () => (
  <div className='flex gap-3 lg:mr-auto lg:ml-0 ml-auto'>
    <Link href='https://www.facebook.com/ULCterminal' target='_blank'>
      <Fb className='lg:w-full lg:h-full w-8 h-8' />
    </Link>
    <Link
      href='https://www.linkedin.com/in/ulcterminal%E2%97%A6%E1%83%98%E1%83%A3-%E1%83%94%E1%83%9A-%E1%83%A1%E1%83%98-%E1%83%A2%E1%83%94%E1%83%A0%E1%83%9B%E1%83%98%E1%83%9C%E1%83%90%E1%83%9A/'
      target='_blank'
    >
      <In className='lg:w-full lg:h-full w-8 h-8' />
    </Link>
    <Link href='https://www.instagram.com/ulcterminal' target='_blank'>
      <Ig className='lg:w-full lg:h-full w-8 h-8' />
    </Link>
  </div>
)
