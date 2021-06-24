import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

import logoImg from '../assets/images/logo.svg';
import copyImg from '../assets/images/copy.svg';

import { UserInfoBar } from '../components/UserInfoBar';

import '../styles/header.scss';
import { useAuth } from '../hooks/useAuth';

type HeaderProps = {
  code: string,
}

export function Header(props: HeaderProps) {
  const { user } = useAuth();
  const roomId = props.code;

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

  return (
    <header>
      <div className="logo">
        <Link to={'/'}>
          <img src={logoImg} alt="Imagem da logo" />
        </Link>
      </div>

      <div className="buttons">
        <Toaster />
        {user ? <UserInfoBar /> : ''}

        <button onClick={copyToClipboard} className="room-button">
          <div>
            <img src={copyImg} alt="Ícone de copiar" />
          </div>
          <span>
            Sala #{roomId}
          </span>
        </button>

        <button className="close-room-button">
          Encerrar sala
        </button>
      </div>
    </header>
  );
}