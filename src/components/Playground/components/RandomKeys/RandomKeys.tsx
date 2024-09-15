import { useAppSelector } from "../../../../app/hooks"
import { MAP_ARROW } from "../../constants/constants"
import type { IMapArrow } from "../../constants/types"
import type { IPlayGroundStepsState } from "../../store/types"
import TypographyHeader from "../../../UI/TypographyHeader/TypographyHeader"
import TypographyText from "../../../UI/TypographyText/TypographyText"
import loader from "./loader.svg"
import css from "./RandomKeys.module.css"

export interface IRandomKeysProps {
  isTimerActive: boolean
}

const RandomKeys: React.FC<IRandomKeysProps> = props => {
  const { isTimerActive } = props
  const state = useAppSelector(state => state.playGround)

  const getStylesRandomKeys = (element: IPlayGroundStepsState): string => {
    if (element.success !== null) {
      if (element.success) {
        return css.iconSuccess
      }
      if (!element.success) {
        return css.iconUnsuccess
      }
    }
    return css.icon
  }

  return (
    <>
      <TypographyHeader>Random keys</TypographyHeader>
      {state.steps.length === 0 ? (
        isTimerActive ? (
          <div className={css.wrapper}>
            <span className={css.icon}>
              <img src={loader} alt="loader" className={css.loader} />
            </span>
          </div>
        ) : (
          <TypographyText>
            Press "Play" to start the game and wait for the first arrow to
            appear
          </TypographyText>
        )
      ) : (
        <div className={css.wrapper}>
          {state.steps.map((element, index) => (
            <span
              key={index}
              className={`${getStylesRandomKeys(element)} ${css.icon}`}
            >
              {MAP_ARROW[element.currentValue as keyof IMapArrow]}
            </span>
          ))}
        </div>
      )}
    </>
  )
}

export default RandomKeys
