import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { useEffect, useState } from "react";
import { createContext } from "react";
import auth from "../Firebase/Firebase.init";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  const createUser = (email, password) => {
    setLoader(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUser = (email, password) => {
    // setLoader(true)
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleSignIn = () => {
    setLoader(true)
    return signInWithPopup(auth, googleProvider);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
      console.log("User logged in ", loggedUser);
      setUser(loggedUser);
      setLoader(false)
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const updateUser= (name, photo) =>{
    return updateProfile(auth.currentUser, {displayName: name , photoURL: photo})
  }
  const signOutUser = () => {
    return signOut(auth);
  };


  const authValue = {
    user,
    setUser,
    loader, 
    createUser,
    signInUser,
    googleSignIn,
    signOutUser,
    updateUser

  };
  return (                                                                  
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
