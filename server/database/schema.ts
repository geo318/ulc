import { sqliteTable, text, int } from 'drizzle-orm/sqlite-core'

export const news = sqliteTable('news', {
  id: int('id').primaryKey(),
  title_eng: text('title_eng').notNull().unique(),
  title_geo: text('title_geo').notNull().unique(),
  title_rus: text('title_rus').notNull().unique(),
  content_eng: text('content_eng').notNull(),
  content_geo: text('content_geo').notNull(),
  content_rus: text('content_rus').notNull(),
  thumbnail: text('thumbnail').notNull(),
})
