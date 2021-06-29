import {
  createContext,
  ReactNode,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from 'react';
import { ThemeProvider } from 'styled-components';

import { lightTheme } from '../styles/themes/light';
import { darkTheme } from '../styles/themes/dark';

export type ThemeContextProps = {
  theme: typeof lightTheme;
  localTheme: string | null;
  setLocalTheme: Dispatch<SetStateAction<string | null>>;
};

type PropsType = {
  children: ReactNode;
};

export const ThemesContext = createContext({} as ThemeContextProps);

export function ThemesContextProvider({ children }: PropsType): JSX.Element {
  const [localTheme, setLocalTheme] = useState<string | null>(
    localStorage.getItem('theme'),
  );

  const [theme, setTheme] = useState(darkTheme);

  function saveThemeOnLocalStorage(themeTitle: string) {
    localStorage.setItem('theme', themeTitle);
  }

  useEffect(() => {
    switch (localTheme) {
      case 'light':
        setTheme(lightTheme);
        saveThemeOnLocalStorage('light');
        break;

      default:
        setTheme(darkTheme);
        saveThemeOnLocalStorage('dark');
    }
  }, [localTheme]);

  return (
    <ThemesContext.Provider value={{ theme, localTheme, setLocalTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemesContext.Provider>
  );
}
