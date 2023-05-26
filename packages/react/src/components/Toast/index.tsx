import {
  ToastContainer,
  ToastDate,
  ToastTitle,
  ToastClose,
  ToastText,
} from './styles'
import { X } from 'phosphor-react'

export interface ToastProps {
  duration: number
  title: string
  date: string
}

export function Toast({ title, date }: ToastProps) {
  return (
    <ToastContainer>
      <ToastText>
        <ToastTitle>{title}</ToastTitle>
        <ToastDate>{date}</ToastDate>
      </ToastText>
      <ToastClose>
        <X />
      </ToastClose>
    </ToastContainer>
  )
}

Toast.displayName = 'Toast'
