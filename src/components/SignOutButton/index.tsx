import { useHistory } from 'react-router-dom'

import loginIcon from '../../assets/images/logout.svg';

import { useAuth } from '../../hooks/useAuth';

import './styles.scss';

export function SignOutButton() {

  const history = useHistory();
  const { user, setUser ,signOut } = useAuth();

  async function handleSignOut() {
    if(user)
      await signOut();
    setUser(undefined);
    history.push('/');
  }

  return (
    <button onClick={handleSignOut} className="signOut">
      <img src={loginIcon} alt="Logout ícone" />
      Sair
    </button>
  );
}