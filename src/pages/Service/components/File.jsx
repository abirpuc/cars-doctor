import React from 'react'
import { AiFillFileText } from 'react-icons/ai'
import { BsArrowRightSquare } from 'react-icons/bs'
export default function File() {
    return (
        <div className='my-8  rounded-md bg-black p-6'>
            <h1 className='text-white font-bold'>Download</h1>
            <div className='flex justify-between items-center my-2'>
                <div className='flex justify-start items-center gap-2'>
                    <AiFillFileText className='text-xl'/>
                    <div className='lending-2'>
                        <p>Our Browser</p>
                        <p>company Details</p>
                    </div>
                </div>
                <button className='text-2xl text-cyan-500'><BsArrowRightSquare/></button>
            </div>
            <div className='flex justify-between items-center my-2'>
                <div className='flex justify-start items-center gap-2'>
                    <AiFillFileText className='text-xl'/>
                    <div className='lending-2'>
                        <p>Our Browser</p>
                        <p>company Details</p>
                    </div>
                </div>
                <button className='text-2xl text-cyan-500'><BsArrowRightSquare/></button>
            </div>
        </div>
    )
}
