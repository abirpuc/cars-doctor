import React, { useState } from 'react'
import {RxCross1} from 'react-icons/rx'

export default function SingleCart({button, order, handleDelete}) {
 
  return (
    <div className='flex justify-between items-center my-8 px-4 shadow-lg'>
        <button onClick={()=>handleDelete(order._id)} className='text-2xl bg-red-700 w-[40px] h-[40px] flex justify-center items-center text-white rounded-full'><RxCross1/></button>
        <img src={order.image} className='w-[150px] h-[150px] rounded-md' loading='lazy' alt="" />
        <div>
            <p>Service Name: {order?.serviceName}</p>
            <p>Client Name: {order?.name}</p>
            <p>email: {order?.email}</p>
            <p>Phone: {order?.phone}</p>
        </div>
        <p>Price: ${order?.productPrice}</p>
        <p>Date: {order?.orderDate}</p>
        {button}
    </div>
  )
}
