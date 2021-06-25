import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

import logoImg from '../assets/images/logo.svg';
import copyImg from '../assets/images/copy.svg';

import { UserInfo } from '../components/UserInfo';

import { useModal } from '../hooks/useModal';
import { useAuth } from '../hooks/useAuth';

import '../styles/header.scss';

type HeaderProps = {
  code: string,
  authorId: string;
}

export function RoomHeader(props: HeaderProps) {
  const { user } = useAuth();
  const { isHidden, setIsHidden, setType } = useModal();
  const { authorId, code: roomId } = props;

  function copyToClipboard() {
    navigator.clipboard.writeText(roomId);

    toast('Successfully copied to clipboard.', {
      icon: '✔️',
      duration: 3000,
      style: {
        border: '1px solid #5ac92a',
        color: '#5ac92a',
        font: "500 15px 'Roboto', sans-serif",
        boxShadow: '0 2px 12px rgba(0, 0, 0, 0.35)'
      }
    })
  }

  function handleCloseRoom() {
    setType('room')
    setIsHidden(!isHidden)
  }

  return (
    <div className="content">
      <header>
        <div className="logo">
          <Link to={'/'}>
            <img src={logoImg} alt="Imagem da logo" />
          </Link>
        </div>

        <div className="buttons">
          <Toaster />
          {user && <UserInfo />}

          <button onClick={copyToClipboard} className="room-button">
            <div>
              <img src={copyImg} alt="Ícone de copiar" />
            </div>
            <span>
              Sala #{roomId}
            </span>
          </button>

          {
            user?.id === authorId 
              && 
                <button onClick={handleCloseRoom} className="close-room-button">
                  Encerrar sala
                </button>
          }
        </div>
      </header>
    </div>
  );
}