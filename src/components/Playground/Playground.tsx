import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { setCurrentStep, setSteps, setUnsuccess } from "./store/slices"
import Controls from "./components/Controls/Controls.js"
import RandomKeys from "./components/RandomKeys/RandomKeys"
import KeyPressed from "./components/KeyPressed/KeyPressed"
import Score from "../Score/Score"
import Modal from "./components/Modal/Modal"
import Description from "./components/Description/Description"

import css from "./Playground.module.css"

const Playground: React.FC = () => {
  const dispatch = useAppDispatch()
  const state = useAppSelector(state => state.playGround)

  const [isTimerActive, setIsTimerActive] = useState<boolean>(false)
  const [isModal, setIsModal] = useState<boolean>(false)
  const [isSuccessful, setIsSuccessful] = useState<boolean>(false)

  let timerHandle: any = null

  useEffect(() => {
    if (isTimerActive) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      timerHandle = setInterval(() => {
        dispatch(setUnsuccess())
        dispatch(setCurrentStep())
        dispatch(setSteps())
      }, 2000)
    } else {
      clearInterval(timerHandle)
    }

    return () => {
      clearInterval(timerHandle)
    }
  }, [isTimerActive, dispatch])

  useEffect(() => {
    if (state.totalSuccessful === 3) {
      setIsSuccessful(true)
      setIsTimerActive(false)
      setIsModal(true)
    } else if (state.totalUnsuccessful === 3) {
      setIsSuccessful(false)
      setIsTimerActive(false)
      setIsModal(true)
    }
  }, [state.totalSuccessful, state.totalUnsuccessful])

  return (
    <div className={css.container}>
      <div className={css.column}>
        <RandomKeys isTimerActive={isTimerActive} />

        <KeyPressed isTimerActive={isTimerActive} />

        <Score />
      </div>

      <div className={css.column}>
        <Description />

        <Controls
          isTimerActive={isTimerActive}
          setIsTimerActive={setIsTimerActive}
        />
      </div>

      {isModal && <Modal setIsModal={setIsModal} isSuccessful={isSuccessful} />}
    </div>
  )
}

export default Playground
