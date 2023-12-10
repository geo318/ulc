import Image from 'next/image'
import Link from 'next/link'
import { Suspense } from 'react'
import {
  H,
  Portal,
  Spinner,
  CloseModal,
  NewsForm,
  SearchParamsWrapper,
} from '/components'
import { createNews, editNews, deleteNews, getNews } from '/server'
import { getImage } from '/utils'

export default async function Discovery() {
  const news = await getNews()

  return (
    <div className='grid grid-cols-2 gap-10'>
      <section className='pb-10'>
        <H tag='h1' size='md' className='mb-20 text-center'>
          Edit News section
        </H>
        <Suspense fallback={<Spinner />}>
          <NewsForm action={createNews} />
        </Suspense>
      </section>

      <section>
        <H tag='h1' size='md' className='mb-20 text-center'>
          Upload news here
        </H>
        <div className='grid grid-cols-3 gap-5 capitalize'>
          <Suspense fallback={<Spinner />}>
            {!news.length
              ? 'no news yet'
              : news
                  .reverse()
                  .map((h) => (
                    <div
                      key={h.id}
                      className='flex flex-col gap-3 border border-slate-400 rounded-lg hover:shadow-lg p-5 divide-y-2 divide-solid'
                    >
                      {h.title_eng}
                      <Image
                        src={getImage`${h.thumbnail}`}
                        className='object-cover w-full h-full aspect-square'
                        width={100}
                        height={100}
                        alt=''
                      />
                      <div className='flex gap-3 ml-auto'>
                        <Link href={`?edit=${h.id}`}>Edit</Link>
                      </div>
                    </div>
                  ))}
          </Suspense>
        </div>
      </section>

      <Suspense fallback={<Spinner />}>
        <SearchParamsWrapper query={['edit']}>
          <Portal>
            <div className='flex flex-col bg-white max-w-lg mx-auto mt-20 py-5 rounded-xl'>
              <div className='max-h-[80vh] overflow-y-auto px-10 pt-2 pb-10'>
                <div className='flex py-3'>
                  <h3 className='font-lg font-bold'>Edit News section </h3>
                  <CloseModal className='p-0' />
                </div>
                <NewsForm
                  action={editNews}
                  deleteAction={deleteNews}
                  defaultValues={news}
                  query='edit'
                />
              </div>
            </div>
          </Portal>
        </SearchParamsWrapper>
      </Suspense>
    </div>
  )
}
