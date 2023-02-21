import { ChangeEvent, FC } from 'react';
import s from './Input.module.scss';

interface InputProps {
  type: string;
  placeholder: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean
}

export const Input: FC<InputProps> = ({ ...props }) => {
  return <input {...props} className={s.input} />;
};
