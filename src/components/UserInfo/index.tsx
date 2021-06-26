import { useAuth } from '../../hooks/useAuth';

import './styles.scss';

export function UserInfo(): JSX.Element {
  const { user } = useAuth();

  return (
    <div className="user-info">
      <strong>{!user ? 'Visitante' : user.name}</strong>
      <img
        src={!user ? 'https://i.imgur.com/9BibObN.png' : user.avatar}
        alt="foto do usuário"
      />
    </div>
  );
}
