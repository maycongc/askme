import { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';

import { UserInfo } from '../../components/UserInfo';
import { SignOutButton } from '../../components/SignOutButton';
import { HomeAside } from '../../components/HomeAside';
import { HomeMainContent } from '../../components/HomeMainContent';
import { ModalLogin } from '../../components/Modal/ModalLogin';
import { ThemeSwitchButton } from '../../components/ThemeSwitchButton';
import { LoaderAnimation } from '../../components/LoaderAnimation';

import leftArrowIcon from '../../assets/images/arrow-back.svg';

import { useAuth } from '../../hooks/useAuth';
import { useHome } from '../../hooks/useHome';

import { HomeWrapper, HomeHeader, BackButton } from './styles';

export function Home(): JSX.Element {
  const { user } = useAuth();
  const { isHomePage, setIsHomePage } = useHome();

  const [componentDidMount, setComponentDidMount] = useState(false);

  useEffect(() => {
    setComponentDidMount(true);
  }, []);

  function handleBackButton() {
    setIsHomePage(true);
  }

  return (
    <>
      {!componentDidMount ? (
        <LoaderAnimation componentDidMount={componentDidMount} />
      ) : (
        <HomeWrapper>
          <ThemeSwitchButton />
          <Toaster />
          <ModalLogin />
          <HomeAside />

          <main className="home-main">
            <HomeHeader gap={!isHomePage}>
              {!isHomePage && (
                <BackButton onClick={handleBackButton}>
                  <img src={leftArrowIcon} alt="" />
                  <p>Voltar</p>
                </BackButton>
              )}
              <div>
                <UserInfo />
                {user && <SignOutButton />}
              </div>
            </HomeHeader>
            <HomeMainContent />
          </main>
        </HomeWrapper>
      )}
    </>
  );
}
