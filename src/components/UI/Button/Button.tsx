import css from "./Button.module.css"
import type { ButtonProps as MaterialButtonProps } from "@mui/material"
import { Button as MaterialButton } from "@mui/material"

export interface IButtonProps extends MaterialButtonProps {}

const Button: React.FC<IButtonProps> = props => {
  const { children, className = "" } = props
  return (
    <>
      <MaterialButton
        variant="contained"
        size="small"
        {...props}
        className={`${css.button} ${className}`}
      >
        {children}
      </MaterialButton>
    </>
  )
}

export default Button
