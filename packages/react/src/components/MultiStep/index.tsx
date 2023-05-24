import { MultiStepContainer } from './styles'

export interface MultiStepProps {
  size: number
  currentStep?: number
}

export function MultiStep() {
  return <MultiStepContainer></MultiStepContainer>
}
