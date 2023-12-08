'use client'

import { FieldValues, FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProps } from './types'

export const FormWrapper: React.FC<FormProps> = ({
  schema,
  formRef,
  onSubmit,
  children,
  className,
  buttonLabel = 'submit',
  defaultValues,
}) => {
  const form = useForm({
    mode: 'onBlur',
    resolver: zodResolver(schema),
    defaultValues: defaultValues as FieldValues,
  })

  return (
    <FormProvider {...form}>
      <form
        onSubmit={onSubmit && form.handleSubmit(onSubmit)}
        className={className}
        ref={formRef}
      >
        <div className='flex flex-col gap-2'>{children}</div>

        <button className='bg-blue-500 px-5 py-2 rounded-md text-white w-full mt-2 hover:bg-blue-600'>
          {buttonLabel}
        </button>
      </form>
    </FormProvider>
  )
}
