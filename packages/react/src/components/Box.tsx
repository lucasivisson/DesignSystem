import { styled } from '@stitches/react'
import { ComponentProps } from 'react'

export const Box = styled('div', {
  padding: '$4',
  borderRadius: '$md',
  backgroundColor: '$gray800',
  border: '1px solid $gray600',
  width: '$4',
  height: '$4',
})

export interface BoxProps extends ComponentProps<typeof Box> {}
