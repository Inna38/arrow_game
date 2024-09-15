export interface IPlayGroundStepsState {
  currentValue: string | null
  enteredValue: string | null
  success: boolean | null
}

export interface IPlayGroundState {
  currentStep: number
  steps: IPlayGroundStepsState[]
  totalSuccessful: number
  totalUnsuccessful: number
}
