import { EmailIcon, Logo, PhoneIcon, PinIcon, Section } from '/components'
import { SharedText } from '/types'
import { locales } from '/config'
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
    <footer className='relative bg-app-blue-dark flex flex-col overflow-hidden lg:bg-transparent bg-[#E7DAD2] lg:pt-0 pt-8 lg:rounded-none rounded-t-3xl font-medium'>
      <Section>
        <section className='grid grid-cols-2 divide-x divide-black mt-32 rounded-lg overflow-hidden bg-white bg-opacity-80 py-5'>
          <div className='p-10 flex flex-col gap-5'>
            <div className='flex gap-5'>
              <PhoneIcon className='[&_path]:fill-red' />
              <ul className='flex flex-col gap-5'>
                <li>550 000 013</li>
                <li>574 013 013</li>
              </ul>
            </div>
          </div>
          <div className='p-10 flex flex-col gap-5'>
            <p className='flex gap-5 items-center'>
              <EmailIcon className='[&_path]:fill-red' />
              contact@ulcterminal.ge
            </p>
            <p className='flex gap-5 items-center'>
              <PinIcon />
              Gardabani. Martyofi, Mon-Fri: 9:00 - 21:00
            </p>
          </div>
        </section>
      </Section>
      <Image
        src={footer}
        alt='footer background'
        className='object-cover object-left-top -z-10 absolute w-full h-full'
      />
      <Section className='mt-auto max-w-[100rem] mx-auto lg:grid xl:grid-cols-2 grid-cols-3 flex flex-col-reverse pb-10 pt-[15rem] md:px-14'>
        <section />
        <section className='xl:col-span-1 text-center flex lg:flex-col gap-3 items-center mt-10 lg:mt-0 ml-auto'>
          <Logo className='lg:max-w-[11rem] max-w-[6rem] mr-auto [&_path]:fill-white [&_path:last-child]:fill-black' />
          <p className='text-left txt-balanced text-secondary text-lg mr-auto lg:block hidden'></p>
          <div className='flex flex-col lg:mr-auto lg:ml-0 mr-0 ml-auto lg:gap-7 gap-2'>
            <Social />
          </div>
        </section>
      </Section>
      <p className='mr-auto text-center text-white lg:text-sm text-xs my-10 w-full'>
        {text.copy}
      </p>
    </footer>
  )
}
