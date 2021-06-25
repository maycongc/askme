import { FormEvent, useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';

import { Button } from '../../components/Button';
import { Aside } from '../../components/Aside';
import { SignOutButton } from '../../components/SignOutButton'
import { UserInfo } from '../../components/UserInfo'

import { useAuth } from '../../hooks/useAuth';

import { database } from '../../services/firebase';

import '../Home/styles.scss';

export function NewRoom() {
  const { user } = useAuth();
  const [newRoom, setNewRoom] = useState('');

  const history = useHistory();

  useEffect(() => {
    if(!user) return history.push('/');
  }, [user, history])

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
      <Aside />

      <main>
        {
          user 
            &&
            <div className="header">
              <UserInfo />
              <SignOutButton />
            </div>
        }

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
