import { useHistory } from 'react-router-dom';

import logoImg from '../assets/images/logo.svg';
import googleImg from '../assets/images/google-logo.svg';
import loginImg from '../assets/images/log-in.svg';

import { Button } from '../components/Button';
import { HomeAside } from '../components/HomeAside'

import { useAuth } from '../hooks/useAuth';

import '../styles/auth.scss';

export function Home() {
  const history = useHistory();

  const { user, signInWithGoogle } = useAuth();

  async function handleCreateRoom() {
    if (!user)
      await signInWithGoogle()

    history.push('/rooms/new');
  }

  return (
    <div id="page-auth">
      <HomeAside />

      <main>
        <div className="main-content">
          <img src={logoImg} alt="Logo LetMeAsk" />

          <button onClick={handleCreateRoom} className="create-room">
            <img src={googleImg} alt="Logo do Google" />
            Crie sua sala com o Google
          </button>

          <div className="separator">Ou entre em uma sala</div>

          <form action="">
            <input 
              type="text" 
              placeholder="Digite o código da sala"
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
