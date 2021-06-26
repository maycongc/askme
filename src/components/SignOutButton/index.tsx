import { Button } from '../Button';

import loginIcon from '../../assets/images/logout.svg';

import { useAuth } from '../../hooks/useAuth';
import { useHome } from '../../hooks/useHome';

import './styles.scss';

export function SignOutButton(): JSX.Element {
  const { user, setUser, signOut } = useAuth();
  const { setIsHomePage } = useHome();

  async function handleSignOut() {
    if (user) {
      await signOut();
      setUser(undefined);
      setIsHomePage(true);
    }
  }

  return (
    <Button onClick={handleSignOut} className="signOut">
      <img src={loginIcon} alt="Logout ícone" />
      Deslogar
    </Button>
  );
}
