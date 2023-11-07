import React from 'react'
import {BsArrowRight} from 'react-icons/bs'
import img from '../../assets/images/services/3.jpg'
import { Link } from 'react-router-dom'
export default function ServiceCard({service}) {
  return (
    <div className="border-1 border-gray-500 p-4 rounded-md  shadow-xl bg-slate-700">
        <img className='rounded-md h-[150px] md:h-[200px]' src={service.img} alt="" />
        <div>
            <p className='text-white font-bold text-lg mt-2'>{service.title}</p>
            <div className='flex justify-between items-center mt-2 mb-[5px] text-cyan-500'>
                <p>Price:{service.price}</p>
                <Link to={`checkout/${service.service_id}`}><BsArrowRight/></Link>
            </div>
        </div>
    </div>
  )
}
