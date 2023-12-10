import { createInsertSchema } from 'drizzle-zod'
import { locales } from '/config'
import { getDictionary } from '/lib'
import { news } from '/server'
import { z } from 'zod'

export type SetState<T> = React.Dispatch<React.SetStateAction<T>>
export type Locale = (typeof locales)[number]

export type Translation = Awaited<ReturnType<typeof getDictionary>>
export type HomeText = Translation['home']
export type SharedText = Translation['shared']

export type PageProps = { params: { lang: Locale } }

export type FormAction = (
  formData: FormData
) => Promise<{ success?: boolean | string; error?: string }>

export type Entries<T extends Record<string, any>> = [keyof T, T[keyof T]][]
export type FormValues = Record<
  string,
  string | number | Blob | undefined | null
>
export const insertNewsSchema = createInsertSchema(news)

export type News = z.infer<typeof insertNewsSchema>
