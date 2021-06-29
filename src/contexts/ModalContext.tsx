import {
  Dispatch,
  SetStateAction,
  useState,
  ReactNode,
  createContext,
  useEffect,
} from 'react';
import { useHistory } from 'react-router-dom';

import { database } from '../services/firebase';
import { toastSuccess } from '../services/toast';

export type ModalType = {
  isHidden: boolean;
  setIsHidden: Dispatch<SetStateAction<boolean>>;
  info: {
    type: string;
    ref: string;
  };
  setInfo: Dispatch<SetStateAction<{ type: string; ref: string }>>;
  refPath: string;
  setRefPath: Dispatch<SetStateAction<string>>;
};

type PropsType = {
  children: ReactNode;
};

export const ModalContext = createContext({} as ModalType);

export function ModalContextProvider(props: PropsType): JSX.Element {
  const { children } = props;
  const [isHidden, setIsHidden] = useState(true);
  const [info, setInfo] = useState({ type: 'room', ref: '' });
  const [refPath, setRefPath] = useState('');

  const history = useHistory();

  useEffect(() => {
    if (refPath === '') return;

    setIsHidden(true);

    database
      .ref(refPath)
      .remove()
      .then(() => {
        if (!refPath.includes('questions')) {
          toastSuccess('Room closed successfully!');
          history.push('/');
        } else {
          toastSuccess('Question deleted successfully!');
        }
      });
  }, [refPath, history]);

  return (
    <ModalContext.Provider
      value={{ isHidden, setIsHidden, info, setInfo, setRefPath, refPath }}
    >
      {children}
    </ModalContext.Provider>
  );
}
