import { routes } from './routes'

export const navList = [
  { name: 'home-about', link: routes.hAbout, menu: [] },
  { name: 'home-offer', link: routes.hOffer, menu: [] },
  { name: 'home-news', link: routes.hNews, menu: [] },
  { name: 'home-contact', link: routes.hContact, menu: [] },
] as const

export const adminNavList = [
  { name: 'add News', link: routes.addNews, menu: [] },
] as const
