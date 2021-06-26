import { UserInfo } from '../../components/UserInfo';
import { SignOutButton } from '../../components/SignOutButton';
import { Aside } from '../../components/Aside';
import { HomeContent } from '../../components/HomeContent';
import { HomeCreateRoom } from '../../components/HomeCreateRoom';
import { Button } from '../../components/Button';

import leftArrowIcon from '../../assets/images/arrow-back.svg';

import { useAuth } from '../../hooks/useAuth';
import { useHome } from '../../hooks/useHome';

import './styles.scss';

export function Home(): JSX.Element {
  const { user } = useAuth();
  const { isHomePage, setIsHomePage } = useHome();

  function handleBackButton() {
    setIsHomePage(true);
  }

  return (
    <div id="page-home">
      <Aside />

      <main className="home-main">
        <header className={`home-header ${!isHomePage && 'gap'}`}>
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
        </header>

        {isHomePage ? <HomeContent /> : <HomeCreateRoom />}
      </main>
    </div>
  );
}
