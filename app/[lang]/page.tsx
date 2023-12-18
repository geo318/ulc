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
  Anima,
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
            className='move-up text-white capitalize lg:mt-[10%] my-32 lg:mb-[15%] lg:leading-[1.1] leading-normal txt-balanced'
          >
            shipping has never been so easy
          </H>
        </Section>
        <article className='grid lg:grid-cols-2 max-w-layout mx-auto move-up'>
          <Section
            className='flex flex-col items-center justify-center bg-white aspect-2/1 py-8'
            id={routes.hAbout}
          >
            <Anima className='delay-200'>
              <h3 className='mt-auto font-bold text-4xl mr-auto'>
                {home.about['title-p1']}{' '}
                <span className='text-red'>{home.about['title-p2']}</span>
              </h3>
              <p className='capitalize mb-auto mt-10 lg:text-xl text-base'>
                {home.about.text}
              </p>
            </Anima>
          </Section>
        </article>
      </div>
      <Anima>
        <article className='lg:grid grid-cols-2 max-w-layout mx-auto'>
          <Image
            src={cube}
            alt='ulc cube'
            className='lg:aspect-2/1 aspect-square object-cover h-full'
          />
          <Section className='flex flex-col items-center justify-center bg-white aspect-2/1'>
            <h3 className='mt-auto font-bold text-4xl mr-auto'></h3>
            <p className='capitalize mb-auto mt-10 text-xl'>
              {home['offer-p1'].text}
            </p>
          </Section>

          <Section
            className='flex flex-col items-center justify-center bg-white aspect-2/1 mt-10'
            id={routes.hOffer}
          >
            <Anima>
              <h3 className='mt-auto font-bold text-4xl mr-auto'>
                {home['offer-p2']['title-p1']}{' '}
                <span className='text-red'>{home['offer-p2']['title-p2']}</span>
              </h3>
              <ul className='capitalize mb-auto mt-10 lg:text-xl text-base list-disc ml-5'>
                {home['offer-p2'].li.map((text, index) => (
                  <li key={index}>{text}</li>
                ))}
              </ul>
            </Anima>
          </Section>
          <Anima animationStart={['opacity-0']} animationEnd={['opacity-1']}>
            <Image
              src={ulc}
              alt='ulc cube'
              className='object-cover h-full mt-10 lg:mt-0'
            />
          </Anima>
        </article>
      </Anima>

      <section className='lg:mt-20 mt-10'>
        <Section className='my-10' id={routes.hNews}>
          <h3 className='mt-auto font-bold text-4xl mr-auto text-red'>
            {home.news.title}
          </h3>
        </Section>
        <Suspense fallback={<NewsSkeleton />}>
          <Anima>
            <NewsSlider lang={lang} action={home.news.action} />
          </Anima>
        </Suspense>
      </section>
      <section className='my-20 h-[100vw] relative flex flex-col'>
        <Anima
          animationStart={['[&_.frame-path]:stroke-[2]']}
          animationEnd={['[&_.frame-path]:stroke-[150]']}
          className='[&_.frame-path]:delay-1000 [&_.frame-path]:transition-all [&_.frame-path]:duration-500 [&_.frame-path]:ease-in-out'
        >
          <Frame className='w-full absolute inset-0 h-full' />
        </Anima>
        <article className='grid lg:grid-cols-2 max-w-layout mx-auto lg:mt-0 mt-20'>
          <div />
          <Section className='flex flex-col items-center justify-center bg-white aspect-2/1'>
            <Anima animationStart={['opacity-0']} animationEnd={['opacity-1']}>
              <h3 className='mt-auto font-bold text-4xl mr-auto'>
                {home['why-ulc']['title-p1']}{' '}
                <span className='text-red'>{home['why-ulc']['title-p2']}</span>?
              </h3>
              <p className='capitalize mb-auto mt-10 lg:text-xl'>
                {home['why-ulc'].text}
              </p>
            </Anima>
          </Section>
        </article>
        <article className='lg:grid lg:grid-cols-2 max-w-layout mx-auto lg:mt-auto mt-10 lg:mb-0 pb-10 hidden'>
          <Anima>
            <Section className='flex flex-col items-center justify-center aspect-2/1'>
              <h3 className='mt-auto font-bold text-4xl mr-auto'>
                {home['why-us']['title-p1']} {home['why-us']['title-p2']}?
              </h3>
              <p className='capitalize mb-auto mt-10 lg:text-xl'>
                {home['why-us'].text}
              </p>
            </Section>
          </Anima>
        </article>
      </section>
    </main>
  )
}
