/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebass/firebase.config';
export const authContext = createContext(null)
const provider = new GoogleAuthProvider()
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading , setLoading] = useState(true)

    // createUser
    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
        
    }
    // login
    const signin = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword (auth,email,password)
    }
    // google sign
    const googlesign = ()=>{
        return signInWithPopup(auth,provider)
    }

    // signout
     const logOut =()=>{
        setLoading(true)
        return signOut(auth)
     }



    // authchabge
    useEffect(()=>{
     const unsubscribe =   onAuthStateChanged(auth, presentUser =>{

            console.log("userin the state" , presentUser)
            setUser(presentUser)
            setLoading(false)
        })

        return ()=>{
            unsubscribe()
        }


    },[])


    const authInfo = {
        user,
        createUser,
        logOut,
        signin,
        loading,
        googlesign,
    }
    return (
        <authContext.Provider value={authInfo}>
            {children}

        </authContext.Provider>
    );
};

export default AuthProvider;