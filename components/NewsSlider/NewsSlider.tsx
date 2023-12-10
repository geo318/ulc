'use server'

import { H, Section } from '..'
import { News } from './News'
import { getNews } from '/server'
import { Locale } from '/types'

export async function NewsSlider({ lang }: { lang: Locale }) {
  const certificates = await getNews()

  return (
    <News news={certificates} lang={lang}>
      <NewsSkeleton />
    </News>
  )
}

export const NewsSkeleton = () => (
  <Section>
    <H tag='h2' size='md' className='lg:mb-16 mb-4'>
      <div className='animate-pulse w-1/3 h-14 bg-zinc-200  rounded-md' />
    </H>
    <div className='flex basis-1/4 gap-10 w-full h-72'>
      <div className='animate-pulse w-full aspect-video bg-zinc-200 rounded-[2rem]' />
      <div className='animate-pulse w-full aspect-video bg-zinc-200 rounded-[2rem]' />
      <div className='animate-pulse w-full aspect-video bg-zinc-200 rounded-[2rem]' />
      <div className='animate-pulse w-full aspect-video bg-zinc-200 rounded-[2rem]' />
    </div>
  </Section>
)
