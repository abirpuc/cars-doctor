import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../provider/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom'

export default function PrivateRouter({children}) {
    const user = useContext(AuthContext)
    const location = useLocation()
    if(user){
        return children
    }
  return <Navigate state={{from: location}} replace></Navigate>
}
