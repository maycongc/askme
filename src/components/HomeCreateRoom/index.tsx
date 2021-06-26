import { FormEvent, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Button } from '../Button';

import { useHome } from '../../hooks/useHome';
import { useAuth } from '../../hooks/useAuth';

import { database } from '../../services/firebase';

import logoImg from '../../assets/images/logo.svg';

import './styles.scss';

export function HomeCreateRoom(): JSX.Element {
  const { setIsHomePage } = useHome();

  const { user } = useAuth();
  const [newRoom, setNewRoom] = useState('');

  const history = useHistory();

  useEffect(() => {
    if (!user) {
      setIsHomePage(true);
    }
  }, [user, history]);

  async function handleCreateRoom(event: FormEvent) {
    event.preventDefault();

    if (newRoom.trim() === '') return;

    const roomRef = database.ref('rooms');

    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id,
    });

    history.push(`/rooms/${firebaseRoom.key}`);
  }

  return (
    <div className="main-content">
      <img src={logoImg} alt="logo" />

      <h2>Crie uma nova sala</h2>

      <form onSubmit={handleCreateRoom}>
        <input
          type="text"
          placeholder="Digite o nome da sala"
          onChange={event => setNewRoom(event.target.value)}
          value={newRoom}
        />

        <Button type="submit" className="button filter">
          Criar sala
        </Button>
      </form>

      <span>
        Quer entrar em uma sala já existente?{' '}
        <Button className="link-button" onClick={() => setIsHomePage(true)}>
          Clique aqui
        </Button>
      </span>
    </div>
  );
}
