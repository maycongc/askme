import { useAuth } from '../../hooks/useAuth';

import { UserInfoWrapper } from './styles';

export function UserInfo(): JSX.Element {
  const { user } = useAuth();

  return (
    <UserInfoWrapper>
      <strong>{!user ? 'Visitante' : user.name}</strong>
      <img
        src={!user ? 'https://i.imgur.com/9BibObN.png' : user.avatar}
        alt="foto do usuário"
      />
    </UserInfoWrapper>
  );
}
