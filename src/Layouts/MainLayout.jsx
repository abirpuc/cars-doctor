import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/SharedComponents/Footer/Footer'
import Header from '../components/SharedComponents/Header/Header'

export default function MainLayout() {
    return (
        <div >
            <Header />
            <div className='w-[95%] md:w-[80%] mx-auto'>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}
