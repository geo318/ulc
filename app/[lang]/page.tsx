import Image from 'next/image'
import { PageProps } from '/types'
import { getDictionary } from '/lib'
import { bg, cube, ulc } from '/public'
import {
  H,
  Navbar,
  Section,
  NewsSkeleton,
  NewsSlider,
  Frame,
} from '/components'
import { Suspense } from 'react'
import { routes } from '/config'

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
            priority
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
          <Section
            className='flex flex-col items-center justify-center bg-white aspect-2/1'
            id={routes.hAbout}
          >
            <h3 className='mt-auto font-bold text-4xl mr-auto'>
              {home.about['title-p1']}{' '}
              <span className='text-red'>{home.about['title-p2']}</span>
            </h3>
            <p className='capitalize mb-auto mt-10 text-xl'>
              {home.about.text}
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
          <h3 className='mt-auto font-bold text-4xl mr-auto'></h3>
          <p className='capitalize mb-auto mt-10 text-xl'>
            {home['offer-p1'].text}
          </p>
        </Section>

        <Section
          className='flex flex-col items-center justify-center bg-white aspect-2/1'
          id={routes.hOffer}
        >
          <h3 className='mt-auto font-bold text-4xl mr-auto'>
            {home['offer-p2']['title-p1']}{' '}
            <span className='text-red'>{home['offer-p2']['title-p2']}</span>
          </h3>
          <ul className='capitalize mb-auto mt-10 text-xl list-disc ml-5'>
            {home['offer-p2'].li.map((text, index) => (
              <li key={index}>{text}</li>
            ))}
          </ul>
        </Section>
        <Image
          src={ulc}
          alt='ulc cube'
          className='aspect-video object-cover h-full'
        />
      </article>

      <section className='mt-20'>
        <Section className='my-10' id={routes.hNews}>
          <h3 className='mt-auto font-bold text-4xl mr-auto text-red'>
            {home.news}
          </h3>
        </Section>
        <Suspense fallback={<NewsSkeleton />}>
          <NewsSlider lang={lang} />
        </Suspense>
      </section>
      <section className='my-20 h-[100vw] relative flex flex-col'>
        <Frame className='w-full absolute inset-0 h-full' />
        <article className='grid grid-cols-2 max-w-layout mx-auto'>
          <div />
          <Section className='flex flex-col items-center justify-center bg-white aspect-2/1'>
            <h3 className='mt-auto font-bold text-4xl mr-auto'>
              {home['why-ulc']['title-p1']}{' '}
              <span className='text-red'>{home['why-ulc']['title-p2']}</span>?
            </h3>
            <p className='capitalize mb-auto mt-10 text-xl'>
              {home['why-ulc'].text}
            </p>
          </Section>
        </article>
        <article className='grid grid-cols-2 max-w-layout mx-auto mt-auto'>
          <Section className='flex flex-col items-center justify-center bg-white aspect-2/1'>
            <h3 className='mt-auto font-bold text-4xl mr-auto'>
              {home['why-us']['title-p1']} {home['why-us']['title-p2']}?
            </h3>
            <p className='capitalize mb-auto mt-10 text-xl'>
              {home['why-us'].text}
            </p>
          </Section>
        </article>
      </section>
    </main>
  )
}
