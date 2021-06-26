import { useContext } from 'react';
import { HomeContext, HomeContextProps } from '../contexts/HomeContext';

export function useHome(): HomeContextProps {
  const value = useContext(HomeContext);

  return value;
}
