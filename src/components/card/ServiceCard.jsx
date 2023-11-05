import React from 'react'
import {BsArrowRight} from 'react-icons/bs'
import img from '../../assets/images/services/3.jpg'
export default function ServiceCard({service}) {
  return (
    <div className="border-1 border-gray-500 p-4 rounded-md shadow-xl bg-slate-700">
        <img className='rounded-md' src={service.img} alt="" />
        <div>
            <p className='text-black font-bold text-lg mt-2'>{service.name}</p>
            <div className='flex justify-between items-center mt-2 mb-[5px] text-cyan-500'>
                <p>Price:{service.price}</p>
                <BsArrowRight/>
            </div>
        </div>
    </div>
  )
}
