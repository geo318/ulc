import Link from 'next/link'
import { NavbarProps } from './types'
import { Logo, Section } from '/components'
import { routes } from '/config'
import { Nav } from './Nav'
import { Sidebar } from './Sidebar'
import { Header, Spacer } from './Header'

export const Navbar: React.FC<NavbarProps> = ({ text, lang, isHomepage }) => {
  return (
    <Header>
      <Section>
        <div className='flex items-center grow bg-white bg-opacity-40 rounded-xl mt-12 py-6 px-9'>
          <Link
            href={`/${lang}${routes.home}`}
            className={'mr-auto mt-auto'}
          >
            <Logo className='lg:w-[12.5rem] mt-auto w-32 z-50' />
          </Link>
          <Nav
            text={text}
            lang={lang}
            className='lg:flex hidden ml-auto '
          />
          <div className='flex gap-6 ml-auto lg:hidden'>
            <Sidebar text={text} lang={lang} className='flex-col text-black' />
          </div>
        </div>
      </Section>
    </Header>
  )
}
