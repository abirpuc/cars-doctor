import React from 'react'
import {BsArrowRightCircleFill} from 'react-icons/bs'
export default function ServiceButton({service}) {
    const {title} = service
    return (
        <button className='my-4 text-md font-bold flex justify-between items-center p-2 gap-4 w-full text-white bg-cyan-500 hover:bg-cyan-600 transition-all duration-300'>
            <p>{title}</p>
            <BsArrowRightCircleFill className='text-2xl' />
        </button>
    )
}
