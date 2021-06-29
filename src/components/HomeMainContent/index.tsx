import { useTheme } from 'styled-components';

import { HomeJoinRoom } from './HomeJoinRoom';
import { HomeCreateRoom } from './HomeCreateRoom';

import logoImg from '../../assets/images/logo.svg';
import logoLightImg from '../../assets/images/logo-light.svg';

import { useHome } from '../../hooks/useHome';

import { MainContent } from './styles';

export function HomeMainContent(): JSX.Element {
  const { isHomePage } = useHome();
  const { title } = useTheme();

  return (
    <MainContent>
      <img src={title === 'light' ? logoImg : logoLightImg} alt="logo" />
      {isHomePage ? <HomeJoinRoom /> : <HomeCreateRoom />}
    </MainContent>
  );
}
