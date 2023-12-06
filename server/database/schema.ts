import { sqliteTable, text, int, integer } from 'drizzle-orm/sqlite-core'

export const user = sqliteTable('user', {
  id: int('id').primaryKey(),
  fullName: text('full_name'),
  phone: integer('phone'),
})

export const post = sqliteTable('post', {
  id: int('id').primaryKey(),
  title_eng: text('title_eng').notNull().unique(),
  title_geo: text('title_geo').notNull().unique(),
  content_eng: text('content_eng').notNull(),
  content_geo: text('content_geo').notNull(),
  type: text('type').notNull(),
  thumbnail: text('thumbnail').notNull(),
  banner: text('banner'),
  slug: text('slug').notNull().unique(),
  order: integer('order').$defaultFn(() => 0),
  link: text('link'),
})
