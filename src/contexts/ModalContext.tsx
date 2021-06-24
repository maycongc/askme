import { ReactNode } from "react";
import { Dispatch, SetStateAction, useState } from "react";
import { createContext } from "react";

type ModalType = {
  isHidden: boolean;
  setIsHidden: Dispatch<SetStateAction<boolean>>;
  type: string;
  setType: Dispatch<SetStateAction<string>>;
}

type PropsType = {
  children: ReactNode,
}

export const ModalContext = createContext({} as ModalType)

export function ModalContextProvider(props: PropsType) {
  const [isHidden, setIsHidden] = useState(true);
  const [type, setType] = useState('room');

  return (
    <ModalContext.Provider value={{ isHidden, setIsHidden, type, setType }}>
      {props.children}
    </ModalContext.Provider>
  );
}