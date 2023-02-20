import s from './Modal.module.scss';
import { FC, ReactNode } from 'react';

interface IModalProps {
  isVisible: boolean;
  setIsVisible: (val: boolean) => void;
  children: ReactNode;
}

export const Modal: FC<IModalProps> = ({ children, isVisible, setIsVisible }) => {
  return (
    <div
      className={`${s.modal} ${isVisible && s.modal_active}`}
      onClick={() => setIsVisible(false)}
    >
      <div className={s.modal__content} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};
