/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup } from "firebase/auth";
import app from '../firebase/Firebase.config';
import { GoogleAuthProvider } from "firebase/auth";


export const UserContext = createContext(null);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();


const ContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const register = (email, password) =>{
        return createUserWithEmailAndPassword (auth, email, password);
    }
    const login = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () =>{
        return signOut(auth)
    }
    
    const googleLogin = () => {
        return signInWithPopup(auth, provider)
    }

    useEffect( () => {
        const unSubscribe = onAuthStateChanged(auth , currentUser =>{
            setUser(currentUser)
            setLoading(false)
        })

        return () =>{
            unSubscribe();
        }

    }, [])

    const info = {
        user,
        register,
        login,
        logOut,
        loading,
        googleLogin
    }

    return (
        <UserContext.Provider value={info}>
            {children}
        </UserContext.Provider>
    );
};

export default ContextProvider;