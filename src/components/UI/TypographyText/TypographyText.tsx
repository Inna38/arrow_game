import type { TypographyProps as MaterialTypographyProps } from "@mui/material"
import { Typography as MaterialTypography } from "@mui/material"

import css from "./TypographyText.module.css"

export interface ITypographyText extends MaterialTypographyProps {}

const TypographyText: React.FC<ITypographyText> = props => {
  const { children, className = "" } = props

  return (
    <MaterialTypography {...props} className={`${css.text} ${className}`}>
      {children}
    </MaterialTypography>
  )
}

export default TypographyText
