import z from 'zod'

const MAX_SIZE = 5 * 1024 * 1024
const MIME_TYPES = [
  'image/jpg',
  'image/jpeg',
  'image/png',
  'image/webp',
  'image/svg+xml',
]

export const imgSchemaArray = z
  .custom<FileList>()
  .refine((file: FileList) => file?.length, 'please, select an image')
  .refine((file) => file?.[0]?.size <= MAX_SIZE, 'image must be less than 5mb')
  .refine((file) => MIME_TYPES.includes(file?.[0]?.type), 'incorrect file type')

export const imgSchema = imgSchemaArray.transform((file) => file?.[0])

export const imgSchemaOptional = z
  .custom<FileList>()
  .refine(
    (file: FileList) => file?.[0] == null || file?.length,
    'please, select an image'
  )
  .refine(
    (file) => file?.[0] == null || file?.[0]?.size <= MAX_SIZE,
    'image must be less than 5mb'
  )
  .refine(
    (file) => file?.[0] == null || MIME_TYPES.includes(file?.[0]?.type),
    'incorrect file type'
  )
  .transform((file) => file?.[0])

export const newsSchema = (optional?: boolean) =>
  z.object({
    id: z.coerce.number().min(0).optional(),
    title_eng: z.string().min(3).max(200),
    title_geo: z.string().min(3).max(200),
    title_rus: z.string().min(3).max(200),
    content_eng: z.string().min(3).max(800),
    content_geo: z.string().min(3).max(800),
    content_rus: z.string().min(3).max(800),
    thumbnail: optional ? z.string().or(imgSchema) : imgSchema,
    link: z.string().url(),
  })
