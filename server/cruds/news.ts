'use server'

import { createModel, deleteModel, updateModel } from './helper'
import { news as model } from '/server'
import { routes } from '/config'

const revalidate = [routes.addNews, `${routes.home}[lang]`]

export async function createNews(formData: FormData) {
  return createModel({ formData, model, revalidate })
}

export async function editNews(formData: FormData) {
  return updateModel({ formData, model, revalidate })
}

export async function deleteNews(formData: FormData) {
  return deleteModel({ formData, model, revalidate })
}
