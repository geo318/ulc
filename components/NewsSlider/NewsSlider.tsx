'use server'

import { H, Section } from '..'
import { News } from './News'
import { getNews } from '/server'
import { Locale } from '/types'

export async function NewsSlider({
  lang,
  action,
}: {
  lang: Locale
  action: string
}) {
  const certificates = await getNews()

  return (
    <News news={certificates} lang={lang} action={action}>
      <NewsSkeleton />
    </News>
  )
}

export const NewsSkeleton = () => (
  <Section className='w-full max-w-full overflow-x-auto'>
    <H tag='h2' size='md' className='lg:mb-16 mb-4'>
      <div className='animate-pulse w-1/3 h-14 bg-zinc-200 rounded-md' />
    </H>
    <div className='grid lg:grid-cols-4 grid-cols-1 gap-10 w-full h-72'>
      <div className='animate-pulse w-full aspect-video bg-zinc-200 rounded-[2rem]' />
      <div className='animate-pulse w-full aspect-video bg-zinc-200 rounded-[2rem] lg:block hidden' />
      <div className='animate-pulse w-full aspect-video bg-zinc-200 rounded-[2rem] lg:block hidden' />
      <div className='animate-pulse w-full aspect-video bg-zinc-200 rounded-[2rem] lg:block hidden' />
    </div>
  </Section>
)
