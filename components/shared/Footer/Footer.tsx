import {
  Anima,
  EmailIcon,
  Logo,
  PhoneIcon,
  PinIcon,
  Section,
} from '/components'
import { SharedText } from '/types'
import { locales, routes } from '/config'
import { Social } from './Social'
import { footer } from '/public'
import Image from 'next/image'

export const Footer = ({
  text,
  lang,
}: {
  text: SharedText['footer']
  lang: (typeof locales)[number]
}) => {
  return (
    <footer className='relative bg-app-blue-dark flex flex-col overflow-hidden lg:bg-transparent lg:pt-0 pt-8 lg:rounded-none rounded-t-3xl font-medium'>
      <Section id={routes.hContact}>
        <Anima
          animationStart={['translate-y-20']}
          animationEnd={['translate-y-0']}
        >
          <section className='grid lg:gap-0 gap-2 lg:grid-cols-2 divide-x divide-black lg:mt-32 mt-10 rounded-lg overflow-hidden bg-white bg-opacity-80 py-5'>
            <div className='lg:p-10 p-5 lg:pb-10 pb-0 flex flex-col gap-5'>
              <div className='flex gap-5'>
                <PhoneIcon className='[&_path]:fill-red shrink-0' />
                <ul className='flex flex-col gap-5'>
                  <li>
                    <a href='tel:+995 550 000 013' target='_blank'>
                      +995 550 000 013
                    </a>
                  </li>
                  <li>
                    <a href='tel:+995 574 013 013' target='_blank'>
                      +995 574 013 013
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='lg:p-10 p-5 flex flex-col gap-5'>
              <p className='flex gap-5 items-center'>
                <EmailIcon className='[&_path]:fill-red shrink-0' />
                <a href='mailto:contact@ulcterminal.ge' target='_blank'>
                  contact@ulcterminal.ge
                </a>
              </p>
              <p className='flex gap-5 items-center'>
                <PinIcon className='shrink-0' />
                Gardabani. Martyofi, Mon-Fri: 9:00 - 21:00
              </p>
            </div>
          </section>
        </Anima>
      </Section>
      <Image
        src={footer}
        alt='footer background'
        className='object-cover object-left-top -z-10 absolute w-full h-full'
      />
      <Section className='mt-auto max-w-[100rem] mx-auto flex flex-col-reverse lg:pb-10 lg:pt-32 md:px-14'>
        <section className='xl:col-span-1 text-center flex items-center mt-10 lg:mt-0 ml-auto w-full px-10'>
          <div className='flex flex-col mr-auto lg:gap-7 gap-2'>
            <Social />
          </div>
          <Logo className='lg:max-w-[11rem] max-w-[6rem] ml-auto [&_path]:fill-white [&_path:last-child]:fill-black' />
        </section>
      </Section>
      <p className='mr-auto text-center text-white lg:text-sm text-xs my-10 w-full'>
        {text.copy}
      </p>
    </footer>
  )
}
