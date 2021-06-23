import { ReactNode } from "react";
import { Dispatch, SetStateAction, useState } from "react";
import { createContext } from "react";

type ModalType = {
  isHidden: boolean,
  setIsHidden: Dispatch<SetStateAction<boolean>>
}

type PropsType = {
  children: ReactNode,
}

export const ModalContext = createContext({} as ModalType)

export function ModalContextProvider(props: PropsType) {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <ModalContext.Provider value={{ isHidden, setIsHidden }}>
      {props.children}
    </ModalContext.Provider>
  );
}