import { Link } from 'react-router-dom';

import logoImg from '../assets/images/logo.svg';

import { Button } from '../components/Button';
import { HomeAside } from '../components/HomeAside';
import { SignOutButton } from '../components/SignOutButton'
import { UserInfoBar } from '../components/UserInfoBar'

// import { useAuth } from '../hooks/useAuth';

import '../styles/auth.scss';

export function NewRoom() {
  // const { user } = useAuth();

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

          <form action="#">
            <input
              type="text"
              placeholder="Nome da sala"
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
