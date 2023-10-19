import React, { createContext, useEffect, useState } from 'react';
import {  createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import auth from '../firebase/firebase.config';
 export const AuthContext= createContext();
const AuthProviders = ({children}) => {
   const [user,setUser]=useState();
   const [loading,setLoading]= useState(true);

    const createUser=(email,password)=>{
      setLoading(true)
       return createUserWithEmailAndPassword(auth,email,password)
    }
  const signInUser= (email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
  }


  const handleUpdateProfile= (name,photo)=>{
    setLoading(true)
    return updateProfile(auth.currentUser,{
      displayName:name, photoURL:photo
    })
  }
  const logOut=()=>{
    setLoading(true)
    return signOut(auth)
  }



  useEffect(()=>{
    const unsubscribe= onAuthStateChanged(auth,user=>{
     
      setUser(user)
      setLoading(false)

    })

    return ()=> unsubscribe();
  },[])
  console.log( user);



    const authInfo={
        createUser,
        signInUser,
        handleUpdateProfile,
        user,
        logOut,
        loading
        
    }
    return (
        <AuthContext.Provider value={authInfo}>
              {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;