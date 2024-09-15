import { useEffect } from "react"
import { useAppDispatch } from "../../../../app/hooks"
import { setEnteredValue } from "../../store/slices"
import { MAP_ARROW } from "../../constants/constants"
import useKeyPressed from "./useKeyPressed"
import TypographyHeader from "../../../UI/TypographyHeader/TypographyHeader"
import TypographyText from "../../../UI/TypographyText/TypographyText"

import css from "./KeyPressed.module.css"

export interface IKeyPressed {
  isTimerActive: boolean
}

const KeyPressed: React.FC<IKeyPressed> = props => {
  const { isTimerActive } = props
  const dispatch = useAppDispatch()

  const keyPressElement = useKeyPressed()

  const handleKeyDown = (e: KeyboardEvent) => {
    if (
      Object.prototype.hasOwnProperty.call(MAP_ARROW, e.key) &&
      isTimerActive
    ) {
      dispatch(setEnteredValue(e.key))
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isTimerActive])

  return (
    <>
      <TypographyHeader>KeyPressed</TypographyHeader>
      <div className={css.container}>
        <TypographyText>
          Press the key corresponding to the key in "Random keys"
        </TypographyText>
        <div className={css.wrapper}>
          <span className={css.icon}>{keyPressElement}</span>
        </div>
      </div>
    </>
  )
}

export default KeyPressed
