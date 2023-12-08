import { FormAction, News } from '/types'

export type NewsProps = FormProps<News>

export type FormProps<T> = {
  action: FormAction
  deleteAction?: FormAction
  query?: string | null
  defaultValues?: T[] | null
}
