import { useAuth } from "../hooks/useAuth";
import '../styles/user-bar.scss';

export function UserInfo() {

  const { user } = useAuth();

  return (
    <div className="user-info-bar">
      <strong>{user?.name}</strong>
      <img src={user?.avatar} alt="" />
    </div>
  );
}