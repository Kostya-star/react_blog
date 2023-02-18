import { FC, MouseEvent } from 'react'
import s from './Button.module.scss'

interface IButtonProps {
  title: string
  onClick: (e: MouseEvent<HTMLButtonElement>) => void
}

export const Button: FC<IButtonProps> = ({ title, ...props }) => {
  return (
    <button {...props} className={s.button}>{title}</button>
  )
}
