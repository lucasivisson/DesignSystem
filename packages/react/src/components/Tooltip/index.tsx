import { ComponentProps } from 'react'
import { TooltipContainer } from './styles'

export interface TooltipProps extends ComponentProps<typeof TooltipContainer> {
  date: string
  available: string
}

export function Tooltip({ date, available, ...props }: TooltipProps) {
  return (
    <TooltipContainer {...props}>
      <div>
        {date} - {available}
      </div>
    </TooltipContainer>
  )
}
