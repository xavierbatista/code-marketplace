import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { auth } from '../config/firebase';
import { useRouter } from 'next/router';

const AuthContext = createContext<any>({});

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }: any) => {
  const [user, setUser] = useState<any>(null);
  const [loadingUser, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const setUserState = onAuthStateChanged(auth, (user) => {
      user ? setUser(user) : setUser(null);
      setLoading(false);
    });

    return () => setUserState();
  }, []);

  //make sure to use try catch anywhere where signup, signin, setDisplayName, and password reset functions are used
  const signUp = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = async (redirectLink: any) => {
    try {
      await router.push(redirectLink || '/');
      await signOut(auth);
    } catch (error) {
      console.error(error);
    }
  };

  const resetPassword = (email: string) => {
    return sendPasswordResetEmail(auth, email);
  };

  const setDisplayName = (newDisplayName: string) => {
    return updateProfile(user, {
      displayName: newDisplayName,
    });
  };

  //delete this later
  const logToken = () => {
    user?.getIdToken().then((idToken: any) => {
      console.log(idToken);
    });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loadingUser,
        signUp,
        signIn,
        logout,
        resetPassword,
        setDisplayName,
        logToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
