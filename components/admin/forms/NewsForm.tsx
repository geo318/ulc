'use client'

import { NewsProps } from './types'
import { FormWrapper, Input } from '/components'
import { useForm } from './useForm'
import { newsSchema } from '/schema'

export const NewsForm = ({
  query,
  action,
  deleteAction,
  defaultValues,
}: NewsProps) => {
  const { param, MessageBox, handleSubmit, handleDelete, ref } = useForm(
    action,
    query,
    deleteAction
  )

  return (
    <>
      <FormWrapper
        schema={param ? newsSchema(!!param) : newsSchema()}
        onSubmit={handleSubmit}
        formRef={ref}
        defaultValues={defaultValues?.find((c) => c.id === Number(param))}
      >
        {MessageBox}
        {param && <input name='id' defaultValue={param} hidden readOnly />}
        <Input name='title_eng' label='Title Eng' />
        <Input name='title_geo' label='Title Geo' />
        <Input name='title_rus' label='Title Rus' />
        <Input name='content_eng' label='Description eng' />
        <Input name='content_geo' label='Description geo' />
        <Input name='content_rus' label='Description rus' />
        <Input name='thumbnail' label='Thumbnail image' type='file' />
      </FormWrapper>
      {param && deleteAction && (
        <form action={handleDelete}>
          <input name='id' value={param} hidden readOnly />
          <input
            type='submit'
            value='Delete'
            className='cursor-pointer hover:underline text-lg text-red-600 mt-5 float-right'
          />
        </form>
      )}
    </>
  )
}
