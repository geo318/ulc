import { routes } from './routes'

export const navList = [
  { name: 'home', link: routes.home, menu: [] },
] as const

export const adminNavList = [
  { name: 'Add News', link: routes.addNews, menu: [] },
] as const
