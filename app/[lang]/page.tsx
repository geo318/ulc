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
              ჩვენს <span className='text-red'>შესახებ</span>
            </h3>
            <p className='capitalize mb-auto mt-10 text-xl'>
              კომპანიის შექმნის იდეა დაიბადა 2021 წელს და მისი შექმნის მიზანი
              არის არსებულ ბაზარზე მომსახურების დონის ამაღლება, ევროპული
              სტანდარტის დანერგვა, ერთგვარი ჰაბის შექმნა რომელიც ხელს შეუწყობს
              საქართველოს ტერიტორიაზე საქონლის ტვირთბრუნვის გაზრდას და
              გაამარტივებს ურთიერთობას გადამხდელსა და სახელმწიფოს შორის.
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
            სასაწყობო მეურნეობა გაძლევს საშუალებას დაამუშავო ყველა ტიპის და
            სირთულის როგორც საბაჟო კონტროლს დაქვემდებარებული ასევე კომერციული
            დანიშნულების ტვირთები და განახორციელო ყველა სახის საბაჟო პროცედურა:
          </p>
        </Section>

        <Section
          className='flex flex-col items-center justify-center bg-white aspect-2/1'
          id={routes.hOffer}
        >
          <h3 className='mt-auto font-bold text-4xl mr-auto'>
            ჩვენ <span className='text-red'>გთავაზობთ</span>
          </h3>
          <ul className='capitalize mb-auto mt-10 text-xl list-disc ml-5'>
            <li>
              საბაჟო კონტროლს დაქვემდებარებული ტვირთის შენახვა წინასწარ
              განსაზღვრული ვადით.
            </li>
            <li>ტვირთის უსაფრთხო დამუშავება. </li>
            <li>საბაჟო საბროკერო მომსახურება.</li>
            <li>საბაჟო დეკლარაციის შევსება. </li>
            <li>კონსულტაცია საბაჟო საკითხებში.</li>
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
          <h3 className='mt-auto font-bold text-4xl mr-auto text-red'>News</h3>
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
              რატომ <span className='text-red'>ULC</span>?
            </h3>
            <p className='capitalize mb-auto mt-10 text-xl'>
              კომპანია მომხმარებელს სთავაზობს კვალიფიციურ პერსონალზე დაფუძნებულ
              გადაწყვეტილებებს, რაც პირდაპირპროპორციულად ხელს უწყობს ჩვენი
              მომხმარებლის ხარჯების შემცირებას და ანიჭებს უპირატესობას
              კონკურენტულ ბაზარზე;
            </p>
          </Section>
        </article>
        <article className='grid grid-cols-2 max-w-layout mx-auto mt-auto'>
          <Section className='flex flex-col items-center justify-center bg-white aspect-2/1'>
            <h3 className='mt-auto font-bold text-4xl mr-auto'>
              რატომ ჩვენთან?
            </h3>
            <p className='capitalize mb-auto mt-10 text-xl'>
              თანამედროვე ტექნიკით აღჭურვილი სასაწყობო სივრცე რომელიც
              უზრუნველყოფს ტვირთმფლობელის საქონლის უსაფრთხო დამუშავებას და ხელს
              შეუწყობს ყოველგვარი დაბრკოლებების გარეშე ტვირთის დანიშნულების
              ადგილამდე დროულ მიწოდებას;
            </p>
          </Section>
        </article>
      </section>
    </main>
  )
}
