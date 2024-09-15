import type { TypographyProps as MaterialTypographyProps } from "@mui/material"
import { Typography as MaterialTypography } from "@mui/material"

import css from "./TypographyHeader.module.css"

export interface ITypographyHeader extends MaterialTypographyProps {}

const TypographyHeader: React.FC<ITypographyHeader> = props => {
  const { children, className = "" } = props

  return (
    <MaterialTypography
      variant="h3"
      {...props}
      className={`${css.text} ${className}`}
    >
      {children}
    </MaterialTypography>
  )
}

export default TypographyHeader
