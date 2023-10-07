/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebass/firebase.config';
export const authContext = createContext(null)
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
    }
    return (
        <authContext.Provider value={authInfo}>
            {children}

        </authContext.Provider>
    );
};

export default AuthProvider;