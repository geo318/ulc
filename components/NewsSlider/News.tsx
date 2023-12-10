'use client'

import { Section } from '/components'
import { Locale, News } from '/types'
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { SlideArrow } from './Arrows'
import { useRef, useState } from 'react'
import { useScreenWidth } from '/hooks'
import { Slide } from './Slide'
import { getLangKey } from '/utils'
import 'swiper/css'
import 'swiper/css/pagination'

export function News({
  news,
  lang,
  children,
}: {
  news: News[]
  lang: Locale
  children?: React.ReactNode
}) {
  const [swiper, setSwiper] = useState<SwiperClass | null>(null)
  const { isMobile, isLoading } = useScreenWidth(1024)
  const swiperRef = useRef(null)
  return (
    <Section className='w-max'>
      {isLoading && children}
      {!isLoading && isMobile === false && news.length > 4 && (
        <div className='relative'>
          <SlideArrow
            dir='left'
            swiper={swiper}
            className='-ml-10 top-1/2 -translate-y-1/2 absolute'
          />

          <Swiper
            modules={[Navigation]}
            onSwiper={(swiperRef) => setSwiper(swiperRef)}
            spaceBetween={50}
            slidesPerView={4}
            navigation={true}
            ref={swiperRef}
            loop
          >
            {news
              ?.slice()
              .reverse()
              .map((news, index) => {
                return (
                  <SwiperSlide
                    key={index}
                    className='shadow-xl rounded-3xl overflow-hidden !h-auto'
                  >
                    <Slide
                      description={news[`content_${getLangKey(lang)}`]}
                      title={news[`title_${getLangKey(lang)}`]}
                      path={news.thumbnail}
                    />
                  </SwiperSlide>
                )
              })}
          </Swiper>

          <SlideArrow
            dir='right'
            swiper={swiper}
            className='-mr-10 right-0 top-1/2 -translate-y-1/2 absolute swiper-button-next'
          />
        </div>
      )}
      {!isLoading && (isMobile === true || news.length < 5) && (
        <div className='flex flex-nowrap snap-mandatory overflow-x-auto gap-6 pb-3'>
          {news?.map((news, index) => {
            return (
              <div
                key={index}
                className='border-2 overflow-hidden rounded-3xl min-w-[15rem]'
              >
                <Slide
                  description={news[`content_${getLangKey(lang)}`]}
                  title={news[`title_${getLangKey(lang)}`]}
                  path={news.thumbnail}
                />
              </div>
            )
          })}
        </div>
      )}
    </Section>
  )
}