import { CSSProperties, FC, MouseEvent, ReactNode } from 'react';
import s from './Button.module.scss';

interface IButtonProps {
  children: ReactNode;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  style?: CSSProperties;
}

export const Button: FC<IButtonProps> = ({ children, ...props }) => {
  return (
    <button {...props} className={s.button}>
      {' '}
      {children}{' '}
    </button>
  );
};
