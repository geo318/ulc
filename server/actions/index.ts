import { db, news } from '/server'

export const getNews = async () => await db.select().from(news)
