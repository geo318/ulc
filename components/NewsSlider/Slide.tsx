import Image from 'next/image'
import { H } from '/components'
import { getImage } from '/utils'

export const Slide = ({ title = '', description = '', path = '' }) => (
  <div className='flex flex-col'>
    <Image
      src={getImage`${path}`}
      alt=''
      width={300}
      height={300}
      className='w-full h-full aspect-video object-cover'
    />
    <div className='p-4'>
      <H
        tag='h3'
        className='line-clamp-2 text-ellipsis overflow-hidden'
        size='sm'
        title={title}
      >
        {title}
      </H>
      <p
        className='lg:text-base text-xs leading-normal mt-2 line-clamp-5 text-ellipsis overflow-hidden'
        title={description}
      >
        {description}
      </p>
    </div>
  </div>
)
