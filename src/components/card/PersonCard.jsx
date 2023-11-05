import React from 'react'
import {FaFacebook, FaInstagramSquare, FaTwitter, FaLinkedin} from 'react-icons/fa'
import img1 from '../../assets/images/team/1.jpg'
export default function PersonCard() {
  return (
    <div className='my-8 w-[30%] bg-slate-700 p-4 rounded-lg'>
        <img src={img1} className='rounded-md' loading='lazy' alt="" />
        <div className='text-center mt-4'>
            <p className='text-xl font-bold text-white'>Name</p>
            <p className='text-white'>Designation</p>
            <div className='text-2xl text-white flex items-center justify-center gap-2 my-2'>
                <FaFacebook/>
                <FaInstagramSquare/>
                <FaTwitter/>
                <FaLinkedin/>
            </div>
        </div>
    </div>
  )
}
