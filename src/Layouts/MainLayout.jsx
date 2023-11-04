import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/SharedComponents/Footer/Footer'
import Header from '../components/SharedComponents/Header/Header'

export default function MainLayout() {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}
