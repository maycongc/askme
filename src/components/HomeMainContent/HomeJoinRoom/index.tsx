import { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';

import loginImg from '../../../assets/images/login.svg';

import { toastError } from '../../../services/toast';
import { database } from '../../../services/firebase';

import { useAuth } from '../../../hooks/useAuth';
import { useHome } from '../../../hooks/useHome';

import { Separator, StyledButton } from './styles';
import { useModal } from '../../../hooks/useModal';

export function HomeJoinRoom(): JSX.Element {
  const { user } = useAuth();
  const { setIsHomePage } = useHome();
  const { setIsHidden } = useModal();

  const [roomCode, setRoomCode] = useState('');

  const history = useHistory();

  async function handleLogin() {
    setIsHidden(false);
  }

  async function handleJoinRoom(event: FormEvent) {
    event.preventDefault();

    if (roomCode.trim() === '') return;

    const roomRef = await database.ref(`rooms/${roomCode}`).get();

    if (!roomRef.exists()) {
      return toastError('Error. Room does not exists.');
    }

    history.push(`/rooms/${roomCode}`);
  }

  return (
    <>
      <h2>{!user ? 'Realize login e crie uma sala' : 'Crie sua sala'}</h2>

      {!user ? (
        <StyledButton onClick={handleLogin} className="second">
          Login
        </StyledButton>
      ) : (
        <StyledButton onClick={() => setIsHomePage(false)}>
          Criar sala
        </StyledButton>
      )}

      <Separator>Ou entre em uma sala</Separator>

      <form onSubmit={handleJoinRoom}>
        <input
          type="text"
          placeholder="Digite o código da sala"
          onChange={event => setRoomCode(event.target.value)}
          value={roomCode}
        />

        <StyledButton type="submit">
          <img src={loginImg} alt="" />
          Entrar na sala
        </StyledButton>
      </form>
    </>
  );
}
