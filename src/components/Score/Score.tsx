import { useAppSelector } from "../../app/hooks"
import TypographyHeader from "../UI/TypographyHeader/TypographyHeader"
import TypographyText from "../UI/TypographyText/TypographyText"
import Chip from "@mui/material/Chip"
import Stack from "@mui/material/Stack"

import css from "./Score.module.css"

const Score = () => {
  const state = useAppSelector(state => state.playGround)

  return (
    <>
      <TypographyHeader>Score</TypographyHeader>
      <TypographyText>
        On error, the "Consecutive successful hits" value is reset to zero
      </TypographyText>
      <Stack direction="row" spacing={1}>
        <Chip
          label={
            <>
              Errors:
              <span className={css.counter}>{state.totalUnsuccessful}</span>
            </>
          }
          variant="outlined"
          className={css.chipUnsuccess}
        />
        <Chip
          label={
            <>
              Successful:
              <span className={css.counter}>{state.totalSuccessful}</span>
            </>
          }
          variant="outlined"
          className={css.chipSuccess}
        />
      </Stack>
    </>
  )
}

export default Score
