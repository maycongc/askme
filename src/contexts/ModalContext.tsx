import { Dispatch, SetStateAction, useState, ReactNode, createContext } from "react";
import { useHistory } from "react-router-dom";
import toast from "react-hot-toast";

import { database } from "../services/firebase";
import { useEffect } from "react";

type ModalType = {
  isHidden: boolean;
  setIsHidden: Dispatch<SetStateAction<boolean>>;
  info: {
    type: string;
    ref: string;
  }
  setInfo: Dispatch<SetStateAction<{ type: string; ref: string; }>>;
  refPath: string;
  setRefPath: Dispatch<SetStateAction<string>>;
}

type PropsType = {
  children: ReactNode,
}

export const ModalContext = createContext({} as ModalType)

export function ModalContextProvider(props: PropsType) {
  const [isHidden, setIsHidden] = useState(true);

  const [info, setInfo] = useState({type: 'room', ref: ''});
  const [refPath, setRefPath] = useState('');

  const history = useHistory();

  useEffect(() => {
    if(refPath === '') return;

    setIsHidden(true);
  
    database.ref(refPath).remove().then(() => {
      if(!refPath.includes('questions')) {
        toast.success('Room closed successfully!');
        history.push('/');
      } else {
        toast.success('Question deleted successfully!');
      }
    })
  }, [refPath, history]);

  return (
    <ModalContext.Provider value={{ isHidden, setIsHidden, info, setInfo, setRefPath, refPath }}>
      {props.children}
    </ModalContext.Provider>
  );
}