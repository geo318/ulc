import type { Metadata } from 'next'
import { FbChat, Footer, Navbar } from '/components'
import { Locale } from '/types'
import { getDictionary } from '/lib'
import { locales } from '/config'
import '../globals.css'

export const metadata: Metadata = {
  title: 'ULC Terminal',
  description: 'Chocolates and sweets manufacturer',
}

export default async function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  const { shared } = await getDictionary(lang)
  return (
    <>
      {children}
      <FbChat />
      <Footer text={shared.footer} lang={lang} />
    </>
  )
}

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}
