import { useAppSelector } from "../../../../app/hooks"
import { MAP_ARROW } from "../../constants/constants"
import type { IMapArrow } from "../../constants/types"

const useKeyPressed = () => {
  const state = useAppSelector(state => state.playGround)

  if (state.steps.length) {
    const enteredValue = state.steps[state.currentStep - 1].enteredValue

    if (enteredValue) {
      return MAP_ARROW[enteredValue as keyof IMapArrow]
    }
  }
  return "⌛"
}

export default useKeyPressed
