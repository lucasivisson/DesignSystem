import { styled } from '../../styles'

export const ToastContainer = styled('div', {
  width: '$80',
  height: '$20',
  background: 'red',
  borderRadius: '$xs',
  color: '$white',
  display: 'flex',
  justifyContent: 'space-between',
  boxSizing: 'border-box',
  padding: '$4',
})

export const ToastTitle = styled('div', {})

export const ToastText = styled('div', {})

export const ToastDate = styled('div', {})

export const ToastClose = styled('div', {})
