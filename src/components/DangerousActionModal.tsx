import { useState } from 'react';
import { useEffect } from 'react';

import closeRoomIcon from '../assets/images/modal-close.svg'
import deleteQuestionIcon from '../assets/images/modal-delete.svg'

import { useModal } from '../hooks/useModal'

import '../styles/dangerous-action-modal.scss';

type DangerousActionModalProps = {
  type: string;
  handleModalAction: () => void;
}

type ModalInfoProps = {
  title: string;
  description: string;
  buttonText: string;
}

export function DangerousActionModal({ handleModalAction }: DangerousActionModalProps) {

  const { isHidden, setIsHidden, type } = useModal();

  const [modalInfo, setModalInfo] = useState<ModalInfoProps>();

  useEffect(() => {
    switch (type) {
      case 'room':
        setModalInfo({
          title: 'Encerrar sala',
          description: 'Tem certeza que você deseja encerrar esta sala?',
          buttonText: 'Sim, encerrar'
        });
        break;
      
      case 'question':
        setModalInfo({
          title: 'Excluir pergunta',
          description: 'Tem certeza que você deseja excluir esta pergunta?',
          buttonText: 'Sim, excluir'
        });
        break;
    
      default:
        break;
    }
  }, [type])

  function toggleModal() {
    setIsHidden(true);
  }

  const show = {
    height: '100vh',
  }

  const hide = {
    height: 0,
    overflow: 'hidden',
  }

  return (
    <div className="modal-body" style={isHidden ? hide : show}>
      <div className="modal-content">
        <img src={type === 'room' ? closeRoomIcon : deleteQuestionIcon} alt="Imagem de perigo" />
        <h1>{modalInfo?.title}</h1>
        <p>{modalInfo?.description}</p>
        <div className="modal-buttons">

          <button onClick={toggleModal} className="btn-cancel">
            Cancelar
          </button>

          <button onClick={handleModalAction} className="btn-confirm">
            {modalInfo?.buttonText}
          </button>

        </div>
      </div>
    </div>
  );
}
