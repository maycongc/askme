import {
  useEffect,
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from 'react';

import { firebase, auth } from '../services/firebase';

type UserType = {
  id: string;
  name: string;
  avatar: string;
};

export type AuthContextType = {
  user: UserType | undefined;
  setUser: Dispatch<SetStateAction<UserType | undefined>>;
  signInWithGoogle: (signInType: string) => Promise<void>;
  signOut: () => Promise<void>;
};

type PropsType = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider(props: PropsType): JSX.Element {
  const { children } = props;
  const [user, setUser] = useState<UserType>();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(authorizedUser => {
      if (authorizedUser) {
        const { displayName, photoURL, uid } = authorizedUser;

        if (!displayName || !photoURL)
          throw new Error(
            `The user's Google account is missing the required information`,
          );

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL,
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  async function signInWithGoogle(signInType: string) {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const githubProvider = new firebase.auth.GithubAuthProvider();
    const facebookProvider = new firebase.auth.FacebookAuthProvider();

    let provider;

    switch (signInType) {
      case 'facebook':
        provider = facebookProvider;
        break;

      case 'github':
        provider = githubProvider;
        break;

      default:
        provider = googleProvider;
    }

    const result = await auth.signInWithPopup(provider);

    if (result.user) {
      const { displayName, photoURL, uid } = result.user;

      if (!displayName || !photoURL)
        throw new Error(
          `The user's account is missing the required information`,
        );

      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL,
      });
    }
  }

  async function signOut() {
    await auth.signOut();
  }

  return (
    <AuthContext.Provider value={{ user, setUser, signInWithGoogle, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
