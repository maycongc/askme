import sunImg from '../../assets/images/sun.svg';
import moonImg from '../../assets/images/moon.svg';

import { useThemes } from '../../hooks/useThemes';

import { ThemeSwitchButtonWrapper } from './styles';

export function ThemeSwitchButton(): JSX.Element {
  const { theme, setLocalTheme } = useThemes();

  function handleSwitchTheme() {
    setLocalTheme(theme.title === 'light' ? 'dark' : 'light');
  }

  return (
    <ThemeSwitchButtonWrapper onClick={handleSwitchTheme} type="button">
      <img src={theme.title === 'light' ? sunImg : moonImg} alt="" />
    </ThemeSwitchButtonWrapper>
  );
}
