import Link from 'next/link'
import { Fb, Ig, In } from '/components'

export const Social = () => (
  <div className='flex gap-3 lg:mr-auto lg:ml-0 ml-auto'>
    <Link
      href='https://www.facebook.com/profile.php?id=61553342160765'
      target='_blank'
    >
      <Fb className='lg:w-full lg:h-full w-8 h-8' />
    </Link>
    <Link href='https://www.linkedin.com/company/ulcterminal' target='_blank'>
      <In className='lg:w-full lg:h-full w-8 h-8' />
    </Link>
    <Link href='https://www.instagram.com/ulcterminal' target='_blank'>
      <Ig className='lg:w-full lg:h-full w-8 h-8' />
    </Link>
  </div>
)
