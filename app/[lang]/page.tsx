import Image from 'next/image'
import { PageProps } from '/types'
import { getDictionary } from '/lib'
import { bg, cube, ulc } from '/public'
import { H, Navbar, Section } from '/components'

export default async function Home({ params: { lang } }: PageProps) {
  const { home, shared } = await getDictionary(lang)

  return (
    <main className='flex min-h-screen flex-col'>
      <div className='relative'>
        <div className='absolute inset-0 -z-10'>
          <Image
            src={bg}
            alt='main background banner'
            className='object-cover h-full w-full'
          />
        </div>
        <Navbar lang={lang} text={shared.header} />

        <Section className='flex flex-col items-center justify-center'>
          <H
            tag='h1'
            size='max'
            className='text-white capitalize mt-[10%] mb-[15%] leading-[1.1] txt-balanced'
          >
            shipping has never been so easy
          </H>
        </Section>
        <article className='grid grid-cols-2 max-w-layout mx-auto'>
          <Section className='flex flex-col items-center justify-center bg-white aspect-2/1'>
            <h3 className='mt-auto font-bold text-4xl mr-auto'>
              About <span className='text-red'>Us</span>
            </h3>
            <p className='capitalize mb-auto mt-10 text-xl'>
              Lorem ipsum dolor sit amet consectetur. Mi nisl id cursus molestie
              dui facilisi. Turpis sit erat mus faucibus non massa diam amet. Id
              eros purus in sit nascetur. Erat magna cras sit id imperdiet nibh
              id. Mollis eu gravida pharetra sagittis arcu in phasellus.
            </p>
          </Section>
        </article>
      </div>
      <article className='grid grid-cols-2 max-w-layout mx-auto'>
        <Image
          src={cube}
          alt='ulc cube'
          className='aspect-2/1 object-cover h-full'
        />

        <Section className='flex flex-col items-center justify-center bg-white aspect-2/1'>
          <h3 className='mt-auto font-bold text-4xl mr-auto'>
            How does it <span className='text-red'>Work</span>
          </h3>
          <p className='capitalize mb-auto mt-10 text-xl'>
            Lorem ipsum dolor sit amet consectetur. Mi nisl id cursus molestie
            dui facilisi. Turpis sit erat mus faucibus non massa diam amet. Id
            eros purus in sit nascetur. Erat magna cras sit id imperdiet nibh
            id. Mollis eu gravida pharetra sagittis arcu in phasellus.
          </p>
        </Section>

        <Section className='flex flex-col items-center justify-center bg-white aspect-2/1'>
          <h3 className='mt-auto font-bold text-4xl mr-auto'>
            How does it <span className='text-red'>Work</span>
          </h3>
          <p className='capitalize mb-auto mt-10 text-xl'>
            Lorem ipsum dolor sit amet consectetur. Mi nisl id cursus molestie
            dui facilisi. Turpis sit erat mus faucibus non massa diam amet. Id
            eros purus in sit nascetur. Erat magna cras sit id imperdiet nibh
            id. Mollis eu gravida pharetra sagittis arcu in phasellus.
          </p>
        </Section>
        <Image
          src={ulc}
          alt='ulc cube'
          className='aspect-video object-cover h-full'
        />
      </article>

      <Section>
        Cert
      </Section>
    </main>
  )
}
