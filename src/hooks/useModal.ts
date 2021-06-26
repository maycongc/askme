import { useContext } from 'react';
import { ModalContext, ModalType } from '../contexts/ModalContext';

export function useModal(): ModalType {
  const value = useContext(ModalContext);

  return value;
}
