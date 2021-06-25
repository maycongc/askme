import { Link } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import logoImg from '../../assets/images/logo.svg';
import copyImg from '../../assets/images/copy.svg';

import { UserInfo } from '../../components/UserInfo';
import { SignOutButton } from '../../components/SignOutButton';

import { useModal } from '../../hooks/useModal';
import { useAuth } from '../../hooks/useAuth';

import { toastSuccess } from '../../services/toast';

import './styles.scss';

type HeaderProps = {
  code: string,
  authorId: string;
}

export function RoomHeader(props: HeaderProps) {
  const { user } = useAuth();
  const { isHidden, setIsHidden, setInfo } = useModal();
  const { authorId, code: roomId } = props;

  function copyToClipboard() {
    navigator.clipboard.writeText(roomId);

    toastSuccess('Successfully copied to clipboard.');
  }

  function handleCloseRoom() {
    setInfo({
      type: 'room',
      ref: `rooms/${roomId}`
    });
    setIsHidden(!isHidden);
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

          {
            user?.id && <SignOutButton />
          }
        </div>
      </header>
    </div>
  );
}