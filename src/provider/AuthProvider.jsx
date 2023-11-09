import React, { createContext, useEffect, useState }  from 'react'
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup,signOut } from "firebase/auth";
import { app } from '../firebase/firebase.config';


export const AuthContext = createContext()
const auth = getAuth(app)
const provider = new GoogleAuthProvider();

export default function AuthProvider({children}) {
    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(false)

    const createUser = (email, password)=>{
      setLoader(true)
      return createUserWithEmailAndPassword(auth, email, password)
    }

    const singInUser = (email, password)=>{
       return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSingIn = () =>{
      return signInWithPopup(auth, provider)
    }

    const logout = () =>{
      return signOut(auth)
    }

    useEffect(()=>{
      const unSubscribe = onAuthStateChanged(auth, currentUser =>{
        setUser(currentUser)
        console.log("currentUser:"+ currentUser)
        setLoader(false)

      });
      return ()=>{
        return unSubscribe()
      }
    },[])

    const authInfo = {
        user,
        loader,
        createUser,
        singInUser,
        googleSingIn,
        logout

    }
  return (
   <AuthContext.Provider value={authInfo}>
    {children}
   </AuthContext.Provider>
  )
}
