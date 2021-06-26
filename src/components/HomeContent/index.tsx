import { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Button } from '../Button';

import logoImg from '../../assets/images/logo.svg';
import googleImg from '../../assets/images/google-logo.svg';
import loginImg from '../../assets/images/login.svg';
import githubImg from '../../assets/images/github-mark.svg';
import facebookImg from '../../assets/images/facebook-mark.svg';

import { toastError } from '../../services/toast';
import { database } from '../../services/firebase';

import { useAuth } from '../../hooks/useAuth';
import { useHome } from '../../hooks/useHome';

import './styles.scss';

export function HomeContent(): JSX.Element {
  const { user, signInWithGoogle } = useAuth();
  const { setIsHomePage } = useHome();
  const [roomCode, setRoomCode] = useState('');

  const history = useHistory();

  async function handleCreateRoom(signInType: string) {
    if (!user) await signInWithGoogle(signInType);

    setIsHomePage(false);
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
    <div className="main-content">
      <img src={logoImg} alt="logo" />

      <h2>Crie sua sala com</h2>

      <Button
        onClick={() => handleCreateRoom('google')}
        className="button filter sociais google"
      >
        <img src={googleImg} alt="logo Google" />
        Google
      </Button>

      <Button
        onClick={() => handleCreateRoom('facebook')}
        className="button filter sociais teste"
      >
        <img src={facebookImg} alt="logo Facebook" />
        Facebook
      </Button>

      <Button
        onClick={() => handleCreateRoom('github')}
        className="button filter sociais github"
      >
        <img src={githubImg} alt="logo GitHub" />
        GitHub
      </Button>

      <div className="separator">Ou entre em uma sala</div>

      <form onSubmit={handleJoinRoom}>
        <input
          type="text"
          placeholder="Digite o código da sala"
          onChange={event => setRoomCode(event.target.value)}
          value={roomCode}
        />

        <Button type="submit" className="button filter">
          <img src={loginImg} alt="" />
          Entrar na sala
        </Button>
      </form>
    </div>
  );
}
