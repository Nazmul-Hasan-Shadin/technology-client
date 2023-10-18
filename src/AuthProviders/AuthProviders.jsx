import React, { createContext } from 'react';
import {  createUserWithEmailAndPassword } from "firebase/auth";
import auth from '../firebase/firebase.config';
 export const AuthContext= createContext();
const AuthProviders = ({children}) => {

    const createUser=(email,password)=>{
       return createUserWithEmailAndPassword(auth,email,password)
    }

    


    const authInfo={
        createUser,
    }
    return (
        <AuthContext.Provider value={authInfo}>
              {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;