import { styled } from '../../styles'

export const ToastContainer = styled('div', {
  width: '$96',
  height: '$20',
  background: '$gray800',
  borderRadius: '$xs',
  color: '$white',
  display: 'flex',
  justifyContent: 'space-between',
  boxSizing: 'border-box',
  padding: '$4',
  border: '1px solid $color$gray600',

  fontFamily: '$default',
})

export const ToastTitle = styled('div', {
  fontSize: '$xl',
  fontWeight: '$bold',
})

export const ToastText = styled('div', {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
  justifyContent: 'space-between',
})

export const ToastDate = styled('div', {
  fontSize: '$sm',
  color: '$gray200',
})

export const ToastClose = styled('div', {
  cursor: 'pointer',
})
