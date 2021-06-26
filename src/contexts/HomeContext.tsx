import {
  Dispatch,
  SetStateAction,
  useState,
  ReactNode,
  createContext,
} from 'react';

export type HomeContextProps = {
  isHomePage: boolean;
  setIsHomePage: Dispatch<SetStateAction<boolean>>;
};

type PropsType = {
  children: ReactNode;
};

export const HomeContext = createContext({} as HomeContextProps);

export function HomeContextProvider(props: PropsType): JSX.Element {
  const { children } = props;

  const [isHomePage, setIsHomePage] = useState(true);

  return (
    <HomeContext.Provider value={{ isHomePage, setIsHomePage }}>
      {children}
    </HomeContext.Provider>
  );
}
