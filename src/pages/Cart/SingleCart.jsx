import React from 'react'
import {RxCross1} from 'react-icons/rx'

import img from '../../assets/images/products/3.png'
import CardButton from './CardButton'

export default function SingleCart({button}) {
  return (
    <div className='flex justify-between items-center my-8 px-4 shadow-lg'>
        <button className='text-2xl bg-red-700 w-[40px] h-[40px] flex justify-center items-center text-white rounded-full'><RxCross1/></button>
        <img src={img} className='w-[150px] h-[150px] rounded-md' loading='lazy' alt="" />
        <div>
            <p>Name: Air Filter</p>
            <p>Color: Green</p>
            <p>Size: S</p>
        </div>
        <p>Price: $250.00</p>
        <p>Date: 02-09-2023</p>
        {button}
    </div>
  )
}
