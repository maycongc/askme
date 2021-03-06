import { ReactNode, useState, useEffect } from 'react';

import { ModalBackground } from '../Background';

import closeRoomIcon from '../../../assets/images/modal-close.svg';
import deleteQuestionIcon from '../../../assets/images/modal-delete.svg';

import { useModal } from '../../../hooks/useModal';

import { ModalWrapper } from './styles';

type ModalInfoProps = {
  title: string;
  description: string;
};

type ModalProps = {
  buttonConfirm: ReactNode;
};

export function DangerousActionModal({
  buttonConfirm,
}: ModalProps): JSX.Element {
  const { setIsHidden, info } = useModal();

  const [modalInfo, setModalInfo] = useState<ModalInfoProps>();

  useEffect(() => {
    switch (info.type) {
      case 'room':
        setModalInfo({
          title: 'Encerrar sala',
          description: 'Tem certeza que você deseja encerrar esta sala?',
        });
        break;

      case 'question':
        setModalInfo({
          title: 'Excluir pergunta',
          description: 'Tem certeza que você deseja excluir esta pergunta?',
        });
        break;

      default:
        break;
    }
  }, [info.type]);

  function handleCancelButton() {
    setIsHidden(true);
  }

  // const show = {
  //   height: '100vh',
  // };

  // const hide = {
  //   height: 0,
  //   overflow: 'hidden',
  // };

  return (
    <ModalBackground>
      <ModalWrapper>
        <img
          src={info.type === 'room' ? closeRoomIcon : deleteQuestionIcon}
          alt="Imagem de perigo"
        />
        <h1>{modalInfo?.title}</h1>
        <p>{modalInfo?.description}</p>
        <div className="modal-buttons">
          <button
            type="button"
            onClick={handleCancelButton}
            className="btn-cancel"
          >
            Cancelar
          </button>

          {buttonConfirm}
        </div>
      </ModalWrapper>
    </ModalBackground>
  );
}
