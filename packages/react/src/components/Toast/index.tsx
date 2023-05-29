import { ComponentProps } from 'react'
import {
  ToastContainer,
  ToastDate,
  ToastTitle,
  ToastClose,
  ToastText,
} from './styles'
import { X } from 'phosphor-react'

export interface ToastProps extends ComponentProps<typeof X> {
  title: string
  date: string
}

export function Toast({ title, date, ...props }: ToastProps) {
  return (
    <ToastContainer>
      <ToastText>
        <ToastTitle>{title}</ToastTitle>
        <ToastDate>{date}</ToastDate>
      </ToastText>
      <ToastClose>
        <X size={20} {...props} />
      </ToastClose>
    </ToastContainer>
  )
}

Toast.displayName = 'Toast'
