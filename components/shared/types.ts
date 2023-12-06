import { Schema } from 'zod'

export type ButtonProps = JSX.IntrinsicElements['button'] & {
  variant?: 'primary' | 'secondary'
}

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export type CustomHeading = {
  tag: HeadingTag & {}
  size?: 'md' | 'lg' | 'sm' | 'xl'
} & JSX.IntrinsicElements[HeadingTag]
