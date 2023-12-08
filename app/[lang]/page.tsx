import Image from 'next/image'
import { PageProps } from '/types'
import { getDictionary } from '/lib'
import { bg, cube } from '/public'
import { H, Navbar, Section } from '/components'

export default async function Home({ params: { lang } }: PageProps) {
  const { home, shared } = await getDictionary(lang)

  return (
    <main className='flex min-h-screen flex-col'>
      <div className='relative'>
        <div className='absolute inset-0 -z-10'>
          <Image src={bg} alt='' className='object-cover h-full' />
        </div>
        <Navbar lang={lang} text={shared.header} />

        <Section className='flex flex-col items-center justify-center'>
          <H
            tag='h1'
            size='max'
            className='text-white capitalize mt-[10%] mb-[14%] leading-[1.1]'
          >
            shipping has never been so easy
          </H>
        </Section>
        <article className='grid grid-cols-2'>
          <Section className='flex flex-col items-center justify-center bg-white aspect-2/1'>
            <p className='capitalize my-auto leading-tight'>
              Lorem ipsum dolor sit amet consectetur. Mi nisl id cursus molestie
              dui facilisi. Turpis sit erat mus faucibus non massa diam amet. Id
              eros purus in sit nascetur. Erat magna cras sit id imperdiet nibh
              id. Mollis eu gravida pharetra sagittis arcu in phasellus.
            </p>
          </Section>
        </article>
      </div>
      <article className='grid grid-cols-2'>
        <Image src={cube} alt='ulc cube' className='object-contain' />
        <Section className='flex flex-col items-center justify-center bg-white aspect-2/1'>
          <p className='capitalize my-auto leading-tight'>
            Lorem ipsum dolor sit amet consectetur. Mi nisl id cursus molestie
            dui facilisi. Turpis sit erat mus faucibus non massa diam amet. Id
            eros purus in sit nascetur. Erat magna cras sit id imperdiet nibh
            id. Mollis eu gravida pharetra sagittis arcu in phasellus.
          </p>
        </Section>
      </article>
    </main>
  )
}
