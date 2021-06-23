import { useEffect } from 'react';
import { useState } from 'react';
import dangerImg from '../assets/images/danger.svg'

import { useModal } from '../hooks/useModal'

import '../styles/dangerous-action-modal.scss';

type DangerousActionModalType = {
  title: string,
  description: string,
  buttonText: string,
}

export function DangerousActionModal({ title, description, buttonText }: DangerousActionModalType) {

  const { isHidden, setIsHidden } = useModal();

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
        <img src={dangerImg} alt="Imagem de perigo" />
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="modal-buttons">

          <button onClick={toggleModal} className="btn-cancel">
            Cancelar
          </button>

          <button className="btn-confirm">
            {buttonText}
          </button>

        </div>
      </div>
    </div>
  );
}
