import { Link } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import { useTheme } from 'styled-components';
import logoImg from '../../assets/images/logo.svg';
import logoLightImg from '../../assets/images/logo-light.svg';
import copyImg from '../../assets/images/copy.svg';

import { Button } from '../Button';
import { SignOutButton } from '../SignOutButton';

import { useModal } from '../../hooks/useModal';
import { useAuth } from '../../hooks/useAuth';

import { toastSuccess } from '../../services/toast';

import { HeaderWrapper } from './styles';

type HeaderProps = {
  code: string;
  authorId: string;
};

export function RoomHeader(props: HeaderProps): JSX.Element {
  const { authorId, code: roomId } = props;

  const { user } = useAuth();
  const { isHidden, setIsHidden, setInfo } = useModal();
  const { title } = useTheme();

  function copyToClipboard() {
    navigator.clipboard.writeText(roomId);

    toastSuccess('Successfully copied to clipboard.');
  }

  function handleCloseRoom() {
    setInfo({
      type: 'room',
      ref: `rooms/${roomId}`,
    });
    setIsHidden(!isHidden);
  }

  return (
    <>
      <Toaster />
      <HeaderWrapper className="room-header">
        <Link to="/">
          <img
            src={title === 'light' ? logoImg : logoLightImg}
            alt="Imagem da logo"
          />
        </Link>

        <div className="buttons">
          <Button onClick={copyToClipboard} className="room-button">
            <div>
              <img src={copyImg} alt="Ícone de copiar" />
            </div>
            <span>Sala #{roomId}</span>
          </Button>

          {user?.id === authorId && (
            <Button onClick={handleCloseRoom} className="close-room">
              Encerrar sala
            </Button>
          )}

          {user && <SignOutButton />}
        </div>
      </HeaderWrapper>
    </>
  );
}
