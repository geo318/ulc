'use server'

import sharp from 'sharp'
import { writeFile } from '/utils'
import { db } from '/server'
import { revalidatePath } from 'next/cache'
import { eq } from 'drizzle-orm'
import { SQLiteTableWithColumns, TableConfig } from 'drizzle-orm/sqlite-core'

type Cruds = {
  model: SQLiteTableWithColumns<TableConfig & any>
  revalidate: string[]
  formData: FormData
  imgOptions?: Parameters<typeof writeFile>['3']
}

export const createModel = async ({
  model,
  revalidate,
  formData,
  imgOptions,
}: Cruds) => {
  try {
    const mappedEntries = await prepareFormData(formData, imgOptions)
    if ('error' in mappedEntries)
      return { error: mappedEntries.error as string }

    await db.insert(model).values(mappedEntries)
    revalidate.forEach((path) => revalidatePath(path, 'page'))

    return { success: 'record added' }
  } catch (e) {
    return {
      error: 'record already exists or something went wrong',
    }
  }
}

export const updateModel = async ({
  model,
  revalidate,
  formData,
  imgOptions,
}: Cruds) => {
  try {
    const updateValues = await prepareFormData(formData, imgOptions)
    if ('error' in updateValues) return { error: updateValues.error as string }

    await db
      .update(model)
      .set(updateValues)
      .where(eq(model.id, Number(formData.get('id'))))

    revalidate.forEach((path) => revalidatePath(path, 'page'))
    return { success: 'record updated' }
  } catch (e) {
    return {
      error: 'error updating record',
    }
  }
}

export const deleteModel = async ({ model, revalidate, formData }: Cruds) => {
  try {
    await db.delete(model).where(eq(model.id, Number(formData.get('id'))))
    revalidate.forEach((path) => revalidatePath(path, 'page'))

    return { success: 'record deleted' }
  } catch (e) {
    return {
      error: 'cannot delete record',
    }
  }
}

async function prepareFormData(
  formData: FormData,
  Options: Parameters<typeof writeFile>['3'] = {}
) {
  try {
    const formDataEntries = Array.from(formData.entries())
    const mappedEntries = {} as Record<string, string | number | boolean>

    for (const [key, val] of formDataEntries) {
      if (val instanceof Blob) {
        const buffer = Buffer.from(await val.arrayBuffer())
        const { path } = await writeFile([val], buffer, sharp(buffer), Options)
        mappedEntries[key] = path

        continue
      }

      mappedEntries[key] = val
    }
    return mappedEntries
  } catch (e) {
    return {
      error: 'error preparing form data',
    }
  }
}
