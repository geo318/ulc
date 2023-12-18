import Link from 'next/link'
import { NavbarProps } from './types'
import { Logo, Section } from '/components'
import { routes } from '/config'
import { Nav } from './Nav'
import { Sidebar } from './Sidebar'
import { Header } from './Header'

export const Navbar: React.FC<NavbarProps> = ({ text, lang }) => {
  return (
    <Header>
      <Section className='px-0'>
        <div className='fade-in flex items-center grow bg-gradient-to-r from-[rgba(255,255,255,0.15)] to-[rgba(255,255,255,0.40)] bg-opacity-90 lg:rounded-xl lg:mt-12 lg:py-6 py-3 px-9'>
          <Link href={`/${lang}${routes.home}`} className={'mr-auto mt-auto'}>
            <Logo className='lg:w-[12.5rem] mt-auto w-32 z-50 glow' />
          </Link>
          <Nav text={text} lang={lang} className='lg:flex hidden ml-auto ' />
          <div className='flex gap-6 ml-auto lg:hidden'>
            <Sidebar text={text} lang={lang} className='flex-col text-black' />
          </div>
        </div>
      </Section>
    </Header>
  )
}
