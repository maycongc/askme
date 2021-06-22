import { useEffect, createContext, useState, ReactNode } from 'react';

import { firebase, auth } from '../services/firebase';

type UserType = {
  id: string,
  name: string,
  avatar: string
}

type AuthContextType = {
  user: UserType | undefined,
  signInWithGoogle: () => Promise<void>;
}

type PropsType = {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider(props: PropsType) {
  const [user, setUser] = useState<UserType>();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if(user) {
        const { displayName, photoURL, uid } = user;
      
        if( !displayName || !photoURL) 
          throw new Error(`The user's Google account is missing the required information`);

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL
        });
      }
    })

    return () => {
      unsubscribe();
    }
  }, [])

  async function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();

    const result = await auth.signInWithPopup(provider);

    if(result.user) {
      const { displayName, photoURL, uid } = result.user;
      
      if( !displayName || !photoURL) 
        throw new Error(`The user's Google account is missing the required information`);

      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL
      });
    }
  }

  return (
    <AuthContext.Provider value={{ user, signInWithGoogle }}>
      {props.children}
    </AuthContext.Provider>
  );
}