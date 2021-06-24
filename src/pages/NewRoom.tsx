import { FormEvent, useState } from 'react';
 import { Link, useHistory } from 'react-router-dom';

import logoImg from '../assets/images/logo.svg';

import { Button } from '../components/Button';
import { HomeAside } from '../components/HomeAside';
import { SignOutButton } from '../components/SignOutButton'
import { UserInfoBar } from '../components/UserInfoBar'

import { useAuth } from '../hooks/useAuth';

import { database } from '../services/firebase';

import '../styles/auth.scss';

export function NewRoom() {
  const { user } = useAuth();
  const [newRoom, setNewRoom] = useState('');

  const history = useHistory();

  async function handleCreateRoom(event: FormEvent) {
    event.preventDefault();

    if(newRoom.trim() === '') return;

    const roomRef = database.ref('rooms')

    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id,
    })

    history.push(`/rooms/${firebaseRoom.key}`)
  }

  return (
    <div id="page-auth">
      <HomeAside />

      <main>
        <div className="header">
          <UserInfoBar />
          <SignOutButton />
        </div>

        <div className="main-content">
          <img src={logoImg} alt="Logo LetMeAsk" />
          <h2>Crie uma nova sala</h2>

          <form onSubmit={handleCreateRoom}>
            <input
              type="text"
              placeholder="Nome da sala"
              onChange={event => setNewRoom(event.target.value)}
              value={newRoom}
            />
            
            <Button type="submit">
              Criar Sala
            </Button>
          </form>

          <p>
            Quer entrar em uma sala já existente? 
            <Link to="/">Clique aqui</Link>
          </p>
        </div>
      </main>
    </div>
  );
}
