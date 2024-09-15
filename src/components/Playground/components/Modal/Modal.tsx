import { useAppDispatch } from "../../../../app/hooks"
import Button from "../../../UI/Button/Button"
import TypographyText from "../../../UI/TypographyText/TypographyText"
import { resetStore } from "../../store/slices"
import { Modal as MaterialModal } from "@mui/material"

import css from "./Modal.module.css"

export interface IModalProps {
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>
  isSuccessful: boolean
}

const Modal: React.FC<IModalProps> = props => {
  const { setIsModal, isSuccessful } = props
  const dispatch = useAppDispatch()

  const handleCloseModal = () => {
    setIsModal(false)
    dispatch(resetStore())
  }
  return (
    <MaterialModal open onClose={handleCloseModal} className={css.wrapper}>
      <div
        className={`${css.modal} ${isSuccessful ? css.modalSuccess : css.modalUnsuccess}`}
      >
        <div className={css.modal_text_container}>
          {isSuccessful ? (
            <TypographyText className={css.modal_text}>
              Congratulation! <br /> You win
            </TypographyText>
          ) : (
            <TypographyText className={css.modal_text}>
              My regrets. <br /> You have lost this game
            </TypographyText>
          )}
        </div>

        <Button onClick={handleCloseModal} className={css.button}>
          Start New Game
        </Button>
      </div>
    </MaterialModal>
  )
}

export default Modal
