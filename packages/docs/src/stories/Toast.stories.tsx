import { Box, Toast, ToastProps } from '@lucas-ignite-ui/react'
import type { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Form/Toast',
  component: Toast,
  tags: ['autodocs'],
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          css={{
            display: 'flex',
            flexDirection: 'row',
            gap: '$2',
            backgroundColor: '$gray900',
          }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {
  args: {
    title: 'Agendamento Realizado',
    date: 'Quarta-feira, 23 de Outubro as 16h',
  },
}
