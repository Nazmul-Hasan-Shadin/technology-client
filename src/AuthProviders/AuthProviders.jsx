import React, { createContext, useEffect, useState } from 'react';
import {  createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import auth from '../firebase/firebase.config';
 export const AuthContext= createContext();
const AuthProviders = ({children}) => {
   const [user,setUser]=useState();

    const createUser=(email,password)=>{
       return createUserWithEmailAndPassword(auth,email,password)
    }
  const signInUser= (email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
  }


  const handleUpdateProfile= (name,photo)=>{
    return updateProfile(auth.currentUser,{
      displayName:name, photoURL:photo
    })
  }



  useEffect(()=>{
    const unsubscribe= onAuthStateChanged(auth,user=>{
     
      setUser(user)

    })

    return ()=> unsubscribe();
  },[])
  console.log( user);



    const authInfo={
        createUser,
        signInUser,
        handleUpdateProfile
        
    }
    return (
        <AuthContext.Provider value={authInfo}>
              {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;