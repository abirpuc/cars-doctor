import React, { createContext, useState }  from 'react'
import { getAuth } from "firebase/auth";
import { app } from '../firebase/firebase.config';


export const AuthContext = createContext()
const auth = getAuth(app)

export default function AuthProvider({children}) {
    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState()

    const authInfo = {
        user,
        loader
    }
  return (
   <AuthContext.Provider value={authInfo}>
    {children}
   </AuthContext.Provider>
  )
}
