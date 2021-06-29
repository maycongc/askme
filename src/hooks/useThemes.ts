import { useContext } from 'react';
import { ThemesContext, ThemeContextProps } from '../contexts/ThemesContext';

export function useThemes(): ThemeContextProps {
  const value = useContext(ThemesContext);

  return value;
}
