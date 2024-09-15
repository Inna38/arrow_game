import css from "./Controls.module.css"
import Button from "../../../UI/Button/Button"
import { PlayArrow, Pause } from "@mui/icons-material"

export interface IControlsProps {
  isTimerActive: boolean
  setIsTimerActive: React.Dispatch<React.SetStateAction<boolean>>
}

const Controls: React.FC<IControlsProps> = props => {
  const { isTimerActive, setIsTimerActive } = props

  return (
    <div>
      <Button
        onClick={() => setIsTimerActive(true)}
        disabled={isTimerActive}
        endIcon={<PlayArrow />}
        className={css.button}
      >
        Play
      </Button>

      <Button
        onClick={() => setIsTimerActive(false)}
        disabled={!isTimerActive}
        endIcon={<Pause />}
        className={css.button}
      >
        Pause
      </Button>
    </div>
  )
}

export default Controls
