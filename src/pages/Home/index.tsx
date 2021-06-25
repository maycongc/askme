import { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import logoImg from '../../assets/images/logo.svg';
import googleImg from '../../assets/images/google-logo.svg';
import loginImg from '../../assets/images/login.svg';

import { Button } from '../../components/Button';
import { Aside } from '../../components/Aside';

import { useAuth } from '../../hooks/useAuth';

import { database } from '../../services/firebase';
import { toastError } from '../../services/toast';

import '../../styles/global.scss';
import './styles.scss';

export function Home() {

  const { user, signInWithGoogle } = useAuth();
  const [roomCode, setRoomCode] = useState('');

  const history = useHistory();

  async function handleCreateRoom() {
    if (!user)
      await signInWithGoogle()

    history.push('/rooms/new');
  }

  async function handleJoinRoom(event: FormEvent) {
    event.preventDefault();

    if(roomCode.trim() === '') return;

    const roomRef = await database.ref(`rooms/${roomCode}`).get();

    if(!roomRef.exists()){
      return toastError('Error. Room does not exists.')
    }

    history.push(`/rooms/${roomCode}`)
  }

  return (
    <div id="page-auth">
      <Toaster />
      <Aside />

      <main>
        <div className="main-content">
          <img src={logoImg} alt="Logo LetMeAsk" />

          <button onClick={handleCreateRoom} className="create-room">
            <img src={googleImg} alt="Logo do Google" />
            Crie sua sala com o Google
          </button>

          <div className="separator">Ou entre em uma sala</div>

          <form onSubmit={handleJoinRoom}>
            <input 
              type="text" 
              placeholder="Digite o código da sala"
              onChange={event => setRoomCode(event.target.value)}
              value={roomCode}
            />
            
            <Button type="submit">
              <img src={loginImg} alt="Log-in ícone" />
              Entrar na sala
            </Button>
          </form>
        </div>
      </main>
    </div>
  );
}
