import { ReactNode } from 'react';

import { useModal } from '../../../hooks/useModal';

import { ModalWrapper } from './styles';

type ModalProps = {
  children: ReactNode;
};

export function ModalBackground(props: ModalProps): JSX.Element {
  const { children } = props;
  const { isHidden } = useModal();

  return (
    <ModalWrapper isHidden={isHidden} className="">
      {children}
    </ModalWrapper>
  );
}
