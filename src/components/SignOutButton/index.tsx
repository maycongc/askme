import loginIcon from '../../assets/images/logout.svg';

import { useAuth } from '../../hooks/useAuth';
import { useHome } from '../../hooks/useHome';

import { ButtonSignOut } from './styles';

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
    <ButtonSignOut onClick={handleSignOut}>
      <img src={loginIcon} alt="Logout ícone" />
    </ButtonSignOut>
  );
}
