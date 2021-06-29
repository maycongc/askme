import { Toaster } from 'react-hot-toast';

import { UserInfo } from '../../components/UserInfo';
import { SignOutButton } from '../../components/SignOutButton';
import { HomeAside } from '../../components/HomeAside';
import { HomeMainContent } from '../../components/HomeMainContent';
import { Button } from '../../components/Button';
import { ModalLogin } from '../../components/Modal/ModalLogin';
import { ThemeSwitchButton } from '../../components/ThemeSwitchButton';

import leftArrowIcon from '../../assets/images/arrow-back.svg';

import { useAuth } from '../../hooks/useAuth';
import { useHome } from '../../hooks/useHome';

import { HomeWrapper, HomeHeader } from './styles';

export function Home(): JSX.Element {
  const { user } = useAuth();
  const { isHomePage, setIsHomePage } = useHome();

  function handleBackButton() {
    setIsHomePage(true);
  }

  return (
    <HomeWrapper>
      <ThemeSwitchButton />
      <Toaster />
      <ModalLogin />
      <HomeAside />

      <main className="home-main">
        <HomeHeader gap={!isHomePage}>
          {!isHomePage && (
            <Button onClick={handleBackButton} className="button back-button">
              <img src={leftArrowIcon} alt="" />
              Voltar
            </Button>
          )}
          <div>
            <UserInfo />
            {user && <SignOutButton />}
          </div>
        </HomeHeader>

        <HomeMainContent />
      </main>
    </HomeWrapper>
  );
}
